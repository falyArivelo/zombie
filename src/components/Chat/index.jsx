import React, { useEffect, useRef, useState } from "react";
import Platform from "../Platform";
import "./style.scss";

import { charByCharNoTrigger } from "../../motions/animation";
import { useGSAP } from "@gsap/react";
import { LuSend } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
// import { CgOptions } from "react-icons/cg";
import { SocketManager,socket,messagesAtom } from "../Sockets/SocketManager";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

const Index = () => {
  const chatRef = useRef(null);

  // const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [token, settoken] = useState("")
  const [chatMessages, setChatMessages] = useState([
    // { type: "me", text: "who are team Vittoria?" },
    // { type: "bot", text: "cyber punk Women wearing a mask." },
  ]);
  const [inputText, setInputText] = useState("");
  // const togglePopover = () => {
  //   setIsPopoverOpen(!isPopoverOpen);
  // };
const navigate = useNavigate();
  useEffect(() => {
    // Vérifie si le token existe dans localStorage au chargement initial du composant
    const tokenFromLocalStorage = localStorage.getItem('token');
    const userDataString = localStorage.getItem('user');
    const userDatas = JSON.parse(userDataString);

    if (tokenFromLocalStorage) {
      setUserData(userDatas)
      settoken(tokenFromLocalStorage)
    } else{
      navigate("/auth");
    }


  }, []);

  useEffect(() => {
    socket.on("forum", (data) => {
      console.log("Received characters:", data);
      setChatMessages(data); // Update charactersAtom with received data
    });

    return () => {
      socket.off("characters"); // Clean up event listener
    };
  }, [setChatMessages]);

  const handleSend = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (inputText.trim() !== "") {
      setChatMessages([...chatMessages, { email: userData.userMail, message: inputText }]);
      console.log(JSON.stringify(chatMessages))
      setInputText(""); // Réinitialise le champ de texte après l'envoi
      console.log({message:inputText,email: userData.userMail})
      socket.emit("message",{message:inputText,email: userData.userMail})
    }
  };

  useGSAP(() => {
    charByCharNoTrigger(".bot_presentation");
  });
  return (
    <div className="chat">
      <div className="intern">
        <div className="illustrations">
      <SocketManager />

          <Platform email={userData.userMail} />
        </div>
        <div className="ask">
          <div className="bot_presentation">You can Ask Everything here</div>
          <div ref={chatRef} className="interation">
            {/* {messages.map((message, index) =>
              message.email === userData.userMail ? (
                <div key={index} className="mymessage">
                  <div className="me">{message.message}</div>
                </div>
              ) : (
                <div className="bot" key={index}>
                  <div className="user-container">
                    <FaRegUserCircle size={20} color="white" />
                    <p className="user">{message.email}</p>
                  </div>
                  <p>{message.message}</p>
                </div>
              )
            )} */}
            {chatMessages.map((message, index) =>
              message.email === userData.userMail ? (
                <div key={index} className="mymessage">
                  <div className="me">{message.message}</div>
                </div>
              ) : (
                <div className="bot" key={index}>
                  <div className="user-container">
                    <FaRegUserCircle size={20} color="white" />
                    <p className="user">{message.email}</p>
                  </div>
                  <p>{message.message}</p>
                </div>
              )
            )}
          </div>
          <div className="input_question">

            {/* <button className="action" onClick={togglePopover}>
              <CgOptions size={25} color="black" />
            </button>
            {isPopoverOpen && (
              <div className="popover-content">
                <button className="popover-button">Wave</button>
                <button className="popover-button">Dance</button>
              </div>
            )} */}
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
