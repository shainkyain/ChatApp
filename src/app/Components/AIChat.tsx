 
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
