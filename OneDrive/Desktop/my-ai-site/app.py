from flask import Flask, render_template, request, send_file
import requests
import base64
import io

app = Flask(__name__)

# Stable Diffusion API URL
SD_API = "http://127.0.0.1:7860/sdapi/v1/img2img"

def encode_image(file):
    return base64.b64encode(file.read()).decode("utf-8")

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        try:
            prompt = request.form["prompt"]
            img1 = encode_image(request.files["image1"])

            payload = {
                "init_images": [img1],
                "prompt": prompt,
                "denoising_strength": 0.5,
                "steps": 28,
                "cfg_scale": 7
            }

            # Optional second image (for ControlNet)
            if "image2" in request.files and request.files["image2"].filename != "":
                img2 = encode_image(request.files["image2"])
                payload["alwayson_scripts"] = {
                    "controlnet": {
                        "args": [{
                            "input_image": img2,
                            "module": "openpose",
                            "model": "control_v11p_sd15_openpose",
                            "weight": 1.0
                        }]
                    }
                }

            r = requests.post(SD_API, json=payload)
            result = r.json()

            image = base64.b64decode(result["images"][0])
            return send_file(io.BytesIO(image), mimetype="image/png")

        except Exception as e:
            return f"<h3>Error:</h3><p>{str(e)}</p>"

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
