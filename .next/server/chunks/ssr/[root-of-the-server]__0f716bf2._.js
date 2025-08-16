module.exports = {

"[project]/.next-internal/server/app/ai-chat/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/Components/AIChat.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// 'use client';
// import React, { useState } from 'react';
// // import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// const AIChat: React.FC = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [input, setInput] = useState('');
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Speech recognition is not supported in this browser.</span>;
//   }
//   const handleSend = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, `You: ${input}`, `AI: ${generateReply(input)}`]);
//     setInput('');
//     resetTranscript();
//   };
//   const generateReply = (text: string) => {
//     return `I'm just a mock AI, but you said: "${text}"`;
//   };
//   const handleVoiceInput = () => {
//     SpeechRecognition.startListening({ continuous: false, language: 'en-US' });
//     setInput(transcript);
//   };
//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">AI Chat 🤖</h1>
//       <div className="space-y-2 mb-4">
//         {messages.map((msg, idx) => (
//           <div key={idx} className="bg-gray-100 p-2 rounded">{msg}</div>
//         ))}
//       </div>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={input || transcript}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 p-2 border rounded"
//           placeholder="Type or speak your message..."
//         />
//         <button
//           onClick={handleSend}
//           className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         >
//           Send
//         </button>
//         <button
//           onClick={handleVoiceInput}
//           className={`px-4 py-2 rounded text-white ${listening ? 'bg-red-600' : 'bg-green-600'} hover:opacity-80`}
//         >
//           🎤 {listening ? 'Listening...' : 'Speak'}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default AIChat;
// 'use client';
// import React, { useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// const AIChat: React.FC = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [input, setInput] = useState('');
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Speech recognition is not supported in this browser.</span>;
//   }
//   const speakText = (text: string) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
//     utterance.pitch = 1;
//     utterance.rate = 1;
//     utterance.volume = 1;
//     speechSynthesis.speak(utterance);
//   };
//   const handleSend = () => {
//     if (!input.trim()) return;
//     const userMessage = `You: ${input}`;
//     const aiMessage = `AI: ${generateReply(input)}`;
//     setMessages([...messages, userMessage, aiMessage]);
//     speakText(aiMessage);
//     setInput('');
//     resetTranscript();
//   };
//   const generateReply = (text: string) => {
//     return `I'm just a mock AI, but you said: "${text}"`;
//   };
//   const handleVoiceInput = () => {
//     SpeechRecognition.startListening({ continuous: false, language: 'en-US' });
//     setInput(transcript);
//   };
//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">AI Chat 🤖</h1>
//       <div className="space-y-2 mb-4">
//         {messages.map((msg, idx) => (
//           <div key={idx} className="bg-gray-100 p-2 rounded">{msg}</div>
//         ))}
//       </div>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={input || transcript}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 p-2 border rounded"
//           placeholder="Type or speak your message..."
//         />
//         <button
//           onClick={handleSend}
//           className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         >
//           Send
//         </button>
//         <button
//           onClick={handleVoiceInput}
//           className={`px-4 py-2 rounded text-white ${listening ? 'bg-red-600' : 'bg-green-600'} hover:opacity-80`}
//         >
//           🎤 {listening ? 'Listening...' : 'Speak'}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default AIChat;
// 'use client';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useEffect } from 'react';
// const AiChat = () => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();
//   useEffect(() => {
//     // Automatically start listening when component mounts
//     SpeechRecognition.startListening({ continuous: true });
//   }, []);
//   useEffect(() => {
//     // Speak the transcript using a selected feminine voice
//     if (transcript) {
//       const synth = window.speechSynthesis;
//       const utterance = new SpeechSynthesisUtterance(transcript);
//       // Filter available voices to find a feminine one
//       const voices = synth.getVoices();
//       const selectedVoice = voices.find(
//         (voice) => voice.name.includes('Female') || voice.name.includes('Samantha') || voice.name.includes('Google US English')
//       );
//       // Set the selected voice (fallback to default if not found)
//       utterance.voice = selectedVoice || voices[0];
//       // Optional: Set pitch and rate for more natural tone
//       utterance.pitch = 1;
//       utterance.rate = 1;
//       synth.speak(utterance);
//     }
//   }, [transcript]);
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Your browser does not support speech recognition.</span>;
//   }
//   return (
//     <div>
//       <h2>🎙️ AI Chat</h2>
//       <p>Listening: {listening ? 'Yes' : 'No'}</p>
//       <p>Transcript: {transcript}</p>
//       <button onClick={resetTranscript}>Reset</button>
//       {/* 🔇 Resume and Pause removed as requested */}
//       {/* 🎧 Voice Options (commented out for future use) */}
//       {/* const selectedVoice = voices.find((voice) => voice.name.includes('Google UK English Female')); */}
//       {/* const selectedVoice = voices.find((voice) => voice.name.includes('Microsoft Zira Desktop')); */}
//     </div>
//   );
// };
// export default AiChat;
// 'use client'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useEffect } from 'react';
// const AiChat = () => {
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();
//   useEffect(() => {
//     // Start listening automatically
//     SpeechRecognition.startListening({ continuous: true });
//   }, []);
//   useEffect(() => {
//     // Speak the transcript using a selected feminine voice
//     if (transcript) {
//       const synth = window.speechSynthesis;
//       const utterance = new SpeechSynthesisUtterance(transcript);
//       const voices = synth.getVoices();
//       const selectedVoice = voices.find(
//         (voice) =>
//           voice.name.includes('Female') ||
//           voice.name.includes('Samantha') ||
//           voice.name.includes('Google US English')
//       );
//       utterance.voice = selectedVoice || voices[0];
//       utterance.pitch = 1;
//       utterance.rate = 1;
//       synth.speak(utterance);
//     }
//   }, [transcript]);
//   if (!browserSupportsSpeechRecognition) {
//     return (
//       <div className="text-center text-red-500 mt-10">
//         ❌ Your browser does not support speech recognition.
//       </div>
//     );
//   }
//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//         🎙️ AI Voice Chat
//       </h2>
//       <div className="mb-4">
//         <span className="font-medium text-gray-700">Listening:</span>{' '}
//         <span className={listening ? 'text-green-600' : 'text-red-600'}>
//           {listening ? 'Yes' : 'No'}
//         </span>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-medium mb-1">Transcript:</label>
//         <div className="bg-gray-100 p-3 rounded h-40 overflow-y-auto text-sm text-gray-800 border border-gray-300">
//           {transcript || 'Start speaking...'}
//         </div>
//       </div>
//       <button
//         onClick={resetTranscript}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
//       >
//         🔄 Reset
//       </button>
//       {/* 🎧 Voice Options (commented out for future use) */}
//       {/* const selectedVoice = voices.find((voice) => voice.name.includes('Google UK English Female')); */}
//       {/* const selectedVoice = voices.find((voice) => voice.name.includes('Microsoft Zira Desktop')); */}
//     </div>
//   );
// };
// export default AiChat;
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// const AIChat: React.FC = () => {
//   // Chat messages
//   const [messages, setMessages] = useState<string[]>([]);
//   // User input
//   const [input, setInput] = useState('');
//   // Available voices + selected voice
//   const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
//   const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
//   // Ref for utterance
//   const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
//   // Speech recognition hook
//   const {
//     transcript,
//     listening,
//     resetTranscript,
//     browserSupportsSpeechRecognition,
//   } = useSpeechRecognition();
//   // Load voices safely in browser
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const loadVoices = () => {
//       const availableVoices = window.speechSynthesis.getVoices();
//       setVoices(availableVoices);
//       // Default to en-US if available
//       setSelectedVoice(
//         availableVoices.find((v) => v.lang === 'en-US') || availableVoices[0] || null
//       );
//     };
//     // Voice list may load asynchronously
//     if (typeof window !== 'undefined' && window.speechSynthesis.onvoiceschanged !== undefined) {
//       window.speechSynthesis.onvoiceschanged = loadVoices;
//     }
//     loadVoices();
//   }, []);
//   // Fallback UI if speech recognition not supported
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Speech recognition is not supported in this browser.</span>;
//   }
//   // Speak text
//   const speakText = (text: string) => {
//     if (typeof window === 'undefined') return;
//     // Cancel ongoing speech
//     if (window.speechSynthesis.speaking) {
//       window.speechSynthesis.cancel();
//     }
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.voice = selectedVoice || null;
//     utterance.lang = selectedVoice?.lang || 'en-US';
//     utterance.pitch = 1;
//     utterance.rate = 1;
//     utterance.volume = 1;
//     utteranceRef.current = utterance;
//     window.speechSynthesis.speak(utterance);
//   };
//   // Send message
//   const handleSend = () => {
//     if (!input.trim()) return;
//     const userMessage = `You: ${input}`;
//     const aiMessage = `AI: ${generateReply(input)}`;
//     setMessages((prev) => [...prev, userMessage, aiMessage]);
//     speakText(aiMessage);
//     setInput('');
//     resetTranscript();
//   };
//   // Mock AI reply
//   const generateReply = (text: string) => {
//     return `I'm just a mock AI, but you said: "${text}"`;
//   };
//   // Voice input
//   const handleVoiceInput = () => {
//     SpeechRecognition.startListening({ continuous: false, language: 'en-US' });
//     setInput(transcript);
//   };
//   // Playback controls
//   const handlePause = () => {
//     if (typeof window !== 'undefined' && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
//       window.speechSynthesis.pause();
//     }
//   };
//   const handleResume = () => {
//     if (typeof window !== 'undefined' && window.speechSynthesis.paused) {
//       window.speechSynthesis.resume();
//     }
//   };
//   const handleStop = () => {
//     if (typeof window !== 'undefined') {
//       window.speechSynthesis.cancel();
//     }
//   };
//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">AI Chat 🤖</h1>
//       {/* Voice selector */}
//       <div className="mb-4">
//         <label className="block mb-2 font-semibold">Select Voice:</label>
//         <select
//           value={selectedVoice?.name || ''}
//           onChange={(e) =>
//             setSelectedVoice(voices.find((v) => v.name === e.target.value) || null)
//           }
//           className="w-full p-2 border rounded"
//         >
//           {voices.map((voice, idx) => (
//             <option key={idx} value={voice.name}>
//               {voice.name} ({voice.lang})
//             </option>
//           ))}
//         </select>
//       </div>
//       {/* Messages */}
//       <div className="space-y-2 mb-4 max-h-60 overflow-y-auto border p-2 rounded bg-gray-50">
//         {messages.map((msg, idx) => (
//           <div key={idx} className="bg-gray-100 p-2 rounded">
//             {msg}
//           </div>
//         ))}
//       </div>
//       {/* Input + buttons */}
//       <div className="flex gap-2 mb-2">
//         <input
//           type="text"
//           value={input || transcript}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 p-2 border rounded"
//           placeholder="Type or speak your message..."
//         />
//         <button
//           onClick={handleSend}
//           className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         >
//           Send
//         </button>
//         <button
//           onClick={handleVoiceInput}
//           className={`px-4 py-2 rounded text-white ${
//             listening ? 'bg-red-600' : 'bg-green-600'
//           } hover:opacity-80`}
//         >
//           🎤 {listening ? 'Listening...' : 'Speak'}
//         </button>
//       </div>
//       {/* Playback controls */}
//       <div className="flex gap-2">
//         <button
//           onClick={handlePause}
//           className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//         >
//           Pause
//         </button>
//         <button
//           onClick={handleResume}
//           className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Resume
//         </button>
//         <button
//           onClick={handleStop}
//           className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Stop
//         </button>
//       </div>
//     </div>
//   );
// };
// export default dynamic(() => Promise.resolve(AIChat), { ssr: false });
// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import dynamic from 'next/dynamic';
// const AIChat: React.FC = () => {
//   // Chat messages
//   const [messages, setMessages] = useState<string[]>([]);
//   const [input, setInput] = useState('');
//   // Voices
//   const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
//   const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
//   // Recognition instance
//   const recognitionRef = useRef<SpeechRecognition | null>(null);
//   // Speech synthesis utterance
//   const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
//   // Listening state
//   const [listening, setListening] = useState(false);
//   // Load voices
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const loadVoices = () => {
//       const availableVoices = window.speechSynthesis.getVoices();
//       setVoices(availableVoices);
//       setSelectedVoice(
//         availableVoices.find((v) => v.lang === 'en-US') || availableVoices[0] || null
//       );
//     };
//     if (window.speechSynthesis.onvoiceschanged !== undefined) {
//       window.speechSynthesis.onvoiceschanged = loadVoices;
//     }
//     loadVoices();
//   }, []);
//   // Initialize recognition
//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const SpeechRecognition =
//       (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       console.warn('SpeechRecognition not supported in this browser.');
//       return;
//     }
//     const recognition = new SpeechRecognition();
//     recognition.lang = 'en-US';
//     recognition.continuous = false;
//     recognition.interimResults = false;
//     recognition.onresult = (event: SpeechRecognitionEvent) => {
//       const transcript = event.results[0][0].transcript;
//       setInput(transcript);
//     };
//     recognition.onend = () => setListening(false);
//     recognitionRef.current = recognition;
//   }, []);
//   // Speak text
//   const speakText = (text: string) => {
//     if (typeof window === 'undefined') return;
//     if (window.speechSynthesis.speaking) {
//       window.speechSynthesis.cancel();
//     }
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.voice = selectedVoice || null;
//     utterance.lang = selectedVoice?.lang || 'en-US';
//     utterance.pitch = 1;
//     utterance.rate = 1;
//     utterance.volume = 1;
//     utteranceRef.current = utterance;
//     window.speechSynthesis.speak(utterance);
//   };
//   // Handle send
//   const handleSend = () => {
//     if (!input.trim()) return;
//     const userMessage = `You: ${input}`;
//     const aiMessage = `AI: ${generateReply(input)}`;
//     setMessages((prev) => [...prev, userMessage, aiMessage]);
//     speakText(aiMessage);
//     setInput('');
//   };
//   // Mock AI reply
//   const generateReply = (text: string) => {
//     return `I'm just a mock AI, but you said: "${text}"`;
//   };
//   // Start voice input
//   const handleVoiceInput = () => {
//     if (recognitionRef.current) {
//       setListening(true);
//       recognitionRef.current.start();
//     }
//   };
//   // Playback controls
//   const handlePause = () => {
//     if (typeof window !== 'undefined' && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
//       window.speechSynthesis.pause();
//     }
//   };
//   const handleResume = () => {
//     if (typeof window !== 'undefined' && window.speechSynthesis.paused) {
//       window.speechSynthesis.resume();
//     }
//   };
//   const handleStop = () => {
//     if (typeof window !== 'undefined') {
//       window.speechSynthesis.cancel();
//     }
//   };
//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">AI Chat 🤖</h1>
//       {/* Voice selector */}
//       <div className="mb-4">
//         <label className="block mb-2 font-semibold">Select Voice:</label>
//         <select
//           value={selectedVoice?.name || ''}
//           onChange={(e) =>
//             setSelectedVoice(voices.find((v) => v.name === e.target.value) || null)
//           }
//           className="w-full p-2 border rounded"
//         >
//           {voices.map((voice, idx) => (
//             <option key={idx} value={voice.name}>
//               {voice.name} ({voice.lang})
//             </option>
//           ))}
//         </select>
//       </div>
//       {/* Messages */}
//       <div className="space-y-2 mb-4 max-h-60 overflow-y-auto border p-2 rounded bg-gray-50">
//         {messages.map((msg, idx) => (
//           <div key={idx} className="bg-gray-100 p-2 rounded">
//             {msg}
//           </div>
//         ))}
//       </div>
//       {/* Input + buttons */}
//       <div className="flex gap-2 mb-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex-1 p-2 border rounded"
//           placeholder="Type or speak your message..."
//         />
//         <button
//           onClick={handleSend}
//           className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//         >
//           Send
//         </button>
//         <button
//           onClick={handleVoiceInput}
//           className={`px-4 py-2 rounded text-white ${
//             listening ? 'bg-red-600' : 'bg-green-600'
//           } hover:opacity-80`}
//         >
//           🎤 {listening ? 'Listening...' : 'Speak'}
//         </button>
//       </div>
//       {/* Playback controls */}
//       <div className="flex gap-2">
//         <button
//           onClick={handlePause}
//           className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//         >
//           Pause
//         </button>
//         <button
//           onClick={handleResume}
//           className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Resume
//         </button>
//         <button
//           onClick={handleStop}
//           className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Stop
//         </button>
//       </div>
//     </div>
//   );
// };
// // Disable SSR for this component
// export default dynamic(() => Promise.resolve(AIChat), { ssr: false });
// src/app/api/chat/route.ts
__turbopack_context__.s({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
;
async function POST(req) {
    try {
        const { message } = await req.json();
        // ✅ Call OpenAI API (GPT-4o-mini or GPT-3.5)
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "user",
                        content: message
                    }
                ]
            })
        });
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn’t understand that.";
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply
        });
    } catch (error) {
        console.error("Chat API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply: "Error connecting to AI."
        }, {
            status: 500
        });
    }
}
}),
"[project]/src/app/ai-chat/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AIChatPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$AIChat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/AIChat.tsx [app-rsc] (ecmascript)");
;
;
function AIChatPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$AIChat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/ai-chat/page.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/ai-chat/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/ai-chat/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0f716bf2._.js.map