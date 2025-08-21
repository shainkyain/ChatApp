 

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
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // ✅ Parse the incoming request body
    const { message } = await req.json();

    // ✅ Validate message
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "⚠️ Invalid or missing message." },
        { status: 400 }
      );
    }

    // ✅ Load Gemini API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "⚠️ Missing Gemini API key on server." },
        { status: 500 }
      );
    }

    // ✅ Gemini 2.0 Flash API endpoint
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    // ✅ Reply generation rules
    const rules = {
      tone: "soft and emotionally expressive",
      maxWords: 40,
    };

    // ✅ Construct the prompt
    const prompt = `Please respond to the following message using ${rules.maxWords} words or fewer. Your reply should be ${rules.tone}. Here is the message: "${message}"`;

    // ✅ Gemini API request body
    const body = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    // ✅ Send request to Gemini API
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log("🔍 Gemini API response:", JSON.stringify(data, null, 2));

    // ✅ Handle Gemini API errors
    if (data.error) {
      console.error("❌ Gemini API error:", data.error);
      return NextResponse.json(
        { reply: `⚠️ Gemini Error: ${data.error.message}` },
        { status: 500 }
      );
    }

    // ✅ Extract Gemini reply
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!reply) {
      console.error("❌ Invalid Gemini response format");
      return NextResponse.json(
        { reply: "⚠️ No valid response from Gemini." },
        { status: 500 }
      );
    }

    // ✅ Return Gemini reply
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("❌ Exception while processing Gemini API request:", error);
    return NextResponse.json(
      { reply: "⚠️ Failed to connect to Gemini API." },
      { status: 500 }
    );
  }
}





