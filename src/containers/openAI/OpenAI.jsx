import React from "react";
import "./OpenAI.css";
import "./normal.css";
import { useState } from "react";

function OpenAI() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    { user: "gpt", message: "Hello, how can I help you today?" },
    { user: "me", message: "I need your help" },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    setInput("");

    const response = await fetch("http://localhost:3000/openAI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: chatLog.map((message) => message.message).join(""),
      }),
    });
    const data = await response.json();
    setChatLog([...chatLog, { user: "gpt", message: `${data.message}` }]);
    console.log(data.message);
  }

  return (
    <div className="openAI">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-textarea"
              placeholder="Type Your Input Here"
            ></input>
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
          {message.user === "gpt" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              className="svg-icon"
            >
              <path
                fill="#fff"
                d="M24 10.98a4.676 4.676 0 0 0-2.106-3.887c.01-.097.015-.195.015-.294 0-1.952-1.275-3.514-2.995-3.744-.34-1.73-1.872-3.029-3.664-3.029A3.75 3.75 0 0 0 12 1.907 3.75 3.75 0 0 0 8.75.026c-1.791 0-3.323 1.298-3.664 3.026-1.71.219-2.996 1.786-2.996 3.746 0 .1.005.198.015.294A4.675 4.675 0 0 0 0 10.979c0 .935.282 1.831.818 2.614A4.587 4.587 0 0 0 0 16.207c0 1.642.871 3.155 2.289 4.002a5.173 5.173 0 0 0 5.007 3.816 5.213 5.213 0 0 0 4.705-2.98 5.212 5.212 0 0 0 4.705 2.98 5.173 5.173 0 0 0 5.007-3.816 4.665 4.665 0 0 0 2.289-4.002c0-.935-.282-1.831-.818-2.614a4.587 4.587 0 0 0 .818-2.614ZM7.295 23.026a4.179 4.179 0 0 1-4.087-3.258l-.051-.221-.2-.107A3.671 3.671 0 0 1 1 16.209c0-.832.287-1.627.831-2.3l.253-.314-.253-.314a3.636 3.636 0 0 1-.831-2.3 3.68 3.68 0 0 1 1.892-3.196l.31-.174s-.111-.653-.111-.812c0-1.363.901-2.772 2.435-2.772h.463l.036-.461c.11-1.423 1.307-2.539 2.726-2.539a2.752 2.752 0 0 1 2.75 2.75v5.224H8.438a2.003 2.003 0 0 0-1.937-1.5c-1.103 0-2 .897-2 2s.897 2 2 2c.93 0 1.714-.638 1.937-1.5h3.063v6H8.438a2.003 2.003 0 0 0-1.937-1.5c-1.103 0-2 .897-2 2s.897 2 2 2c.93 0 1.714-.638 1.937-1.5h3.063v1.821a4.21 4.21 0 0 1-4.205 4.205ZM7.5 9.5c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1Zm0 7c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1Zm14.669-2.592c.543.673.831 1.468.831 2.3a3.67 3.67 0 0 1-1.957 3.231l-.2.107-.051.221a4.18 4.18 0 0 1-4.087 3.258A4.21 4.21 0 0 1 12.5 18.82v-3.821H18v-3.563a2.003 2.003 0 0 0 1.5-1.937c0-1.103-.897-2-2-2s-2 .897-2 2c0 .93.638 1.714 1.5 1.937v2.563h-4.5V3.776a2.752 2.752 0 0 1 2.75-2.75c1.419 0 2.616 1.115 2.726 2.539l.061.461h.463c1.508 0 2.409 1.41 2.409 2.772 0 .159-.11.812-.11.812l.309.174A3.68 3.68 0 0 1 23 10.98a3.63 3.63 0 0 1-.831 2.3l-.253.314.253.314ZM17.5 10.5c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1Z"
              />
            </svg>
          )}
        </div>
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
};

export default OpenAI;
