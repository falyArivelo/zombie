import { Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const handIndex = new GestureDescription("handIndex");

// Pouce

handIndex.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
handIndex.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.25);

// 

for(let finger of [Finger.Middle, Finger.Pinky, Finger.Ring]){
    handIndex.addCurl(finger, FingerCurl.NoCurl, 1.0)
    handIndex.addDirection(finger, FingerDirection.VerticalDown, 0.25)
}