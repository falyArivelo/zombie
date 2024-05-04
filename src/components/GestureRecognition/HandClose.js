import { Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const handClose = new GestureDescription("handClose");

// Pouce

handClose.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
handClose.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
handClose.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.5);

// 

for(let finger of [Finger.Middle, Finger.Pinky, Finger.Ring, Finger.Index]){
    handClose.addCurl(finger, FingerCurl.NoCurl, 1.0)
    handClose.addDirection(finger, FingerDirection.VerticalUp, 0.5)
}