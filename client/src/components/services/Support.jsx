import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Support = () => {
  const { user } = useSelector((state) => state.user);
  const supportBoxRef = useRef();
  const [supportBoxHid, setSupportBoxHid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, message: "test message 1 " },
  ]);

  const handleClickOutside = (event) => {
    if (supportBoxRef.current && !supportBoxRef.current.contains(event.target))
      setSupportBoxHid(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    if (message !== "") {
      setMessages([...messages, { id: messages.length + 1, message }]);
    }
    setMessage("");
    setLoading(false);
  };

  return (
    <div ref={supportBoxRef}>
      <div
        onClick={() => setSupportBoxHid(!supportBoxHid)}
        className="fixed right-5 bottom-5 z-50"
      >
        <i className="bi bi-headset text-4xl transition-all text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"></i>
      </div>

      <div
        id="chat-container"
        style={{ display: supportBoxHid ? "none" : "block" }}
        className="fixed bottom-12 right-12 z-40 w-96"
      >
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-[#f35a57] text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Support</p>
            <button
              id="close-chat"
              onClick={() => setSupportBoxHid(true)}
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400 bg-[#f35A]"
            >
              <i className="bi bi-x-lg text-lg font-bold text-white border rounded border-gray-300 px-2 py-1"></i>
            </button>
          </div>

          <div
            id="chatbox"
            className="p-4 min-h-[50vh] max-h-[65vh] overflow-y-auto"
          >
            <div className="mb-2 text-left w-full">
              <p className="bg-gray-200 text-md max-w-[85%] w-fit text-gray-700 rounded-lg py-2 px-4">
                Hello and thank you for reaching out to our support team!
              </p>
            </div>

            {messages?.map((msg, i) => {
              return (
                <div key={i}>
                  <div className="mb-2 text-right w-full flex gap-2 justify-end">
                    <p className="bg-blue-500 text-md max-w-[85%] w-fit text-white rounded-lg py-2 px-4">
                      {msg.message}
                    </p>
                    <img
                      src="https://readymadeui.com/profile_6.webp"
                      className="w-7 h-7 rounded-full shrink-0"
                    ></img>
                  </div>

                  <div className="mb-2 text-left text-md w-full">
                    <p className="bg-gray-200 max-w-[85%] w-fit text-gray-700 rounded-lg py-2 px-4">
                      We’ve received your message and will get back to you as
                      soon as possible. Our team is currently reviewing your
                      inquiry, and we aim to provide you with the assistance you
                      need shortly.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none bg-gray-100 dark:bg-gray-700 "
            />
            <button
              id="send-button"
              disabled={loading}
              onClick={handleSend}
              className="bg-[#f35a57] text-white px-4 py-2 rounded-r-md hover:bg-[#f35a57] transition duration-300"
              style={{ background: message === "" && "#ccc" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
