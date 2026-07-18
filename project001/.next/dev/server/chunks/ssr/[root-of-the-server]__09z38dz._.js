module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/custom/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.module.js [app-ssr] (ecmascript)");
'use client';
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
        disableTransitionOnChange: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/custom/providers.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/packages/core/src/auth/crypto.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generate cryptographically secure random bytes and return as base64url string.
 */ __turbopack_context__.s([
    "base64urlEncode",
    ()=>base64urlEncode,
    "generateRandomBase64url",
    ()=>generateRandomBase64url,
    "sha256Base64url",
    ()=>sha256Base64url
]);
function generateRandomBase64url(byteLength = 32) {
    const bytes = new Uint8Array(byteLength);
    crypto.getRandomValues(bytes);
    return base64urlEncode(bytes);
}
function base64urlEncode(bytes) {
    const binary = String.fromCharCode(...bytes);
    const base64 = btoa(binary);
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function sha256Base64url(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return base64urlEncode(new Uint8Array(hashBuffer));
}
}),
"[project]/packages/core/src/auth/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAllAuthData",
    ()=>clearAllAuthData,
    "clearAuthInfo",
    ()=>clearAuthInfo,
    "clearCSRFToken",
    ()=>clearCSRFToken,
    "clearCodeVerifier",
    ()=>clearCodeVerifier,
    "clearDerivAccounts",
    ()=>clearDerivAccounts,
    "getAccountType",
    ()=>getAccountType,
    "getActiveLoginId",
    ()=>getActiveLoginId,
    "getAuthInfo",
    ()=>getAuthInfo,
    "getCSRFToken",
    ()=>getCSRFToken,
    "getCodeVerifier",
    ()=>getCodeVerifier,
    "getDerivAccounts",
    ()=>getDerivAccounts,
    "setAccountType",
    ()=>setAccountType,
    "setActiveLoginId",
    ()=>setActiveLoginId,
    "storeAuthInfo",
    ()=>storeAuthInfo,
    "storeCSRFToken",
    ()=>storeCSRFToken,
    "storeCodeVerifier",
    ()=>storeCodeVerifier,
    "storeDerivAccounts",
    ()=>storeDerivAccounts
]);
const CSRF_TOKEN_KEY = 'oauth_csrf_token';
const CODE_VERIFIER_KEY = 'oauth_code_verifier';
const AUTH_INFO_KEY = 'auth_info';
const DERIV_ACCOUNTS_KEY = 'deriv_accounts';
const ACTIVE_LOGINID_KEY = 'active_loginid';
const ACCOUNT_TYPE_KEY = 'account_type';
const TOKEN_MAX_AGE_MS = 10 * 60 * 1000; // 10 minutes
function storeCSRFToken(token) {
    const stored = {
        value: token,
        createdAt: Date.now()
    };
    sessionStorage.setItem(CSRF_TOKEN_KEY, JSON.stringify(stored));
}
function getCSRFToken() {
    const raw = sessionStorage.getItem(CSRF_TOKEN_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw);
    if (Date.now() - stored.createdAt > TOKEN_MAX_AGE_MS) {
        clearCSRFToken();
        return null;
    }
    return stored.value;
}
function clearCSRFToken() {
    sessionStorage.removeItem(CSRF_TOKEN_KEY);
}
function storeCodeVerifier(verifier) {
    const stored = {
        value: verifier,
        createdAt: Date.now()
    };
    sessionStorage.setItem(CODE_VERIFIER_KEY, JSON.stringify(stored));
}
function getCodeVerifier() {
    const raw = sessionStorage.getItem(CODE_VERIFIER_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw);
    if (Date.now() - stored.createdAt > TOKEN_MAX_AGE_MS) {
        clearCodeVerifier();
        return null;
    }
    return stored.value;
}
function clearCodeVerifier() {
    sessionStorage.removeItem(CODE_VERIFIER_KEY);
}
function storeAuthInfo(authInfo) {
    localStorage.setItem(AUTH_INFO_KEY, JSON.stringify(authInfo));
}
function getAuthInfo() {
    const raw = localStorage.getItem(AUTH_INFO_KEY);
    if (!raw) return null;
    const authInfo = JSON.parse(raw);
    if (authInfo.expires_at && Date.now() > authInfo.expires_at * 1000) {
        return null; // Token expired
    }
    return authInfo;
}
function clearAuthInfo() {
    localStorage.removeItem(AUTH_INFO_KEY);
}
function storeDerivAccounts(accounts) {
    localStorage.setItem(DERIV_ACCOUNTS_KEY, JSON.stringify(accounts));
}
function getDerivAccounts() {
    const raw = localStorage.getItem(DERIV_ACCOUNTS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
}
function clearDerivAccounts() {
    localStorage.removeItem(DERIV_ACCOUNTS_KEY);
}
function setActiveLoginId(loginId) {
    localStorage.setItem(ACTIVE_LOGINID_KEY, loginId);
}
function getActiveLoginId() {
    return localStorage.getItem(ACTIVE_LOGINID_KEY);
}
function setAccountType(type) {
    localStorage.setItem(ACCOUNT_TYPE_KEY, type);
}
function getAccountType() {
    return localStorage.getItem(ACCOUNT_TYPE_KEY);
}
function clearAllAuthData() {
    clearCSRFToken();
    clearCodeVerifier();
    clearAuthInfo();
    clearDerivAccounts();
    localStorage.removeItem(ACTIVE_LOGINID_KEY);
    localStorage.removeItem(ACCOUNT_TYPE_KEY);
}
}),
"[project]/packages/core/src/config/urls.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getApiBaseUrl",
    ()=>getApiBaseUrl,
    "getAppBuilderBaseUrl",
    ()=>getAppBuilderBaseUrl,
    "getAuthBaseUrl",
    ()=>getAuthBaseUrl,
    "getPublicWsUrl",
    ()=>getPublicWsUrl
]);
function getEnv() {
    if (typeof globalThis !== 'undefined' && typeof process !== 'undefined') {
        const env = process.env.NEXT_PUBLIC_DERIV_ENV;
        if (env === 'preview') return 'preview';
    }
    return 'production';
}
const URLS = {
    production: {
        authBase: 'https://auth.deriv.com/oauth2',
        apiBase: 'https://api.derivws.com/trading/v1/options',
        publicWs: 'wss://api.derivws.com/trading/v1/options/ws/public',
        appBuilder: 'https://developers.deriv.com'
    },
    preview: {
        authBase: 'https://staging-auth.deriv.com/oauth2',
        apiBase: 'https://staging-api.derivws.com/trading/v1/options',
        publicWs: 'wss://staging-api.derivws.com/trading/v1/options/ws/public',
        appBuilder: 'https://staging-developers.deriv.com'
    }
};
function getAuthBaseUrl() {
    return URLS[getEnv()].authBase;
}
function getApiBaseUrl() {
    return URLS[getEnv()].apiBase;
}
function getPublicWsUrl() {
    return URLS[getEnv()].publicWs;
}
function getAppBuilderBaseUrl() {
    return URLS[getEnv()].appBuilder;
}
}),
"[project]/packages/core/src/auth/oauth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OAuthError",
    ()=>OAuthError,
    "buildAuthorizationUrl",
    ()=>buildAuthorizationUrl,
    "buildSignUpUrl",
    ()=>buildSignUpUrl,
    "cleanupUrl",
    ()=>cleanupUrl,
    "exchangeCodeForTokens",
    ()=>exchangeCodeForTokens,
    "handleOAuthCallback",
    ()=>handleOAuthCallback,
    "initiateLogin",
    ()=>initiateLogin,
    "initiateSignUp",
    ()=>initiateSignUp,
    "parseCallbackParams",
    ()=>parseCallbackParams,
    "refreshAccessToken",
    ()=>refreshAccessToken,
    "validateCallback",
    ()=>validateCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/crypto.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/config/urls.ts [app-ssr] (ecmascript)");
