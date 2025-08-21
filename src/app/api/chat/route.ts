// // src/app/api/chat/route.ts
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { message } = await req.json();

//     // ✅ Check if API key is loaded
//     const apiKey = process.env.OPENAI_API_KEY;
//     console.log("API KEY loaded:", apiKey ? "✅ Yes" : "❌ No");

//     if (!apiKey) {
//       return NextResponse.json(
//         { reply: "⚠️ Missing API key on server." },
//         { status: 500 }
//       );
//     }

//     // ✅ Call OpenAI API
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo", // you can also try: "gpt-4o-mini"
//         messages: [{ role: "user", content: message }],
//       }),
//     });

//     const data = await response.json();
//     console.log("🔍 Raw API response:", JSON.stringify(data, null, 2));

//     // ✅ Handle API errors
//     if (data.error) {
//       console.error("❌ OpenAI API error:", data.error);
//       return NextResponse.json(
//         { reply: `⚠️ OpenAI Error: ${data.error.message}` },
//         { status: 500 }
//       );
//     }

//     // ✅ Extract reply safely
//     const reply = data.choices?.[0]?.message?.content?.trim();
//     if (!reply) {
//       console.error("❌ Unexpected response format:", data);
//       return NextResponse.json(
//         { reply: "⚠️ No valid reply from AI." },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ reply });
//   } catch (error) {
//     console.error("❌ Chat API error:", error);
//     return NextResponse.json(
//       { reply: "⚠️ Error connecting to AI." },
//       { status: 500 }
//     );
//   }
// }



// src/app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // ✅ Load Gemini API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "⚠️ Missing Gemini API key on server." },
        { status: 500 }
      );
    }

    // ✅ Define endpoint (Gemini 2.0 Flash)
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    // ✅ Prepare request body
    const body = {
      contents: [
        {
          parts: [
            {
              text: message,
            },
          ],
        },
      ],
    };

    // ✅ Send request to Gemini
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log("🔍 Gemini response:", JSON.stringify(data, null, 2));

    // ✅ Handle errors from Gemini
    if (data.error) {
      console.error("❌ Gemini error:", data.error);
      return NextResponse.json(
        { reply: `⚠️ Gemini Error: ${data.error.message}` },
        { status: 500 }
      );
    }

    // ✅ Extract generated text
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!reply) {
      console.error("❌ Invalid Gemini response format");
      return NextResponse.json(
        { reply: "⚠️ No valid response from Gemini." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("❌ Gemini API exception:", error);
    return NextResponse.json(
      { reply: "⚠️ Failed to connect to Gemini API." },
      { status: 500 }
    );
  }
}
