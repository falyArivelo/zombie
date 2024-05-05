import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {atom,useAtom} from 'jotai'

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;
const SOCKET_SUBDOMAIN = process.env.REACT_APP_SUBDOMAIN;

export const socket = io(SOCKET_URL,{path: SOCKET_SUBDOMAIN});
export const charactersAtom = atom([]);
export const messagesAtom= atom([]);

export const SocketManager = () => {
  const [_characters, setCharacters] = useAtom(charactersAtom);
  const [_messages, setMessages]=useAtom(messagesAtom);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    function onConnect() {
      console.log("connected");
      // console.log(JSON.stringify(process.env))
      setConnected(true);
    }

    function onDisconnect() {
      console.log("disconnected");
      setConnected(false);
    }

    function onHello() {
      console.log("Hello");
    }

    function onCharacters(value) {
      if (connected) {
        setCharacters(value);
      }
    }

    // function onMessages(value) {
    //   console.log("Value Message: " + JSON.stringify(value));
    //   if (connected) {
    //     setMessages([..._messages, ...value]); // Merge the new messages with existing messages
    //     socket.off("forum", onMessages);
    //   }
    // }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("hello", onHello);
    socket.on("characters", onCharacters);
    // socket.on("forum",onMessages)
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello", onHello);
      socket.off("characters", onCharacters);
      // socket.off("forum",onMessages);

    };
  }, [connected, setCharacters]);

  useEffect(() => {
    if (!connected) {
      setCharacters([]);
    }
  }, [connected, setCharacters]);

  return null; // or return whatever UI you want here
};