;
;
;
/**
 * Build the base PKCE URLSearchParams shared by login and sign-up.
 * Stores a fresh CSRF token and code verifier in sessionStorage.
 */ async function buildPkceParams(config) {
    const csrfToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBase64url"])(32);
    const codeVerifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateRandomBase64url"])(32);
    const codeChallenge = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$crypto$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sha256Base64url"])(codeVerifier);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeCSRFToken"])(csrfToken);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeCodeVerifier"])(codeVerifier);
    return new URLSearchParams({
        scope: config.scopes ?? 'trade account_manage',
        response_type: 'code',
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        state: csrfToken,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256'
    });
}
async function buildAuthorizationUrl(config) {
    const params = await buildPkceParams(config);
    if (config.affiliateToken) {
        const tokenParam = config.affiliateTokenParam ?? 't';
        params.set(tokenParam, config.affiliateToken);
    }
    if (config.utmSource) params.set('utm_source', config.utmSource);
    if (config.utmMedium) params.set('utm_medium', config.utmMedium);
    if (config.utmCampaign) params.set('utm_campaign', config.utmCampaign);
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthBaseUrl"])()}/auth?${params.toString()}`;
}
async function buildSignUpUrl(config) {
    const params = await buildPkceParams(config);
    params.set('prompt', 'registration');
    if (config.affiliateToken) {
        const tokenParam = config.affiliateTokenParam ?? 't';
        params.set(tokenParam, config.affiliateToken);
    }
    if (config.utmSource) params.set('utm_source', config.utmSource);
    if (config.utmMedium) params.set('utm_medium', config.utmMedium);
    if (config.utmCampaign) params.set('utm_campaign', config.utmCampaign);
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthBaseUrl"])()}/auth?${params.toString()}`;
}
async function initiateLogin(config) {
    const url = await buildAuthorizationUrl(config);
    window.location.href = url;
}
async function initiateSignUp(config) {
    const url = await buildSignUpUrl(config);
    window.location.href = url;
}
function parseCallbackParams(url) {
    const urlObj = new URL(url);
    return {
        code: urlObj.searchParams.get('code'),
        state: urlObj.searchParams.get('state'),
        scope: urlObj.searchParams.get('scope'),
        error: urlObj.searchParams.get('error'),
        error_description: urlObj.searchParams.get('error_description')
    };
}
function validateCallback(params, redirectUri) {
    // Check for error response
    if (params.error) {
        cleanupUrl(redirectUri);
        throw new OAuthError(`OAuth error: ${params.error} - ${params.error_description || ''}`);
    }
    // State must be present
    if (!params.state) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
        cleanupUrl(redirectUri);
        throw new OAuthError('Missing state parameter — possible CSRF attack');
    }
    // Validate CSRF token matches
    const storedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCSRFToken"])();
    if (!storedToken || storedToken !== params.state) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
        cleanupUrl(redirectUri);
        throw new OAuthError('CSRF token mismatch — possible CSRF attack');
    }
    // Clear CSRF token after successful validation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCSRFToken"])();
    if (!params.code) {
        throw new OAuthError('Missing authorization code');
    }
    return params.code;
}
async function exchangeCodeForTokens(params) {
    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: params.code,
        client_id: params.clientId,
        redirect_uri: params.redirectUri,
        code_verifier: params.codeVerifier
    });
    const response = await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthBaseUrl"])()}/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
    });
    if (!response.ok) {
        const errorBody = await response.text();
        throw new OAuthError(`Token exchange failed (${response.status}): ${errorBody}`);
    }
    const tokenData = await response.json();
    const authInfo = {
        access_token: tokenData.access_token,
        token_type: tokenData.token_type,
        expires_in: tokenData.expires_in,
        expires_at: tokenData.expires_at ?? Math.floor(Date.now() / 1000) + tokenData.expires_in,
        scope: tokenData.scope,
        refresh_token: tokenData.refresh_token
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeAuthInfo"])(authInfo);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCodeVerifier"])();
    return authInfo;
}
async function refreshAccessToken(refreshToken, clientId) {
    const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId
    });
    const response = await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthBaseUrl"])()}/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body.toString()
    });
    if (!response.ok) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
        throw new OAuthError(`Token refresh failed (${response.status})`);
    }
    const tokenData = await response.json();
    const authInfo = {
        access_token: tokenData.access_token,
        token_type: tokenData.token_type,
        expires_in: tokenData.expires_in,
        expires_at: tokenData.expires_at ?? Math.floor(Date.now() / 1000) + tokenData.expires_in,
        scope: tokenData.scope,
        refresh_token: tokenData.refresh_token
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeAuthInfo"])(authInfo);
    return authInfo;
}
async function handleOAuthCallback(callbackUrl, config) {
    const params = parseCallbackParams(callbackUrl);
    const code = validateCallback(params, config.redirectUri);
    const codeVerifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCodeVerifier"])();
    if (!codeVerifier) {
        throw new OAuthError('Code verifier expired or missing');
    }
    const authInfo = await exchangeCodeForTokens({
        code,
        clientId: config.clientId,
        redirectUri: config.redirectUri,
        codeVerifier
    });
    cleanupUrl(config.redirectUri);
    return authInfo;
}
function cleanupUrl(baseUrl) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const url = undefined;
    const paramsToRemove = undefined;
}
class OAuthError extends Error {
    constructor(message){
        super(message);
        this.name = 'OAuthError';
    }
}
}),
"[project]/packages/core/src/auth/accounts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAccounts",
    ()=>fetchAccounts,
    "getWebSocketOTP",
    ()=>getWebSocketOTP,
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/config/urls.ts [app-ssr] (ecmascript)");
;
;
async function fetchAccounts(authInfo, clientId) {
    const response = await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}/accounts`, {
        headers: {
            Authorization: `Bearer ${authInfo.access_token}`,
            'Deriv-App-ID': clientId
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch accounts (${response.status})`);
    }
    const data = await response.json();
    const accounts = data.data;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storeDerivAccounts"])(accounts);
    if (accounts.length > 0) {
        const firstAccount = accounts[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveLoginId"])(firstAccount.account_id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccountType"])(firstAccount.account_type);
    }
    return accounts;
}
async function getWebSocketOTP(accountId, authInfo, clientId) {
    const response = await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}/accounts/${accountId}/otp`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authInfo.access_token}`,
            'Deriv-App-ID': clientId
        }
    });
    if (!response.ok) {
        throw new Error(`Failed to get WebSocket OTP (${response.status})`);
    }
    const data = await response.json();
    return data.data.url;
}
function logout() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
}
}),
"[project]/packages/core/src/auth/referral.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLandingParams",
    ()=>parseLandingParams,
    "parseReferralLink",
    ()=>parseReferralLink,
    "resolveReferralViaProxy",
    ()=>resolveReferralViaProxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/config/urls.ts [app-ssr] (ecmascript)");
