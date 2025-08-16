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






'use client';
import { useState, useRef } from "react";

export default function AIChat() {
  const [listening, setListening] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const recognitionRef = useRef<any>(null);

  // 🎤 Start voice recognition
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = async (event: any) => {
      const transcript = event.results[0][0].transcript;
      addMessage("user", transcript);
      await sendToAI(transcript);
    };

    recognition.start();  
    recognitionRef.current = recognition;
  };

  // 🤖 Send message to AI
  const sendToAI = async (text: string) => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();
    addMessage("ai", data.reply);
    speak(data.reply);
  };

  // 🗣️ Speak AI response
  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    synth.speak(utterance);
  };

  // 💬 Add message
  const addMessage = (role: string, text: string) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  return (
    <div className="p-4 max-w-lg mx-auto space-y-4">
      <div className="border p-2 rounded h-64 overflow-y-auto bg-gray-100">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-blue-600" : "text-green-600"}>
            <b>{m.role}:</b> {m.text}
          </div>
        ))}
      </div>

      <button
        onClick={startListening}
        className={`px-4 py-2 rounded ${listening ? "bg-red-500" : "bg-blue-500"} text-white`}
      >
        {listening ? "Listening..." : "🎤 Speak"}
      </button>
    </div>
  );
}
