// 0. Install fingerpose npm install fingerpose
// 1. Add Use State
// 2. Import emojis and finger pose import * as fp from "fingerpose";
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen

///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from "react";
///////// NEW STUFF ADDED USE STATE


// import logo from './logo.svg';
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./HandDetection.css";
import { drawHand } from "./utilities";
import '@tensorflow/tfjs-backend-webgl'

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
///////// NEW STUFF IMPORTS

import { handOpen } from "./HandOpen";
import { handClose } from "./HandClose";
import { handCool } from "./HandCool";

import { handIndex } from "./HandIndex";

function HandDetection({ sendDataToParent, handArray }) {

  let [index, setIndex] = useState(0);

  let [isModel, setModel] = useState(false);

  var message = document.getElementById("message");
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory };
  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
    setModel(true);
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const increment = async () => {
    setIndex(index + 1);
    if (index === handArray.length - 1) { // close the component

      sendDataToParent(true)
    }
  }

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          //fp.Gestures.VictoryGesture,
          handOpen,
          handClose,
          handCool,
          handIndex
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          //           console.log(gesture.gestures);
          
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          const gesteDetecte = gesture.gestures[maxConfidence].name;
          console.log("=>", gesteDetecte)
          console.log(">", "+" + handArray[index])
          if (gesteDetecte === handArray[index]) {
            console.log("detecté " + gesture.gestures[maxConfidence].name);
            increment()
          }
          console.log(""+gesture.gestures[maxConfidence].name);
          //          setEmoji(gesture.gestures[maxConfidence].name);
          document.getElementById("message").innerHTML = gesture.gestures[maxConfidence].name
          console.log(emoji);
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => { runHandpose() }, []);

  return (
    <div className="App">
      <h1 id="message"></h1>
      {!isModel && <h1>Loaded</h1>}
      <h1 >You should do {index} {handArray[index]} </h1>
      <header className="App-header">
        <div className="App">
          <header className="App-header">
            <Webcam
              ref={webcamRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />

            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />
            {/* NEW STUFF */}
            {emoji !== null ? (
              <img
                src={images[emoji]}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 400,
                  bottom: 500,
                  right: 0,
                  textAlign: "center",
                  height: 100,
                }}
              />
            ) : (
              ""
            )}

            {/* NEW STUFF */}
          </header>
        </div>
      </header>
    </div>
  );
}

export default HandDetection;