;
function parseReferralLink(referralLink) {
    if (!referralLink) return null;
    try {
        const url = new URL(referralLink);
        // Format 3: standard OAuth token aliases — preserve the exact param name used.
        // Checked in priority order; the first one present wins.
        const TOKEN_ALIASES = [
            't',
            'affiliate_token',
            'sidi',
            'ca'
        ];
        for (const param of TOKEN_ALIASES){
            const value = url.searchParams.get(param);
            if (value) {
                return {
                    affiliateToken: value,
                    affiliateTokenParam: param,
                    utmCampaign: url.searchParams.get('utm_campaign') ?? '',
                    utmSource: url.searchParams.get('utm_source') ?? undefined,
                    utmMedium: url.searchParams.get('utm_medium') ?? undefined
                };
            }
        }
        // Format 1: deriv.com/signup?sidc=...&utm_campaign=... (DynamicWorks platform)
        // sidc is not an OAuth alias — forward the token as 't'.
        const sidc = url.searchParams.get('sidc');
        if (sidc) {
            return {
                affiliateToken: sidc,
                affiliateTokenParam: 't',
                utmCampaign: url.searchParams.get('utm_campaign') ?? 'dynamicworks',
                utmSource: url.searchParams.get('utm_source') ?? undefined,
                utmMedium: url.searchParams.get('utm_medium') ?? undefined
            };
        }
        // Format 2: track.deriv.com/_TOKEN_/1/
        if (url.hostname.includes('track.deriv.com')) {
            const pathSegments = url.pathname.split('/').filter(Boolean);
            if (pathSegments.length > 0) {
                // Remove leading/trailing underscores from the token segment
                const rawToken = pathSegments[0].replace(/^_|_$/g, '');
                if (rawToken) {
                    return {
                        affiliateToken: rawToken,
                        affiliateTokenParam: 't',
                        utmCampaign: 'myaffiliates'
                    };
                }
            }
        }
    } catch  {
    // Invalid URL
    }
    return null;
}
function parseLandingParams() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const params = undefined;
    const t = undefined;
    const utmSource = undefined;
    const utmMedium = undefined;
    const utmCampaign = undefined;
}
/** True for a Scaleo click link (*-tracking.deriv.com/click?...). */ function isScaleoClickLink(referralLink) {
    try {
        const url = new URL(referralLink);
        return url.hostname.endsWith('-tracking.deriv.com') && url.pathname === '/click';
    } catch  {
        return false;
    }
}
async function resolveReferralViaProxy(referralLink) {
    if (!referralLink || typeof fetch === 'undefined') return null;
    if (!isScaleoClickLink(referralLink)) return null;
    const TIMEOUT_MS = 2500;
    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    let timer;
    // Hard 2.5s cap on the critical login path. AbortController cancels the
    // in-flight request when available; the Promise.race timeout guarantees the
    // cap even when it is not (so the awaited call can never hang login).
    const timeout = new Promise((resolve)=>{
        timer = setTimeout(()=>{
            controller?.abort();
            resolve(null);
        }, TIMEOUT_MS);
    });
    // Never rejects → no unhandled rejection if the timeout wins the race.
    const work = (async ()=>{
        try {
            const endpoint = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppBuilderBaseUrl"])()}/api/app-builder/resolve-tracking?link=${encodeURIComponent(referralLink)}`;
            const response = await fetch(endpoint, {
                signal: controller?.signal
            });
            if (!response.ok) return null;
            const data = await response.json();
            if (data && typeof data === 'object' && 'url' in data) {
                const resolvedUrl = data.url;
                if (typeof resolvedUrl === 'string' && resolvedUrl) {
                    return parseReferralLink(resolvedUrl);
                }
            }
            return null;
        } catch  {
            return null;
        }
    })();
    try {
        return await Promise.race([
            work,
            timeout
        ]);
    } finally{
        if (timer) clearTimeout(timer);
    }
}
}),
"[project]/packages/core/src/auth/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$oauth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/oauth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$accounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/accounts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/referral.ts [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/packages/core/src/config/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/packages/core/src/ws/deriv-ws.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DerivWS",
    ()=>DerivWS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/config/urls.ts [app-ssr] (ecmascript)");
