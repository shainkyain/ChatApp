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

// import React, { useState, useEffect, useRef } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const AIChat: React.FC = () => {
//   // State to store chat messages
//   const [messages, setMessages] = useState<string[]>([]);

//   // State for user input
//   const [input, setInput] = useState('');

//   // State for available voices and selected voice
//   const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
//   const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

//   // Ref to hold the current utterance for speech playback control
//   const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

//   // Hook from react-speech-recognition for speech-to-text
//   const {
//     transcript, // Live transcript from mic
//     listening, // Boolean: is mic active
//     resetTranscript, // Clears transcript
//     browserSupportsSpeechRecognition, // Checks browser support
//   } = useSpeechRecognition();

//   // Load available voices when component mounts
//   useEffect(() => {
//     const loadVoices = () => {
//       const availableVoices = speechSynthesis.getVoices();
//       setVoices(availableVoices);

//       // Default to en-US voice if available
//       setSelectedVoice(availableVoices.find(v => v.lang === 'en-US') || availableVoices[0]);
//     };

//     // Some browsers load voices asynchronously
//     if (speechSynthesis.onvoiceschanged !== undefined) {
//       speechSynthesis.onvoiceschanged = loadVoices;
//     }

//     loadVoices();
//   }, []);

//   // Fallback UI if browser doesn't support speech recognition
//   if (!browserSupportsSpeechRecognition) {
//     return <span>Speech recognition is not supported in this browser.</span>;
//   }

//   // Function to speak text using selected voice
//   const speakText = (text: string) => {
//     // Cancel any ongoing speech
//     if (speechSynthesis.speaking) {
//       speechSynthesis.cancel();
//     }

//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.voice = selectedVoice || null;
//     utterance.lang = selectedVoice?.lang || 'en-US';
//     utterance.pitch = 1;
//     utterance.rate = 1;
//     utterance.volume = 1;

//     utteranceRef.current = utterance;
//     speechSynthesis.speak(utterance);
//   };

//   // Handle sending message and triggering AI reply
//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = `You: ${input}`;
//     const aiMessage = `AI: ${generateReply(input)}`;

//     setMessages([...messages, userMessage, aiMessage]);
//     speakText(aiMessage); // Speak the AI reply
//     setInput('');
//     resetTranscript(); // Clear transcript after sending
//   };

//   // Mock AI reply generator
//   const generateReply = (text: string) => {
//     return `I'm just a mock AI, but you said: "${text}"`;
//   };

//   // Start listening to user's voice input
//   const handleVoiceInput = () => {
//     SpeechRecognition.startListening({ continuous: false, language: 'en-US' });
//     setInput(transcript); // Update input with transcript
//   };

//   // Pause speech playback
//   const handlePause = () => {
//     if (speechSynthesis.speaking && !speechSynthesis.paused) {
//       speechSynthesis.pause();
//     }
//   };

//   // Resume paused speech
//   const handleResume = () => {
//     if (speechSynthesis.paused) {
//       speechSynthesis.resume();
//     }
//   };

//   // Stop speech playback
//   const handleStop = () => {
//     speechSynthesis.cancel();
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">AI Chat 🤖</h1>

//       {/* Voice selection dropdown */}
//       <div className="mb-4">
//         <label className="block mb-2 font-semibold">Select Voice:</label>
//         <select
//           value={selectedVoice?.name}
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

//       {/* Display chat messages */}
//       <div className="space-y-2 mb-4">
//         {messages.map((msg, idx) => (
//           <div key={idx} className="bg-gray-100 p-2 rounded">{msg}</div>
//         ))}
//       </div>

//       {/* Input field and buttons */}
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
//           className={`px-4 py-2 rounded text-white ${listening ? 'bg-red-600' : 'bg-green-600'} hover:opacity-80`}
//         >
//           🎤 {listening ? 'Listening...' : 'Speak'}
//         </button>
//       </div>

//       {/* Speech playback controls */}
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

'use client'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from 'react';

const AiChat = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    // Start listening automatically
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  useEffect(() => {
    // Speak the transcript using a selected feminine voice
    if (transcript) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(transcript);

      const voices = synth.getVoices();
      const selectedVoice = voices.find(
        (voice) =>
          voice.name.includes('Female') ||
          voice.name.includes('Samantha') ||
          voice.name.includes('Google US English')
      );

      utterance.voice = selectedVoice || voices[0];
      utterance.pitch = 1;
      utterance.rate = 1;

      synth.speak(utterance);
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-center text-red-500 mt-10">
        ❌ Your browser does not support speech recognition.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        🎙️ AI Voice Chat
      </h2>

      <div className="mb-4">
        <span className="font-medium text-gray-700">Listening:</span>{' '}
        <span className={listening ? 'text-green-600' : 'text-red-600'}>
          {listening ? 'Yes' : 'No'}
        </span>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Transcript:</label>
        <div className="bg-gray-100 p-3 rounded h-40 overflow-y-auto text-sm text-gray-800 border border-gray-300">
          {transcript || 'Start speaking...'}
        </div>
      </div>

      <button
        onClick={resetTranscript}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        🔄 Reset
      </button>

      {/* 🎧 Voice Options (commented out for future use) */}
      {/* const selectedVoice = voices.find((voice) => voice.name.includes('Google UK English Female')); */}
      {/* const selectedVoice = voices.find((voice) => voice.name.includes('Microsoft Zira Desktop')); */}
    </div>
  );
};

export default AiChat;
