"use client"

import { useState, useRef } from 'react';

interface MessageObject {
  message: string;
  sentTime: string;
  sender: string;
}

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY
const systemMessage = {
  role: "system",
  content: "You are speaking with Devsan, a seasoned software professional with 2 years of experience. Devsan's real name is Sandip Parida, and he is an Indian full-stack developer. Feel free to ask Devsan anything related to software development or inquire about his portfolio project."
};


export default function Openai() {
  const sendButtonRef = useRef<HTMLButtonElement>(null); // Add a ref for the send button

  const [messages, setMessages] = useState<MessageObject[]>([
    {
      message: "Hello, I'm devsan! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  const handleEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputRef.current?.value) {
      // Trigger a click on the send button
      sendButtonRef.current?.click();
      event.preventDefault(); // Prevent the default Enter key behavior (form submission)
    }
  };

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addMessage = (message: MessageObject) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleSend = async (messageText: string) => {
    const newMessage: MessageObject = {
      message: messageText,
      sentTime: "just now",
      sender: "user",
    };

    addMessage(newMessage);
    setIsTyping(true);
    await processMessageToChatGPT(newMessage);
  };

  async function processMessageToChatGPT(chatMessage: MessageObject) {
    const apiMessage = {
      role: "user",
      content: chatMessage.message,
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, apiMessage],
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content;

      const newMessage: MessageObject = {
        message: assistantMessage,
        sentTime: "just now",
        sender: "ChatGPT",
      };

      addMessage(newMessage);
      setIsTyping(false);
    } catch (error) {
      console.error("Error processing message:", error);
    }
  }

  return (
    <div className="App">
      <div style={{ position: "relative" }}>
        <div className="chatbox">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between  px-4 py-2">
              <h1 className="text-purple-500 font-bold text-lg">DevSan:- Ask me</h1>
              <button className="text-white">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="flex-1 bg-white backdrop-filter backdrop-blur-lg bg-opacity-25 border-black-500 border rounded-lg p-4 overflow-y-auto messagelist">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.sender === 'user' ? 'user-message' : 'bg-secondary bg-opacity-40'}`}
                >
                  <p>{msg.message}</p>
                </div>
              ))}
              {isTyping && (
                <div className="message">
                  <p>Assistant is typing...</p>
                </div>
              )}
            </div>
            <div className="bg-gray-200 bg-opacity-40 backdrop-blur-lg px-2 py-1">
              <div className="flex items-center">
                <input
                  onKeyDown={handleEnterKeyPress}
                  ref={inputRef}
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-white rounded-full py-2 px-4 mr-2"
                />
                <button ref={sendButtonRef}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => {
                    if (inputRef.current?.value) {
                      handleSend(inputRef.current.value);
                      inputRef.current.value = '';
                    }
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
