import { useState } from "react";
import HandDetection from "../GestureRecognition/HandDetection";
import "./Geste.css";

export default function Geste() {
    let sequenceGeste = ["handCool", "handClose", "handIndex", "handOpen"];
    let [index,setIndex] = useState(0);
    let [valide, setValide] = useState(false);

    let handleGesteValidation = (data) => {
        console.log(data);
        if(data === true){
            setValide(data)
        }
    }

    return (
        <div>
            <div className="geste">
                <HandDetection handArray={sequenceGeste} sendDataToParent={handleGesteValidation} />
            </div>
        </div>
    );
}