;
class DerivWS {
    ws = null;
    reqIdCounter = 0;
    pendingRequests = new Map();
    subscriptionHandlers = new Map();
    globalHandlers = [];
    connectionStateHandlers = [];
    reconnectExhaustedHandlers = [];
    reconnectAttempts = 0;
    maxReconnectAttempts = 5;
    reconnectTimeout = null;
    pingInterval = null;
    url;
    isConnecting = false;
    constructor(url){
        this.url = url ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$urls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPublicWsUrl"])();
    }
    /**
   * Register a listener for connection state changes.
   * Called with `true` on connect and `false` on disconnect.
   * Returns an unsubscribe function.
   */ onConnectionStateChange(handler) {
        this.connectionStateHandlers.push(handler);
        return ()=>{
            this.connectionStateHandlers = this.connectionStateHandlers.filter((h)=>h !== handler);
        };
    }
    onReconnectExhausted(handler) {
        this.reconnectExhaustedHandlers.push(handler);
        return ()=>{
            this.reconnectExhaustedHandlers = this.reconnectExhaustedHandlers.filter((h)=>h !== handler);
        };
    }
    notifyConnectionState(connected) {
        for (const handler of this.connectionStateHandlers){
            handler(connected);
        }
    }
    /**
   * Update the URL used for future reconnections without disrupting the current connection.
   * Call this when an OTP URL is refreshed but the live socket is still healthy.
   */ updateUrl(url) {
        this.url = url;
    }
    connect() {
        if (this.ws?.readyState === WebSocket.OPEN) {
            return Promise.resolve();
        }
        if (this.isConnecting) {
            return new Promise((resolve)=>{
                const check = setInterval(()=>{
                    if (this.ws?.readyState === WebSocket.OPEN) {
                        clearInterval(check);
                        resolve();
                    }
                }, 100);
            });
        }
        this.isConnecting = true;
        return new Promise((resolve, reject)=>{
            this.ws = new WebSocket(this.url);
            this.ws.onopen = ()=>{
                this.isConnecting = false;
                this.reconnectAttempts = 0;
                this.startPing();
                this.notifyConnectionState(true);
                resolve();
            };
            this.ws.onmessage = (event)=>{
                const data = JSON.parse(event.data);
                this.handleMessage(data);
            };
            this.ws.onerror = ()=>{
                this.isConnecting = false;
                reject(new Error('WebSocket connection error'));
            };
            this.ws.onclose = ()=>{
                this.isConnecting = false;
                this.stopPing();
                this.subscriptionHandlers.clear();
                this.notifyConnectionState(false);
                this.attemptReconnect();
            };
        });
    }
    /**
   * Send a one-shot request and wait for the response matched by req_id.
   */ send(payload) {
        return new Promise((resolve, reject)=>{
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                reject(new Error('WebSocket is not connected'));
                return;
            }
            const reqId = ++this.reqIdCounter;
            const message = {
                ...payload,
                req_id: reqId
            };
            this.pendingRequests.set(reqId, {
                resolve: resolve,
                reject
            });
            this.ws.send(JSON.stringify(message));
        });
    }
    /**
   * Send a subscription request. The handler is called for every streamed message.
   * Returns a function to unsubscribe.
   */ subscribe(payload, handler) {
        return new Promise((resolve, reject)=>{
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                reject(new Error('WebSocket is not connected'));
                return;
            }
            const reqId = ++this.reqIdCounter;
            const message = {
                ...payload,
                subscribe: 1,
                req_id: reqId
            };
            this.pendingRequests.set(reqId, {
                resolve: (data)=>{
                    const subscriptionId = this.extractSubscriptionId(data);
                    if (subscriptionId) {
                        this.subscriptionHandlers.set(subscriptionId, handler);
                    }
                    // Also call handler with the initial response
                    handler(data);
                    resolve({
                        subscriptionId,
                        unsubscribe: ()=>{
                            if (subscriptionId) {
                                this.subscriptionHandlers.delete(subscriptionId);
                                this.send({
                                    forget: subscriptionId
                                }).catch(()=>{});
                            }
                        }
                    });
                },
                reject
            });
            this.ws.send(JSON.stringify(message));
        });
    }
    onMessage(handler) {
        this.globalHandlers.push(handler);
        return ()=>{
            this.globalHandlers = this.globalHandlers.filter((h)=>h !== handler);
        };
    }
    disconnect() {
        this.stopPing();
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
        this.reconnectAttempts = this.maxReconnectAttempts; // prevent reconnect
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
        this.pendingRequests.clear();
        this.subscriptionHandlers.clear();
    }
    get isConnected() {
        return this.ws?.readyState === WebSocket.OPEN;
    }
    handleMessage(data) {
        // Notify global handlers
        for (const handler of this.globalHandlers){
            handler(data);
        }
        const reqId = data.req_id;
        // Check for error
        if (data.error) {
            if (reqId && this.pendingRequests.has(reqId)) {
                const pending = this.pendingRequests.get(reqId);
                this.pendingRequests.delete(reqId);
                pending.reject(new Error(data.error.message));
            }
            return;
        }
        // Check if this is a subscription stream
        const subId = this.extractSubscriptionId(data);
        if (subId && this.subscriptionHandlers.has(subId)) {
            this.subscriptionHandlers.get(subId)(data);
        }
        // Resolve pending one-shot request
        if (reqId && this.pendingRequests.has(reqId)) {
            const pending = this.pendingRequests.get(reqId);
            this.pendingRequests.delete(reqId);
            pending.resolve(data);
        }
    }
    extractSubscriptionId(data) {
        // Subscription ID can be in tick.id, subscription.id, or proposal.id
        if (data.subscription && typeof data.subscription === 'object') {
            return data.subscription.id ?? null;
        }
        if (data.tick && typeof data.tick === 'object') {
            return data.tick.id ?? null;
        }
        return null;
    }
    startPing() {
        this.pingInterval = setInterval(()=>{
            if (this.ws?.readyState === WebSocket.OPEN) {
                this.ws.send(JSON.stringify({
                    ping: 1
                }));
            }
        }, 30000);
    }
    stopPing() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
    }
    attemptReconnect() {
        if (this.reconnectAttempts >= this.maxReconnectAttempts) {
            for (const handler of this.reconnectExhaustedHandlers)handler();
            return;
        }
        this.reconnectAttempts++;
        const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
        this.reconnectTimeout = setTimeout(()=>{
            this.connect().catch(()=>{});
        }, delay);
    }
}
}),
"[project]/packages/core/src/ws/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/ws/deriv-ws.ts [app-ssr] (ecmascript)");
;
}),
"[project]/packages/core/src/react/useDerivWS.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDerivWS",
    ()=>useDerivWS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/ws/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/ws/deriv-ws.ts [app-ssr] (ecmascript)");
