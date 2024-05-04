import React, { useEffect, useRef, useState } from "react";
import Platform from "../Platform";
import "./style.scss";

import { charByCharNoTrigger } from "../../motions/animation";
import { useGSAP } from "@gsap/react";
import { LuSend } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
const Index = () => {
  const chatRef = useRef(null);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: "me", text: "who are team Vittoria?" },
    { type: "bot", text: "cyber punk Women wearing a mask." },
  ]);
  const [inputText, setInputText] = useState("");

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleSend = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (inputText.trim() !== "") {
      setChatMessages([...chatMessages, { type: "me", text: inputText }]);
      setInputText(""); // Réinitialise le champ de texte après l'envoi
    }
  };

  useGSAP(() => {
    charByCharNoTrigger(".bot_presentation");
  });
  return (
    <div className="chat">
      <div className="intern">
        <div className="illustrations">
          <Platform />
        </div>
        <div className="ask">
          <div className="bot_presentation">You can Ask Everything here</div>
          <div ref={chatRef} className="interation">
            {chatMessages.map((message, index) =>
              message.type === "me" ? (
                <div key={index} className="mymessage">
                  <div className="me">{message.text}</div>
                </div>
              ) : (
                <div className="bot" key={index}>
                  <div className="user-container">
                    <FaRegUserCircle size={20} color="white" />
                    <p className="user">Utilisateur</p>
                  </div>
                  <p>{message.text}</p>
                </div>
              )
            )}
          </div>
          <div className="input_question">

            <button className="action" onClick={togglePopover}>
              <CgOptions size={25} color="black" />
            </button>
            {isPopoverOpen && (
              <div className="popover-content">
                <button className="popover-button">Wave</button>
                <button className="popover-button">Dance</button>
              </div>
            )}
            <form onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Ask here"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button type="submit" className="send">
                <LuSend size={25} color="black" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
