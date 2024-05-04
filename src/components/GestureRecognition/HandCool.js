import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

export const handCool = new GestureDescription("handCool");

// Pouce et index formant un rond
handCool.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
handCool.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);
handCool.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);

handCool.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
handCool.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);
handCool.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);

// Les autres doigts se lèvent vers le haut
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    handCool.addCurl(finger, FingerCurl.NoCurl, 1.0);
    handCool.addDirection(finger, FingerDirection.VerticalUp, 0.7);
}