'use client';
;
;
function useDerivWS(options) {
    const { url, accountId } = options ?? {};
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listenersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExhausted, setIsExhausted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((listener)=>{
        listenersRef.current.add(listener);
        return ()=>{
            listenersRef.current.delete(listener);
        };
    }, []);
    const getSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>wsRef.current, []);
    // Full reconnect key: changes when auth type changes OR when the account switches.
    // Stays stable when only the OTP URL string is refreshed for the same account.
    const isAuthenticated = url !== undefined;
    const reconnectKey = isAuthenticated ? `auth:${accountId ?? 'unknown'}` : 'public';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let disposed = false;
        const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DerivWS"](url);
        wsRef.current = instance;
        listenersRef.current.forEach((l)=>l());
        const unsubscribeState = instance.onConnectionStateChange((connected)=>{
            if (!disposed) {
                setIsConnected(connected);
                if (connected) setError(null);
            }
        });
        const unsubscribeExhausted = instance.onReconnectExhausted(()=>{
            if (!disposed) setIsExhausted(true);
        });
        instance.connect().catch((err)=>{
            if (!disposed) {
                setError(err instanceof Error ? err.message : 'Connection failed');
            }
        });
        const listeners = listenersRef.current;
        return ()=>{
            disposed = true;
            setIsConnected(false);
            setIsExhausted(false);
            unsubscribeState();
            unsubscribeExhausted();
            instance.disconnect();
            wsRef.current = null;
            listeners.forEach((l)=>l());
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        reconnectKey
    ]);
    // When the OTP URL changes for the same account (tab focus refresh), silently
    // update the URL on the existing instance — no reconnect, no flash.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (url && wsRef.current) {
            wsRef.current.updateUrl(url);
        }
    }, [
        url
    ]);
    const ws = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, ()=>null);
    return {
        ws,
        isConnected,
        isExhausted,
        error
    };
}
}),
"[project]/packages/core/src/utils/pick-default-symbol.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pickDefaultSymbol",
    ()=>pickDefaultSymbol
]);
const DEFAULT_SYMBOL = '1HZ100V';
const isOpen = (s)=>s.exchange_is_open === 1;
const fromFavorites = (symbols)=>{
    if ("TURBOPACK compile-time truthy", 1) return undefined;
    //TURBOPACK unreachable
    ;
};
function pickDefaultSymbol(symbols, preferredSymbol) {
    if (!symbols.length) throw new Error('No active symbols available');
    // 1. Preferred symbol (URL param / stored value) — must be open
    if (preferredSymbol) {
        const match = symbols.find((s)=>s.underlying_symbol === preferredSymbol && isOpen(s));
        if (match) return match;
    }
    // 2. User's chart favorites (first open match)
    const fav = fromFavorites(symbols);
    if (fav) return fav;
    // 3. 1HZ100V if open
    const volatility100_1s = symbols.find((s)=>s.underlying_symbol === DEFAULT_SYMBOL && isOpen(s));
    if (volatility100_1s) return volatility100_1s;
    // 4. First open random_index symbol
    const randomIndex = symbols.find((s)=>s.submarket === 'random_index' && isOpen(s));
    if (randomIndex) return randomIndex;
    // 5. First open major_pairs symbol
    const majorPairsOpen = symbols.find((s)=>s.submarket === 'major_pairs' && isOpen(s));
    if (majorPairsOpen) return majorPairsOpen;
    // 6. Any major_pairs symbol (market may be closed)
    const majorPairsAny = symbols.find((s)=>s.submarket === 'major_pairs');
    if (majorPairsAny) return majorPairsAny;
    // 7. Absolute fallback
    return symbols[0];
}
}),
"[project]/packages/core/src/react/useActiveSymbols.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActiveSymbols",
    ()=>useActiveSymbols
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$utils$2f$pick$2d$default$2d$symbol$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/utils/pick-default-symbol.ts [app-ssr] (ecmascript)");
'use client';
;
;
const SYMBOL_PARAM = 'symbol';
function readSymbolFromUrl() {
    if ("TURBOPACK compile-time truthy", 1) return undefined;
    //TURBOPACK unreachable
    ;
}
function writeSymbolToUrl(symbol) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const params = undefined;
    const next = undefined;
}
function useActiveSymbols(ws, isConnected, contractTypes) {
    const [symbols, setSymbols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeSymbol, setActiveSymbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contracts, setContracts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contractsAvailable, setContractsAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [durationLimits, setDurationLimits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        min: 1,
        max: 10,
        unit: 't'
    });
    const [defaultStake, setDefaultStake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(10);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const loadContractsFor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (wsInstance, symbol)=>{
        const response = await wsInstance.send({
            contracts_for: symbol.underlying_symbol
        });
        const filtered = response.contracts_for?.available?.filter((c)=>contractTypes.includes(c.contract_type)) ?? [];
        setContracts(filtered);
        setContractsAvailable(filtered.length > 0);
        if (filtered.length > 0) {
            const contract = filtered[0];
            const minMatch = contract.min_contract_duration.match(/^(\d+)/);
            const maxMatch = contract.max_contract_duration.match(/^(\d+)/);
            const unit = contract.min_contract_duration.replace(/^\d+/, '');
            const min = minMatch ? parseInt(minMatch[1], 10) : 1;
            const max = maxMatch ? parseInt(maxMatch[1], 10) : 10;
            setDurationLimits({
                min,
                max,
                unit
            });
            setDefaultStake(contract.default_stake);
        }
    }, [
        contractTypes
    ]);
    const selectSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((underlyingSymbol)=>{
        if (!ws || !isConnected) return;
        const symbol = symbols.find((s)=>s.underlying_symbol === underlyingSymbol);
        if (!symbol || symbol.underlying_symbol === activeSymbol?.underlying_symbol) return;
        setActiveSymbol(symbol);
        writeSymbolToUrl(symbol.underlying_symbol);
        loadContractsFor(ws, symbol).catch(()=>{});
    }, [
        ws,
        isConnected,
        symbols,
        activeSymbol,
        loadContractsFor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ws || !isConnected) return;
        let disposed = false;
        async function fetchSymbols() {
            try {
                setIsLoading(true);
                const response = await ws.send({
                    active_symbols: 'full',
                    contract_type: contractTypes
                });
                if (disposed) return;
                const allSymbols = response.active_symbols;
                if (!allSymbols || allSymbols.length === 0) {
                    throw new Error('No symbols available');
                }
                setSymbols(allSymbols);
                const chosen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$utils$2f$pick$2d$default$2d$symbol$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pickDefaultSymbol"])(allSymbols, readSymbolFromUrl());
                setActiveSymbol(chosen);
                writeSymbolToUrl(chosen.underlying_symbol);
                await loadContractsFor(ws, chosen);
                if (disposed) return;
                setIsLoading(false);
            } catch  {
                if (!disposed) setIsLoading(false);
            }
        }
        fetchSymbols();
        return ()=>{
            disposed = true;
        };
    }, [
        ws,
        isConnected,
        contractTypes,
        loadContractsFor
    ]);
    return {
        symbols,
        activeSymbol,
        selectSymbol,
        contracts,
        contractsAvailable,
        durationLimits,
        defaultStake,
        isLoading
    };
}
}),
"[project]/packages/core/src/react/useTicks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTicks",
    ()=>useTicks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const DEFAULT_TICK_COUNT = 1000;
