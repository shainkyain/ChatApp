module.exports = {

"[project]/src/app/Components/AIChat.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-speech-recognition/dist/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const AIChat = ()=>{
    // State to store chat messages
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // State for user input
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // State for available voices and selected voice
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ref to hold the current utterance for speech playback control
    const utteranceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hook from react-speech-recognition for speech-to-text
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpeechRecognition"])();
    // Load available voices when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadVoices = ()=>{
            const availableVoices = speechSynthesis.getVoices();
            setVoices(availableVoices);
            // Default to en-US voice if available
            setSelectedVoice(availableVoices.find((v)=>v.lang === 'en-US') || availableVoices[0]);
        };
        // Some browsers load voices asynchronously
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }
        loadVoices();
    }, []);
    // Fallback UI if browser doesn't support speech recognition
    if (!browserSupportsSpeechRecognition) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Speech recognition is not supported in this browser."
        }, void 0, false, {
            fileName: "[project]/src/app/Components/AIChat.tsx",
            lineNumber: 205,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Function to speak text using selected voice
    const speakText = (text)=>{
        // Cancel any ongoing speech
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = selectedVoice || null;
        utterance.lang = selectedVoice?.lang || 'en-US';
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1;
        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);
    };
    // Handle sending message and triggering AI reply
    const handleSend = ()=>{
        if (!input.trim()) return;
        const userMessage = `You: ${input}`;
        const aiMessage = `AI: ${generateReply(input)}`;
        setMessages([
            ...messages,
            userMessage,
            aiMessage
        ]);
        speakText(aiMessage); // Speak the AI reply
        setInput('');
        resetTranscript(); // Clear transcript after sending
    };
    // Mock AI reply generator
    const generateReply = (text)=>{
        return `I'm just a mock AI, but you said: "${text}"`;
    };
    // Start listening to user's voice input
    const handleVoiceInput = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].startListening({
            continuous: false,
            language: 'en-US'
        });
        setInput(transcript); // Update input with transcript
    };
    // Pause speech playback
    const handlePause = ()=>{
        if (speechSynthesis.speaking && !speechSynthesis.paused) {
            speechSynthesis.pause();
        }
    };
    // Resume paused speech
    const handleResume = ()=>{
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
        }
    };
    // Stop speech playback
    const handleStop = ()=>{
        speechSynthesis.cancel();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-xl mx-auto bg-white rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "AI Chat 🤖"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block mb-2 font-semibold",
                        children: "Select Voice:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: selectedVoice?.name,
                        onChange: (e)=>setSelectedVoice(voices.find((v)=>v.name === e.target.value) || null),
                        className: "w-full p-2 border rounded",
                        children: voices.map((voice, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: voice.name,
                                children: [
                                    voice.name,
                                    " (",
                                    voice.lang,
                                    ")"
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/app/Components/AIChat.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4",
                children: messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-100 p-2 rounded",
                        children: msg
                    }, idx, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: input || transcript,
                        onChange: (e)=>setInput(e.target.value),
                        className: "flex-1 p-2 border rounded",
                        placeholder: "Type or speak your message..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        className: "px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700",
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleVoiceInput,
                        className: `px-4 py-2 rounded text-white ${listening ? 'bg-red-600' : 'bg-green-600'} hover:opacity-80`,
                        children: [
                            "🎤 ",
                            listening ? 'Listening...' : 'Speak'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePause,
                        className: "px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600",
                        children: "Pause"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleResume,
                        className: "px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",
                        children: "Resume"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStop,
                        className: "px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",
                        children: "Stop"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AIChat.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/AIChat.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/AIChat.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AIChat;
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/react-speech-recognition/dist/cc-BU0zEyYq.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "_": ()=>_async_to_generator
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
;
}),
"[project]/node_modules/lodash.debounce/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && ("TURBOPACK ident replacement", globalThis) && ("TURBOPACK ident replacement", globalThis).Object === Object && ("TURBOPACK ident replacement", globalThis);
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;
}}),
"[project]/node_modules/react-speech-recognition/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SpeechRecognition,
    "useSpeechRecognition": ()=>useSpeechRecognition
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-speech-recognition/dist/cc-BU0zEyYq.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash.debounce/index.js [app-ssr] (ecmascript)");
;
;
;
const NativeSpeechRecognition = "undefined" !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition);
const isNative = (SpeechRecognition)=>SpeechRecognition === NativeSpeechRecognition;
var isAndroid = ()=>/(android)/i.test(typeof navigator !== "undefined" ? navigator.userAgent : "");
const concatTranscripts = (...transcriptParts)=>{
    return transcriptParts.map((t)=>t.trim()).join(" ").trim();
};
// The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
const optionalParam = /\s*\((.*?)\)\s*/g;
const optionalRegex = /(\(\?:[^)]+\))\?/g;
const namedParam = /(\(\?)?:\w+/g;
const splatParam = /\*/g;
const escapeRegExp = /[-{}[\]+?.,\\^$|#]/g;
const commandToRegExp = (command)=>{
    if (command instanceof RegExp) {
        return new RegExp(command.source, "i");
    }
    command = command.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, (match, optional)=>{
        return optional ? match : "([^\\s]+)";
    }).replace(splatParam, "(.*?)").replace(optionalRegex, "\\s*$1?\\s*");
    return new RegExp("^" + command + "$", "i");
};
// this is from https://github.com/aceakash/string-similarity
const compareTwoStringsUsingDiceCoefficient = (first, second)=>{
    first = first.replace(/\s+/g, "").toLowerCase();
    second = second.replace(/\s+/g, "").toLowerCase();
    if (!first.length && !second.length) return 1; // if both are empty strings
    if (!first.length || !second.length) return 0; // if only one is empty string
    if (first === second) return 1; // identical
    if (first.length === 1 && second.length === 1) return 0; // both are 1-letter strings
    if (first.length < 2 || second.length < 2) return 0; // if either is a 1-letter string
    const firstBigrams = new Map();
    for(let i = 0; i < first.length - 1; i++){
        const bigram = first.substring(i, i + 2);
        const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
        firstBigrams.set(bigram, count);
    }
    let intersectionSize = 0;
    for(let i = 0; i < second.length - 1; i++){
        const bigram = second.substring(i, i + 2);
        const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
        if (count > 0) {
            firstBigrams.set(bigram, count - 1);
            intersectionSize++;
        }
    }
    return 2.0 * intersectionSize / (first.length + second.length - 2);
};
const browserSupportsPolyfills = ()=>{
    return "undefined" !== "undefined" && window.navigator !== undefined && window.navigator.mediaDevices !== undefined && window.navigator.mediaDevices.getUserMedia !== undefined && (window.AudioContext !== undefined || window.webkitAudioContext !== undefined);
};
class RecognitionManager {
    setSpeechRecognition(SpeechRecognition) {
        const browserSupportsRecogniser = !!SpeechRecognition && (isNative(SpeechRecognition) || browserSupportsPolyfills());
        if (browserSupportsRecogniser) {
            this.disableRecognition();
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            this.recognition.onresult = this.updateTranscript.bind(this);
            this.recognition.onend = this.onRecognitionDisconnect.bind(this);
            this.recognition.onerror = this.onError.bind(this);
        }
        this.emitBrowserSupportsSpeechRecognitionChange(browserSupportsRecogniser);
    }
    subscribe(id, callbacks) {
        this.subscribers[id] = callbacks;
    }
    unsubscribe(id) {
        delete this.subscribers[id];
    }
    emitListeningChange(listening) {
        this.listening = listening;
        Object.keys(this.subscribers).forEach((id)=>{
            const { onListeningChange } = this.subscribers[id];
            onListeningChange(listening);
        });
    }
    emitMicrophoneAvailabilityChange(isMicrophoneAvailable) {
        this.isMicrophoneAvailable = isMicrophoneAvailable;
        Object.keys(this.subscribers).forEach((id)=>{
            const { onMicrophoneAvailabilityChange } = this.subscribers[id];
            onMicrophoneAvailabilityChange(isMicrophoneAvailable);
        });
    }
    emitTranscriptChange(interimTranscript, finalTranscript) {
        Object.keys(this.subscribers).forEach((id)=>{
            const { onTranscriptChange } = this.subscribers[id];
            onTranscriptChange(interimTranscript, finalTranscript);
        });
    }
    emitClearTranscript() {
        Object.keys(this.subscribers).forEach((id)=>{
            const { onClearTranscript } = this.subscribers[id];
            onClearTranscript();
        });
    }
    emitBrowserSupportsSpeechRecognitionChange(browserSupportsSpeechRecognitionChange) {
        Object.keys(this.subscribers).forEach((id)=>{
            const { onBrowserSupportsSpeechRecognitionChange, onBrowserSupportsContinuousListeningChange } = this.subscribers[id];
            onBrowserSupportsSpeechRecognitionChange(browserSupportsSpeechRecognitionChange);
            onBrowserSupportsContinuousListeningChange(browserSupportsSpeechRecognitionChange);
        });
    }
    disconnect(disconnectType) {
        if (this.recognition && this.listening) {
            switch(disconnectType){
                case "ABORT":
                    this.pauseAfterDisconnect = true;
                    this.abort();
                    break;
                case "RESET":
                    this.pauseAfterDisconnect = false;
                    this.abort();
                    break;
                case "STOP":
                default:
                    this.pauseAfterDisconnect = true;
                    this.stop();
            }
        }
    }
    disableRecognition() {
        if (this.recognition) {
            this.recognition.onresult = ()=>{};
            this.recognition.onend = ()=>{};
            this.recognition.onerror = ()=>{};
            if (this.listening) {
                this.stopListening();
            }
        }
    }
    onError(event) {
        if (event && event.error && event.error === "not-allowed") {
            this.emitMicrophoneAvailabilityChange(false);
            this.disableRecognition();
        }
    }
    onRecognitionDisconnect() {
        this.onStopListening();
        this.listening = false;
        if (this.pauseAfterDisconnect) {
            this.emitListeningChange(false);
        } else if (this.recognition) {
            if (this.recognition.continuous) {
                this.startListening({
                    continuous: this.recognition.continuous
                });
            } else {
                this.emitListeningChange(false);
            }
        }
        this.pauseAfterDisconnect = false;
    }
    updateTranscript({ results, resultIndex }) {
        const currentIndex = resultIndex === undefined ? results.length - 1 : resultIndex;
        this.interimTranscript = "";
        this.finalTranscript = "";
        for(let i = currentIndex; i < results.length; ++i){
            if (results[i].isFinal && (!isAndroid() || results[i][0].confidence > 0)) {
                this.updateFinalTranscript(results[i][0].transcript);
            } else {
                this.interimTranscript = concatTranscripts(this.interimTranscript, results[i][0].transcript);
            }
        }
        let isDuplicateResult = false;
        if (this.interimTranscript === "" && this.finalTranscript !== "") {
            if (this.previousResultWasFinalOnly) {
                isDuplicateResult = true;
            }
            this.previousResultWasFinalOnly = true;
        } else {
            this.previousResultWasFinalOnly = false;
        }
        if (!isDuplicateResult) {
            this.emitTranscriptChange(this.interimTranscript, this.finalTranscript);
        }
    }
    updateFinalTranscript(newFinalTranscript) {
        this.finalTranscript = concatTranscripts(this.finalTranscript, newFinalTranscript);
    }
    resetTranscript() {
        this.disconnect("RESET");
    }
    startListening() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(function*({ continuous = false, language } = {}) {
            if (!this.recognition) {
                return;
            }
            const isContinuousChanged = continuous !== this.recognition.continuous;
            const isLanguageChanged = language && language !== this.recognition.lang;
            if (isContinuousChanged || isLanguageChanged) {
                if (this.listening) {
                    yield this.stopListening();
                }
                this.recognition.continuous = isContinuousChanged ? continuous : this.recognition.continuous;
                this.recognition.lang = isLanguageChanged ? language : this.recognition.lang;
            }
            if (!this.listening) {
                if (!this.recognition.continuous) {
                    this.resetTranscript();
                    this.emitClearTranscript();
                }
                try {
                    yield this.start();
                    this.emitListeningChange(true);
                } catch (e) {
                    // DOMExceptions indicate a redundant microphone start - safe to swallow
                    if (!(e instanceof DOMException)) {
                        this.emitMicrophoneAvailabilityChange(false);
                    }
                }
            }
        }).apply(this, arguments);
    }
    abortListening() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(function*() {
            this.disconnect("ABORT");
            this.emitListeningChange(false);
            yield new Promise((resolve)=>{
                this.onStopListening = resolve;
            });
        }).call(this);
    }
    stopListening() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(function*() {
            this.disconnect("STOP");
            this.emitListeningChange(false);
            yield new Promise((resolve)=>{
                this.onStopListening = resolve;
            });
        }).call(this);
    }
    getRecognition() {
        return this.recognition;
    }
    start() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(function*() {
            if (this.recognition && !this.listening) {
                yield this.recognition.start();
                this.listening = true;
            }
        }).call(this);
    }
    stop() {
        if (this.recognition && this.listening) {
            this.recognition.stop();
            this.listening = false;
        }
    }
    abort() {
        if (this.recognition && this.listening) {
            this.recognition.abort();
            this.listening = false;
        }
    }
    constructor(SpeechRecognition){
        this.recognition = null;
        this.pauseAfterDisconnect = false;
        this.interimTranscript = "";
        this.finalTranscript = "";
        this.listening = false;
        this.isMicrophoneAvailable = true;
        this.subscribers = {};
        this.onStopListening = ()=>{};
        this.previousResultWasFinalOnly = false;
        this.resetTranscript = this.resetTranscript.bind(this);
        this.startListening = this.startListening.bind(this);
        this.stopListening = this.stopListening.bind(this);
        this.abortListening = this.abortListening.bind(this);
        this.setSpeechRecognition = this.setSpeechRecognition.bind(this);
        this.disableRecognition = this.disableRecognition.bind(this);
        this.setSpeechRecognition(SpeechRecognition);
        if (isAndroid()) {
            this.updateFinalTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2e$debounce$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this.updateFinalTranscript, 250, {
                leading: true
            });
        }
    }
}
const CLEAR_TRANSCRIPT = "CLEAR_TRANSCRIPT";
const APPEND_TRANSCRIPT = "APPEND_TRANSCRIPT";
const clearTranscript = ()=>{
    return {
        type: CLEAR_TRANSCRIPT
    };
};
const appendTranscript = (interimTranscript, finalTranscript)=>{
    return {
        type: APPEND_TRANSCRIPT,
        payload: {
            interimTranscript,
            finalTranscript
        }
    };
};
const transcriptReducer = (state, action)=>{
    switch(action.type){
        case CLEAR_TRANSCRIPT:
            return {
                interimTranscript: "",
                finalTranscript: ""
            };
        case APPEND_TRANSCRIPT:
            return {
                interimTranscript: action.payload.interimTranscript,
                finalTranscript: concatTranscripts(state.finalTranscript, action.payload.finalTranscript)
            };
        default:
            throw new Error();
    }
};
let _browserSupportsSpeechRecognition = !!NativeSpeechRecognition;
let _browserSupportsContinuousListening = _browserSupportsSpeechRecognition && !isAndroid();
let recognitionManager;
const useSpeechRecognition = ({ transcribing = true, clearTranscriptOnListen = true, commands = [] } = {})=>{
    const [recognitionManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(SpeechRecognition.getRecognitionManager());
    const [browserSupportsSpeechRecognition, setBrowserSupportsSpeechRecognition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(_browserSupportsSpeechRecognition);
    const [browserSupportsContinuousListening, setBrowserSupportsContinuousListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(_browserSupportsContinuousListening);
    const [{ interimTranscript, finalTranscript }, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(transcriptReducer, {
        interimTranscript: recognitionManager.interimTranscript,
        finalTranscript: ""
    });
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(recognitionManager.listening);
    const [isMicrophoneAvailable, setMicrophoneAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(recognitionManager.isMicrophoneAvailable);
    const commandsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(commands);
    commandsRef.current = commands;
    const dispatchClearTranscript = ()=>{
        dispatch(clearTranscript());
    };
    const resetTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        recognitionManager.resetTranscript();
        dispatchClearTranscript();
    }, [
        recognitionManager
    ]);
    const testFuzzyMatch = (command, input, fuzzyMatchingThreshold)=>{
        const commandToString = typeof command === "object" ? command.toString() : command;
        const commandWithoutSpecials = commandToString.replace(/[&/\\#,+()!$~%.'":*?<>{}]/g, "").replace(/  +/g, " ").trim();
        const howSimilar = compareTwoStringsUsingDiceCoefficient(commandWithoutSpecials, input);
        if (howSimilar >= fuzzyMatchingThreshold) {
            return {
                command,
                commandWithoutSpecials,
                howSimilar,
                isFuzzyMatch: true
            };
        }
        return null;
    };
    const testMatch = (command, input)=>{
        const pattern = commandToRegExp(command);
        const result = pattern.exec(input);
        if (result) {
            return {
                command,
                parameters: result.slice(1)
            };
        }
        return null;
    };
    const matchCommands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newInterimTranscript, newFinalTranscript)=>{
        commandsRef.current.forEach(({ command, callback, matchInterim = false, isFuzzyMatch = false, fuzzyMatchingThreshold = 0.8, bestMatchOnly = false })=>{
            const input = !newFinalTranscript && matchInterim ? newInterimTranscript.trim() : newFinalTranscript.trim();
            const subcommands = Array.isArray(command) ? command : [
                command
            ];
            const results = subcommands.map((subcommand)=>{
                if (isFuzzyMatch) {
                    return testFuzzyMatch(subcommand, input, fuzzyMatchingThreshold);
                }
                return testMatch(subcommand, input);
            }).filter((x)=>x);
            if (isFuzzyMatch && bestMatchOnly && results.length >= 2) {
                results.sort((a, b)=>b.howSimilar - a.howSimilar);
                const { command, commandWithoutSpecials, howSimilar } = results[0];
                callback(commandWithoutSpecials, input, howSimilar, {
                    command,
                    resetTranscript
                });
            } else {
                results.forEach((result)=>{
                    if (result.isFuzzyMatch) {
                        const { command, commandWithoutSpecials, howSimilar } = result;
                        callback(commandWithoutSpecials, input, howSimilar, {
                            command,
                            resetTranscript
                        });
                    } else {
                        const { command, parameters } = result;
                        callback(...parameters, {
                            command,
                            resetTranscript
                        });
                    }
                });
            }
        });
    }, [
        resetTranscript
    ]);
    const handleTranscriptChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newInterimTranscript, newFinalTranscript)=>{
        if (transcribing) {
            dispatch(appendTranscript(newInterimTranscript, newFinalTranscript));
        }
        matchCommands(newInterimTranscript, newFinalTranscript);
    }, [
        matchCommands,
        transcribing
    ]);
    const handleClearTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (clearTranscriptOnListen) {
            dispatchClearTranscript();
        }
    }, [
        clearTranscriptOnListen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = SpeechRecognition.counter;
        SpeechRecognition.counter += 1;
        const callbacks = {
            onListeningChange: setListening,
            onMicrophoneAvailabilityChange: setMicrophoneAvailable,
            onTranscriptChange: handleTranscriptChange,
            onClearTranscript: handleClearTranscript,
            onBrowserSupportsSpeechRecognitionChange: setBrowserSupportsSpeechRecognition,
            onBrowserSupportsContinuousListeningChange: setBrowserSupportsContinuousListening
        };
        recognitionManager.subscribe(id, callbacks);
        return ()=>{
            recognitionManager.unsubscribe(id);
        };
    }, [
        transcribing,
        clearTranscriptOnListen,
        recognitionManager,
        handleTranscriptChange,
        handleClearTranscript
    ]);
    const transcript = concatTranscripts(finalTranscript, interimTranscript);
    return {
        transcript,
        interimTranscript,
        finalTranscript,
        listening,
        isMicrophoneAvailable,
        resetTranscript,
        browserSupportsSpeechRecognition,
        browserSupportsContinuousListening
    };
};
const SpeechRecognition = {
    counter: 0,
    applyPolyfill: (PolyfillSpeechRecognition)=>{
        if (recognitionManager) {
            recognitionManager.setSpeechRecognition(PolyfillSpeechRecognition);
        } else {
            recognitionManager = new RecognitionManager(PolyfillSpeechRecognition);
        }
        const browserSupportsPolyfill = !!PolyfillSpeechRecognition && browserSupportsPolyfills();
        _browserSupportsSpeechRecognition = browserSupportsPolyfill;
        _browserSupportsContinuousListening = browserSupportsPolyfill;
    },
    removePolyfill: ()=>{
        if (recognitionManager) {
            recognitionManager.setSpeechRecognition(NativeSpeechRecognition);
        } else {
            recognitionManager = new RecognitionManager(NativeSpeechRecognition);
        }
        _browserSupportsSpeechRecognition = !!NativeSpeechRecognition;
        _browserSupportsContinuousListening = _browserSupportsSpeechRecognition && !isAndroid();
    },
    getRecognitionManager: ()=>{
        if (!recognitionManager) {
            recognitionManager = new RecognitionManager(NativeSpeechRecognition);
        }
        return recognitionManager;
    },
    getRecognition: ()=>{
        const recognitionManager = SpeechRecognition.getRecognitionManager();
        return recognitionManager.getRecognition();
    },
    startListening: ({ continuous, language } = {})=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(function*() {
            const recognitionManager = SpeechRecognition.getRecognitionManager();
            yield recognitionManager.startListening({
                continuous,
                language
            });
        })(),
    stopListening: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(function*() {
            const recognitionManager = SpeechRecognition.getRecognitionManager();
            yield recognitionManager.stopListening();
        })(),
    abortListening: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$speech$2d$recognition$2f$dist$2f$cc$2d$BU0zEyYq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(function*() {
            const recognitionManager = SpeechRecognition.getRecognitionManager();
            yield recognitionManager.abortListening();
        })(),
    browserSupportsSpeechRecognition: ()=>_browserSupportsSpeechRecognition,
    browserSupportsContinuousListening: ()=>_browserSupportsContinuousListening
};
;
}),

};

//# sourceMappingURL=_5ab18414._.js.map