(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Components/AIChat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const AIChat = ()=>{
    _s();
    // Chat messages
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Voices
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Recognition instance
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Speech synthesis utterance
    const utteranceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Listening state
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load voices
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChat.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const loadVoices = {
                "AIChat.useEffect.loadVoices": ()=>{
                    const availableVoices = window.speechSynthesis.getVoices();
                    setVoices(availableVoices);
                    setSelectedVoice(availableVoices.find({
                        "AIChat.useEffect.loadVoices": (v)=>v.lang === 'en-US'
                    }["AIChat.useEffect.loadVoices"]) || availableVoices[0] || null);
                }
            }["AIChat.useEffect.loadVoices"];
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = loadVoices;
            }
            loadVoices();
        }
    }["AIChat.useEffect"], []);
    // Initialize recognition
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIChat.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                console.warn('SpeechRecognition not supported in this browser.');
                return;
            }
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.onresult = ({
                "AIChat.useEffect": (event)=>{
                    const transcript = event.results[0][0].transcript;
                    setInput(transcript);
                }
            })["AIChat.useEffect"];
            recognition.onend = ({
                "AIChat.useEffect": ()=>setListening(false)
            })["AIChat.useEffect"];
            recognitionRef.current = recognition;
        }
    }["AIChat.useEffect"], []);
    // Speak text
    const speakText = (text)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = selectedVoice || null;
        utterance.lang = (selectedVoice === null || selectedVoice === void 0 ? void 0 : selectedVoice.lang) || 'en-US';
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1;
        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
    };
    // Handle send
    const handleSend = ()=>{
        if (!input.trim()) return;
        const userMessage = "You: ".concat(input);
        const aiMessage = "AI: ".concat(generateReply(input));
        setMessages((prev)=>[
                ...prev,
                userMessage,
                aiMessage
            ]);
        speakText(aiMessage);
        setInput('');
    };
    // Mock AI reply
    const generateReply = (text)=>{
        return "I'm just a mock AI, but you said: \"".concat(text, '"');
    };
    // Start voice input
    const handleVoiceInput = ()=>{
        if (recognitionRef.current) {
            setListening(true);
            recognitionRef.current.start();
        }
    };
    // Playback controls
    const handlePause = ()=>{
        if ("object" !== 'undefined' && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
            window.speechSynthesis.pause();
        }
    };
    const handleResume = ()=>{
        if ("object" !== 'undefined' && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
        }
    };
    const handleStop = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            window.speechSynthesis.cancel();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-xl mx-auto bg-white rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "AI Chat 🤖"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 643,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block mb-2 font-semibold",
                        children: "Select Voice:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: (selectedVoice === null || selectedVoice === void 0 ? void 0 : selectedVoice.name) || '',
                        onChange: (e)=>setSelectedVoice(voices.find((v)=>v.name === e.target.value) || null),
                        className: "w-full p-2 border rounded",
                        children: voices.map((voice, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: voice.name,
                                children: [
                                    voice.name,
                                    " (",
                                    voice.lang,
                                    ")"
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/app/Components/AIChat.tsx",
                                lineNumber: 656,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4 max-h-60 overflow-y-auto border p-2 rounded bg-gray-50",
                children: messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-2 rounded",
                        children: msg
                    }, idx, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 666,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 664,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        className: "flex-1 p-2 border rounded",
                        placeholder: "Type or speak your message..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 674,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        className: "px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 681,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleVoiceInput,
                        className: "px-4 py-2 rounded text-white ".concat(listening ? 'bg-red-600' : 'bg-green-600', " hover:opacity-80"),
                        children: [
                            "🎤 ",
                            listening ? 'Listening...' : 'Speak'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 673,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePause,
                        className: "px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",
                        children: "Pause"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleResume,
                        className: "px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",
                        children: "Resume"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 705,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStop,
                        className: "px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",
                        children: "Stop"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 711,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/AIChat.tsx",
        lineNumber: 642,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AIChat, "bXy/g2AGlk/gzc8FVdHMo4uEjR4=");
_c = AIChat;
const __TURBOPACK__default__export__ = _c2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c1 = ()=>Promise.resolve(AIChat), {
    ssr: false
});
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AIChat");
__turbopack_context__.k.register(_c1, "%default%$dynamic");
__turbopack_context__.k.register(_c2, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR(param) {
    let { reason, children } = param;
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
function PreloadChunks(param) {
    let { moduleIds } = param;
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = workStore.assetPrefix + "/_next/" + (0, _encodeuripath.encodeURIPath)(chunk) + dplId;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style"
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low'
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    var _mergedOptions_loadableGenerated;
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: (_mergedOptions_loadableGenerated = mergedOptions.loadableGenerated) == null ? void 0 : _mergedOptions_loadableGenerated.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}}),
}]);

//# sourceMappingURL=_c5a818a6._.js.map