function useTicks(ws, isConnected, activeSymbol, tickCount = DEFAULT_TICK_COUNT) {
    const pricesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pipSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(2);
    const unsubscribeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentTick, setCurrentTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prices, setPrices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pipSize, setPipSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const pipSizeFromPip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((pip)=>{
        if (pip >= 1) return 0;
        const str = pip.toString();
        const dotIndex = str.indexOf('.');
        return dotIndex === -1 ? 0 : str.length - dotIndex - 1;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ws || !isConnected || !activeSymbol) return;
        let disposed = false;
        // Unsubscribe from previous
        if (unsubscribeRef.current) {
            unsubscribeRef.current();
            unsubscribeRef.current = null;
        }
        // Reset refs
        pricesRef.current = [];
        const ps = pipSizeFromPip(activeSymbol.pip_size);
        pipSizeRef.current = ps;
        async function subscribe() {
            const historyResponse = await ws.send({
                ticks_history: activeSymbol.underlying_symbol,
                end: 'latest',
                start: 1,
                count: tickCount,
                style: 'ticks'
            });
            if (disposed) return;
            setPipSize(ps);
            const historyPrices = historyResponse.history?.prices ?? [];
            pricesRef.current = historyPrices;
            setPrices([
                ...historyPrices
            ]);
            const sub = await ws.subscribe({
                ticks: activeSymbol.underlying_symbol
            }, (data)=>{
                const tick = data.tick;
                if (tick) {
                    const tickPs = tick.pip_size ?? pipSizeRef.current;
                    if (tick.pip_size && tick.pip_size !== pipSizeRef.current) {
                        pipSizeRef.current = tick.pip_size;
                    }
                    setCurrentTick(tick);
                    // Sliding window update
                    pricesRef.current = [
                        ...pricesRef.current,
                        tick.quote
                    ];
                    if (pricesRef.current.length > tickCount) {
                        pricesRef.current = pricesRef.current.slice(-tickCount);
                    }
                    setPrices([
                        ...pricesRef.current
                    ]);
                    setPipSize(tickPs);
                }
            });
            if (disposed) {
                sub.unsubscribe();
                return;
            }
            unsubscribeRef.current = sub.unsubscribe;
        }
        subscribe().catch(()=>{});
        return ()=>{
            disposed = true;
            setCurrentTick(null);
            setPrices([]);
            if (unsubscribeRef.current) {
                unsubscribeRef.current();
                unsubscribeRef.current = null;
            }
            // Send forget_all for ticks so the server clears the stream before the
            // next mount re-subscribes — prevents AlreadySubscribed on navigation.
            if (ws?.isConnected) {
                ws.send({
                    forget_all: 'ticks'
                }).catch(()=>{});
            }
        };
    }, [
        ws,
        isConnected,
        activeSymbol,
        tickCount,
        pipSizeFromPip
    ]);
    return {
        currentTick,
        prices,
        pipSize
    };
}
}),
"[project]/packages/core/src/react/useProposal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProposal",
    ()=>useProposal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useProposal(ws, isConnected, params) {
    const [proposal, setProposal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const unsubRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Forget previous proposal subscription
        if (unsubRef.current) {
            unsubRef.current();
            unsubRef.current = null;
        }
        if (!ws || !isConnected || !params || params.amount <= 0) {
            return;
        }
        let cancelled = false;
        const payload = {
            proposal: 1,
            amount: params.amount,
            basis: params.basis,
            contract_type: params.contractType,
            currency: params.currency,
            underlying_symbol: params.symbol
        };
        if (params.dateExpiry !== undefined) {
            payload.date_expiry = params.dateExpiry;
        } else {
            payload.duration = params.duration;
            payload.duration_unit = params.durationUnit;
        }
        if (params.barrier !== undefined) {
            payload.barrier = params.barrier;
        }
        ws.subscribe(payload, (data)=>{
            if (cancelled) return;
            const resp = data;
            if (resp.proposal) {
                setProposal({
                    id: resp.proposal.id,
                    askPrice: resp.proposal.ask_price,
                    payout: resp.proposal.payout,
                    longcode: resp.proposal.longcode,
                    minStake: parseFloat(resp.proposal.validation_params?.stake?.min ?? '0'),
                    maxPayout: parseFloat(resp.proposal.validation_params?.payout?.max ?? '0')
                });
            }
        }).then((sub)=>{
            if (cancelled) {
                sub.unsubscribe();
            } else {
                unsubRef.current = sub.unsubscribe;
            }
        }).catch(()=>{
            if (!cancelled) setProposal(null);
        });
        return ()=>{
            cancelled = true;
            setProposal(null);
            if (unsubRef.current) {
                unsubRef.current();
                unsubRef.current = null;
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally using individual param fields to avoid re-subscribing on object reference changes
    }, [
        ws,
        isConnected,
        params?.contractType,
        params?.symbol,
        params?.amount,
        params?.duration,
        params?.durationUnit,
        params?.barrier,
        params?.basis,
        params?.currency,
        params?.dateExpiry
    ]);
    return {
        proposal
    };
}
}),
"[project]/packages/core/src/react/useBuy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBuy",
    ()=>useBuy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useBuy(ws, isConnected) {
    const [isBuying, setIsBuying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [buyResult, setBuyResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [buyError, setBuyError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const clearBuyResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setBuyResult(null);
        setBuyError(null);
    }, []);
    const buyContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (proposal)=>{
        if (!ws || !isConnected) return;
        setIsBuying(true);
        setBuyError(null);
        setBuyResult(null);
        try {
            const response = await ws.send({
                buy: proposal.id,
                price: String(proposal.askPrice)
            });
            if (response.buy) {
                setBuyResult({
                    contractId: response.buy.contract_id,
                    buyPrice: response.buy.buy_price,
                    payout: response.buy.payout,
                    longcode: response.buy.longcode,
                    balanceAfter: response.buy.balance_after
                });
            }
        } catch (err) {
            setBuyError(err instanceof Error ? err.message : 'Purchase failed');
        } finally{
            setIsBuying(false);
        }
    }, [
        ws,
        isConnected
    ]);
    return {
        buyContract,
        isBuying,
        buyResult,
        buyError,
        clearBuyResult
    };
}
}),
"[project]/packages/core/src/react/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useDerivWS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useDerivWS.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useActiveSymbols.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useTicks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useProposal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useBuy.ts [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/packages/core/src/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Auth
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/auth/index.ts [app-ssr] (ecmascript) <locals>");
// Config
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/config/index.ts [app-ssr] (ecmascript) <locals>");
// WebSocket
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/ws/index.ts [app-ssr] (ecmascript) <locals>");
// React Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/react/index.ts [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
}),
"[project]/hooks/use-auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$oauth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/oauth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$accounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/accounts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/auth/referral.ts [app-ssr] (ecmascript)");
'use client';
;
;
function getAuthConfig() {
    const config = {
        clientId: process.env.NEXT_PUBLIC_DERIV_APP_ID ?? '',
        redirectUri: process.env.NEXT_PUBLIC_DERIV_REDIRECT_URI ?? (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '')
    };
    // Convert comma-separated scopes to space-separated (OAuth spec)
    const scopesEnv = process.env.NEXT_PUBLIC_DERIV_OAUTH_SCOPES ?? '';
    if (scopesEnv) {
        config.scopes = scopesEnv.split(',').map((s)=>s.trim()).join(' ');
    }
    const referralLink = process.env.NEXT_PUBLIC_DERIV_REFERRAL_LINK ?? '';
    if (referralLink) {
        const referral = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseReferralLink"])(referralLink);
        if (referral) {
            config.affiliateToken = referral.affiliateToken;
            config.affiliateTokenParam = referral.affiliateTokenParam;
            config.utmCampaign = referral.utmCampaign;
            config.utmSource = referral.utmSource;
            config.utmMedium = referral.utmMedium;
        }
    }
    // Override with live per-click params from landing URL (e.g. Scaleo t= token).
    // These are present in window.location.search when the user arrives via an
    // affiliate link and haven't been removed yet (OAuth params aren't in the URL
    // at this point — they only appear after Deriv redirects back with ?code=).
    const landing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLandingParams"])();
    if (landing) {
        // Only override the token when the landing URL actually carries one (t=).
        // parseLandingParams returns a non-null result for any utm_* param, so an
        // unguarded write would clobber a valid env token with '' on generic
        // marketing links (e.g. ?utm_source=google with no t=).
        if (landing.affiliateToken) {
            config.affiliateToken = landing.affiliateToken;
            config.affiliateTokenParam = landing.affiliateTokenParam;
        }
        if (landing.utmSource) config.utmSource = landing.utmSource;
        if (landing.utmMedium) config.utmMedium = landing.utmMedium;
        if (landing.utmCampaign) config.utmCampaign = landing.utmCampaign;
    }
    return config;
}
// Build the auth config and, if we don't already have an affiliate token (from
// a resolved/Format-3 referral link or live landing params), try to resolve a
// fresh per-user token via the app-builder BFF proxy. Strictly non-blocking:
// any failure leaves the config untouched so login/sign-up always proceeds.
async function getAuthConfigWithReferral() {
    const config = getAuthConfig();
    if (!config.affiliateToken) {
        try {
            const referralLink = process.env.NEXT_PUBLIC_DERIV_REFERRAL_LINK ?? '';
            const resolved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$referral$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveReferralViaProxy"])(referralLink);
            if (resolved) {
                config.affiliateToken = resolved.affiliateToken;
                config.affiliateTokenParam = resolved.affiliateTokenParam;
                if (resolved.utmSource) config.utmSource = resolved.utmSource;
                if (resolved.utmMedium) config.utmMedium = resolved.utmMedium;
                if (resolved.utmCampaign) config.utmCampaign = resolved.utmCampaign;
            }
        } catch  {
        // Never block login on attribution resolution.
        }
    }
    return config;
}
function useAuth() {
    const [authState, setAuthState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>("TURBOPACK compile-time value", "undefined") !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthInfo"])() ? "TURBOPACK unreachable" : 'unauthenticated');
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return [];
        //TURBOPACK unreachable
        ;
    });
    const [activeAccountId, setActiveAccountId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
    });
    const [wsUrl, setWsUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const initRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const activeAccountIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabHiddenAtRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch OTP WebSocket URL for an account
    const fetchOTPUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (accountId, authInfo)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$accounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWebSocketOTP"])(accountId, authInfo, getAuthConfig().clientId);
    }, []);
    // Complete auth: fetch accounts → get OTP → set WS URL
    const completeAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (authInfo)=>{
        const fetchedAccounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$accounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAccounts"])(authInfo, getAuthConfig().clientId);
        setAccounts(fetchedAccounts);
        if (fetchedAccounts.length > 0) {
            const firstAccount = fetchedAccounts[0];
            setActiveAccountId(firstAccount.account_id);
            const otpUrl = await fetchOTPUrl(firstAccount.account_id, authInfo);
            setWsUrl(otpUrl);
        }
        setAuthState('authenticated');
    }, [
        fetchOTPUrl
    ]);
    // Initialize: check for OAuth callback or existing session
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initRef.current) return;
        initRef.current = true;
        const init = async ()=>{
            const url = new URL(window.location.href);
            const code = url.searchParams.get('code');
            // Phase 3-5: Handle OAuth callback
            if (code) {
                setAuthState('authenticating');
                try {
                    const authInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$oauth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleOAuthCallback"])(window.location.href, getAuthConfig());
                    await completeAuth(authInfo);
                } catch (err) {
                    setError(err instanceof Error ? err.message : 'Authentication failed');
                    setAuthState('error');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
                }
                return;
            }
            // Check for existing session
            const storedAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            if (storedAuth) {
                // Check if token is expired
                if (storedAuth.expires_at && Date.now() / 1000 > storedAuth.expires_at) {
                    // Try to refresh
                    try {
                        const refreshed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$oauth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["refreshAccessToken"])(storedAuth.refresh_token, getAuthConfig().clientId);
                        await completeAuth(refreshed);
                    } catch  {
                        // Refresh failed — fall back to unauthenticated (public WS)
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
                        setAuthState('unauthenticated');
                    }
                    return;
                }
                // Valid stored session — restore accounts and get fresh OTP
                const storedAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDerivAccounts"])();
                if (storedAccounts && storedAccounts.length > 0) {
                    setAccounts(storedAccounts);
                    const loginId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveLoginId"])() ?? storedAccounts[0].account_id;
                    setActiveAccountId(loginId);
                    try {
                        const otpUrl = await fetchOTPUrl(loginId, storedAuth);
                        setWsUrl(otpUrl);
                        setAuthState('authenticated');
                    } catch  {
                        // OTP fetch failed — token may be invalid, clear and fallback
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
                        setAuthState('unauthenticated');
                    }
                } else {
                    // Have auth info but no accounts — re-fetch
                    try {
                        await completeAuth(storedAuth);
                    } catch  {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
                        setAuthState('unauthenticated');
                    }
                }
            }
        };
        init();
    }, [
        completeAuth,
        fetchOTPUrl
    ]);
    // Keep ref in sync so visibility handler always has the current account ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        activeAccountIdRef.current = activeAccountId;
    }, [
        activeAccountId
    ]);
    // Refresh the OTP WebSocket URL when returning to the tab after >30s of inactivity.
    // OTP URLs are single-use, so a stale URL will cause reconnect failures.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (authState !== 'authenticated') return;
        const handleVisibilityChange = async ()=>{
            if (document.visibilityState === 'hidden') {
                tabHiddenAtRef.current = Date.now();
                return;
            }
            const hiddenAt = tabHiddenAtRef.current;
            if (!hiddenAt || Date.now() - hiddenAt < 30_000) return;
            tabHiddenAtRef.current = null;
            const accountId = activeAccountIdRef.current;
            const authInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthInfo"])();
            if (!authInfo || !accountId) return;
            try {
                const otpUrl = await fetchOTPUrl(accountId, authInfo);
                setWsUrl(otpUrl);
            } catch  {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAllAuthData"])();
                setAuthState('unauthenticated');
                setWsUrl(undefined);
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return ()=>document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [
        authState,
        fetchOTPUrl
    ]);
    // Phase 1: Initiate login — includes partner attribution params, resolving a
    // fresh per-user Scaleo token via the BFF proxy when needed (non-blocking).
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$oauth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initiateLogin"])(await getAuthConfigWithReferral());
    }, []);
    // Initiate sign-up — adds prompt=registration and partner attribution params
    const signUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$oauth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initiateSignUp"])(await getAuthConfigWithReferral());
    }, []);
    // Logout: close WS (handled by useDerivWS cleanup), clear storage, reset state
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$accounts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logout"])();
        setAccounts([]);
        setActiveAccountId(null);
        setWsUrl(undefined);
        setAuthState('unauthenticated');
        setError(null);
    }, []);
    // Account switch: fetch new OTP first, then update accountId and wsUrl together
    // so reconnectKey and url change in the same render cycle with the correct OTP.
    const switchAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (accountId)=>{
        const authInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthInfo"])();
        if (!authInfo) return;
        try {
            const account = accounts.find((a)=>a.account_id === accountId);
            if (account) (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAccountType"])(account.account_type);
            // Fetch OTP before updating accountId so reconnectKey and url are consistent
            const otpUrl = await fetchOTPUrl(accountId, authInfo);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$auth$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveLoginId"])(accountId);
            setActiveAccountId(accountId);
            setWsUrl(otpUrl);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Account switch failed');
        }
    }, [
        fetchOTPUrl,
        accounts
    ]);
    const activeAccount = accounts.find((acc)=>acc.account_id === activeAccountId) ?? accounts[0] ?? null;
    return {
        authState,
        accounts,
        activeAccount,
        activeAccountId,
        wsUrl,
        login,
        signUp,
        logout,
        switchAccount,
        error
    };
}
}),
"[project]/components/custom/deriv-ws-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DerivWSProvider",
    ()=>DerivWSProvider,
    "useDerivWSContext",
    ()=>useDerivWSContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useDerivWS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useDerivWS.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-auth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const DerivWSContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function DerivWSProvider({ children }) {
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { ws, isConnected, isExhausted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useDerivWS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDerivWS"])({
        url: auth.wsUrl,
        accountId: auth.activeAccountId ?? undefined
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DerivWSContext.Provider, {
        value: {
            ws,
            isConnected,
            isExhausted,
            auth
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/custom/deriv-ws-provider.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function useDerivWSContext() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DerivWSContext);
    if (!ctx) {
        throw new Error('useDerivWSContext must be used within a DerivWSProvider');
    }
    return ctx;
}
}),
"[project]/components/ui/sonner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sonner.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
}),
"[project]/components/custom/ViewportScaler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ViewportScaler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const MIN_SCALE = 0.5;
const LG_BREAKPOINT = 1024; // matches Tailwind's `lg`
function ViewportScaler({ children }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const updateScale = ()=>{
        const el = containerRef.current;
        if (!el) return;
        if (window.innerWidth >= LG_BREAKPOINT) {
            setScale(false);
            return;
        }
        // Temporarily clear transform so scrollHeight reflects the natural (unscaled) height
        el.style.transform = 'none';
        const naturalHeight = el.scrollHeight;
        el.style.transform = '';
        if (!naturalHeight) return;
        const newScale = Math.max(MIN_SCALE, Math.min(1, window.innerHeight / naturalHeight));
        setScale((prev)=>prev === newScale ? prev : newScale);
    };
    // Synchronous first measurement before browser paint — prevents visible unscaled frame.
    // Calling setState inside useLayoutEffect is intentional: we need the DOM measurement
    // to happen synchronously before the browser paints to avoid a visible unscaled frame.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        updateScale();
    }, []);
    // React to content height changes (fonts loading, dynamic data, images)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = containerRef.current;
        if (!el) return;
        const ro = new ResizeObserver(()=>updateScale());
        ro.observe(el);
        return ()=>ro.disconnect();
    }, []);
    // Debounced window resize + orientation-change listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer;
        const handler = ()=>{
            clearTimeout(timer);
            timer = setTimeout(updateScale, 100);
        };
        window.addEventListener('resize', handler);
        window.addEventListener('orientationchange', handler);
        return ()=>{
            clearTimeout(timer);
            window.removeEventListener('resize', handler);
            window.removeEventListener('orientationchange', handler);
        };
    }, []);
    const isMobile = typeof scale === 'number';
    const isReady = scale !== null;
    // Desktop (or pre-measurement): plain passthrough container.
    // Also used as the measurement host before the first scale value is known.
    if (!isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            style: {
                height: '100dvh',
                opacity: isReady ? 1 : 0,
                transition: 'opacity 0.15s ease'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/components/custom/ViewportScaler.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    // Mobile with a computed scale.
    //
    // Two-layer structure:
    //   • Outer clip wrapper — fixed 100vw × 100dvh, overflow:hidden.
    //     Acts as the viewport "frame" and hides the oversized inner div
    //     before the CSS transform is applied.
    //   • Inner measured div (containerRef) — intentionally wider than the
    //     viewport (width = 100vw / scale) so that after scale(n) it is
    //     exactly 100vw.  transformOrigin:top-left keeps the top-left corner
    //     anchored while the content scales down to fit the viewport height.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100vw',
            height: '100dvh',
            overflow: 'hidden',
            opacity: isReady ? 1 : 0,
            transition: 'opacity 0.15s ease'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            style: {
                transformOrigin: 'top left',
                transform: `scale(${scale})`,
                // Both dimensions are 100% / scale of the outer clip wrapper (100vw × 100dvh),
                // so after scale(n) they resolve to exactly 100vw × 100dvh.
                // display:flex + flexDirection:column lets children use flex-1 / shrink-0
                // against a definite height, keeping the buy-button footer anchored at the
                // visual bottom without any special positioning.
                width: `${100 / scale}%`,
                height: `${100 / scale}%`,
                display: 'flex',
                flexDirection: 'column'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/components/custom/ViewportScaler.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/ViewportScaler.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/custom/env-check.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnvCheck",
    ()=>EnvCheck
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function EnvCheck() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true') return;
        if (window.location.pathname.includes('/preview') || window.location.pathname.includes('/edit')) return;
        if (!process.env.NEXT_PUBLIC_DERIV_APP_ID || !process.env.NEXT_PUBLIC_DERIV_REDIRECT_URI) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning('Waiting for environment variables to be set…');
        }
    }, []);
    return null;
}
}),
"[project]/components/custom/logo-src-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoSrcProvider",
    ()=>LogoSrcProvider,
    "useLogoSrc",
    ()=>useLogoSrc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const LogoSrcContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function LogoSrcProvider({ logoSrc, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSrcContext.Provider, {
        value: logoSrc,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/custom/logo-src-provider.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
function useLogoSrc() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LogoSrcContext) ?? undefined;
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09z38dz._.js.map