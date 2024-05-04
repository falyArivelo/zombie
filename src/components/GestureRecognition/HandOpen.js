import { Finger, FingerCurl, FingerDirection, GestureDescription} from "fingerpose";

export const handOpen = new GestureDescription("handOpen");

// Pouce

handOpen.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
handOpen.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
handOpen.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// 

for(let finger of [Finger.Middle, Finger.Pinky, Finger.Ring, Finger.Index]){
    handOpen.addCurl(finger, FingerCurl.FullCurl, 1.0)
    handOpen.addDirection(finger, FingerDirection.VerticalUp, 0.25)
}