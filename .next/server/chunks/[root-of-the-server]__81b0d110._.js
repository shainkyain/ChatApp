module.exports = {

"[project]/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/chat/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// // src/app/api/chat/route.ts
// import { NextResponse } from "next/server";
// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();
//     // ✅ Load Gemini API Key
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       return NextResponse.json(
//         { reply: "⚠️ Missing Gemini API key on server." },
//         { status: 500 }
//       );
//     }
//     // ✅ Define endpoint (Gemini 2.0 Flash)
//     const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
//     const prompt = `
//                     Please reply to the following message in 40 words or fewer.
//                     Your tone should be soft, empathetic, and emotionally expressive.
//                     Message: "${message}"
//                     `;
//     // ✅ Prepare request body
//     const body = {
//       contents: [
//         {
//           parts: [
//             {
//               text: prompt,
//             },
//           ],
//         },
//       ],
//     };
//     // ✅ Send request to Gemini
//     const response = await fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-goog-api-key": apiKey,
//       },
//       body: JSON.stringify(body),
//     });
//     const data = await response.json();
//     console.log("🔍 Gemini response:", JSON.stringify(data, null, 2));
//     // ✅ Handle errors from Gemini
//     if (data.error) {
//       console.error("❌ Gemini error:", data.error);
//       return NextResponse.json(
//         { reply: `⚠️ Gemini Error: ${data.error.message}` },
//         { status: 500 }
//       );
//     }
//     // ✅ Extract generated text
//     const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
//     if (!reply) {
//       console.error("❌ Invalid Gemini response format");
//       return NextResponse.json(
//         { reply: "⚠️ No valid response from Gemini." },
//         { status: 500 }
//       );
//     }
//     return NextResponse.json({ reply });
//   } catch (error) {
//     console.error("❌ Gemini API exception:", error);
//     return NextResponse.json(
//       { reply: "⚠️ Failed to connect to Gemini API." },
//       { status: 500 }
//     );
//   }
// }
// add rules to gemini reply
// -> length of reply 40 words at most 
// -> Emotional Reply Would prefre 
// -> Softtone 
// src/app/api/chat/route.ts
__turbopack_context__.s({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(req) {
    try {
        // ✅ Parse the incoming request body
        const { message } = await req.json();
        // ✅ Validate message
        if (!message || typeof message !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                reply: "⚠️ Invalid or missing message."
            }, {
                status: 400
            });
        }
        // ✅ Load Gemini API key
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                reply: "⚠️ Missing Gemini API key on server."
            }, {
                status: 500
            });
        }
        // ✅ Gemini 2.0 Flash API endpoint
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        // ✅ Reply generation rules
        const rules = {
            tone: "soft and emotionally expressive",
            maxWords: 40
        };
        // ✅ Construct the prompt
        const prompt = `Please respond to the following message using ${rules.maxWords} words or fewer. Your reply should be ${rules.tone}. Here is the message: "${message}"`;
        // ✅ Gemini API request body
        const body = {
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ]
        };
        // ✅ Send request to Gemini API
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-goog-api-key": apiKey
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log("🔍 Gemini API response:", JSON.stringify(data, null, 2));
        // ✅ Handle Gemini API errors
        if (data.error) {
            console.error("❌ Gemini API error:", data.error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                reply: `⚠️ Gemini Error: ${data.error.message}`
            }, {
                status: 500
            });
        }
        // ✅ Extract Gemini reply
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (!reply) {
            console.error("❌ Invalid Gemini response format");
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                reply: "⚠️ No valid response from Gemini."
            }, {
                status: 500
            });
        }
        // ✅ Return Gemini reply
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply
        });
    } catch (error) {
        console.error("❌ Exception while processing Gemini API request:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply: "⚠️ Failed to connect to Gemini API."
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__81b0d110._.js.map