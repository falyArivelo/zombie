import { animate, delay } from "framer-motion";
import Granim from "granim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

export function clipPathToRight(image_class, trigger, y, x, duration) {
    gsap.to(image_class, {
        scrollTrigger: {
            trigger: trigger,
            start: "top 60%", // Adjust as needed
            end: "top top",
            scrub: true, // This makes the y property change as you scroll
            onEnter: () => {
                gsap.to(image_class, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                });
            },
        },
        y: y, // This will decrease the y position as you scroll
        x: x,
        duration: duration,
        ease: "power1.out"

    });
}
// TEXT REVEAL ANIMATION

export function opacityTo1(image_class, trigger, duration) {
    gsap.to(image_class, {
        scrollTrigger: {
            trigger: trigger,
            start: "top center" // L'animation commence lorsque le haut du div atteint 80% du viewport
        },
        opacity: 1,
        duration: duration, // Durée de l'animation en secondes
        ease: "power1.out" // Type d'animation
    });
}

export function charByChar(image_class, trigger) {
    const split = new SplitType(image_class)
    gsap.set(image_class + " .char", { // Définition de la condition initiale
        opacity: 0
    });
    gsap.to(image_class + ' .char', {
        scrollTrigger: {
            trigger: trigger,
            start: "top center" // L'animation commence lorsque le haut du div atteint 80% du viewport
        },
        opacity: 1,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })

}

export function charByCharNoTrigger(image_class) {
    const split = new SplitType(image_class)
    gsap.set(image_class + " .char", { // Définition de la condition initiale
        opacity: 0
    });
    gsap.to(image_class + ' .char', {
        opacity: 1,
        stagger: 0.01,
        delay: 0.1,
        duration: .1
    })

}

export function onScrollTextToTop(className, trigger, y, x, duration) {
    gsap.set(className, {
        y: 0
    })

    gsap.to(className, {
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "top 70%", // Adjust as needed
            // Adjust as needed
            scrub: true, // This makes the y property change as you scroll
            onEnter: () => {
                console.log('enter')

                gsap.to(className, {
                    color: 'white'
                });
            },
            onLeave: () => {
                console.log('leave')
                gsap.to(className, {
                    color: 'black'
                });
            },
        },
        y: y, // This will decrease the y position as you scroll
        x: x,
        duration: duration,
        ease: "power1.out"

    });
}

export function increaseScale(className, trigger, final_scale, y, x, duration) {
    gsap.to(className, {
        duration: 3,
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "top top",
            scrub: true,
        },
        scale: final_scale,
        y: y, // This will decrease the y position as you scroll
        x: x, // Diminuez l'échelle de l'image
        duration: duration,
        ease: "power1.out"
    });
}

export function decreaseScale(className, trigger, final_scale, y, x, duration) {
    gsap.to(className, {
        duration: 3,
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "top top",
            scrub: true,
        },
        scale: final_scale,
        y: y, // This will decrease the y position as you scroll
        x: x, // Diminuez l'échelle de l'image
        duration: duration,
        ease: "power1.out"
    });
}

export function showSideMenu() {
    gsap.to(".sidemenu", {
        duration: 0.5,
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        ease: "power1.inOut"
    });
}

export function hideSideMenu() {
    gsap.to(".sidemenu", {
        duration: 0.5,
        clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)",
        ease: "power1.inOut"
    });
}

export function xy(className, trigger, y, x, duration, viewport) {
    gsap.to(className, {

        scrollTrigger: {
            trigger: trigger,
            start: "top " + viewport,
            end: "top top",
            scrub: true,
            onEnter: () => {
                charByCharNoTrigger(className + ' .paragraphe')
            }
        },
        y: y, // This will decrease the y position as you scroll
        x: x, // Diminuez l'échelle de l'image
        duration: duration,
        ease: "power1.out"
    });
}

export function granim_image(className, image) {

    var granimInstance = new Granim({
        element: className,
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        image: {
            source: image,
            blendingMode: 'multiply',
        },
        states: {
            "default-state": {
                gradients: [
                    ['#29323c', '#485563'],
                    ['#FF6B6B', '#556270'],
                    ['#80d3fe', '#7ea0c4'],
                    ['#f0ab51', '#eceba3']
                ],
                transitionSpeed: 7000
            }
        }
    });
}

// ------
export function clipPath_bottom_top(className, y, x, duration) {
    gsap.set(className, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    })
    gsap.to(className, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: y, // This will decrease the y position as you scroll
        x: x,
        duration: duration,
        ease: "power1.out"

    });
}


export function clipPath_bottom_top_Trigger(className, trigger, y, x, duration) {
    gsap.to(className, {
        duration: 3,
        scrollTrigger: {
            trigger: trigger,
            start: "top 80%",
            end: "top top",
            scrub: true,
            onEnter: () => {
                clipPath_bottom_top(className)
            }
        },
        y: y, // This will decrease the y position as you scroll
        x: x, // Diminuez l'échelle de l'image
        duration: duration,
        ease: "power1.out"
    });
}

export function change_text_color(className, trigger) {
    ScrollTrigger.create({
        trigger: className, // L'élément que vous surveillez
        start: "top bottom", // Démarre l'animation lorsque ".div1" entre en contact avec le bas du viewport
        end: "bottom top", // Se termine lorsque ".div1" quitte le contact avec le haut du viewport
        onEnter: () => {
            gsap.set('.logo', {
                color: 'black'
            })
            console.log("enter")

        },
        onLeave: () => {
            gsap.set('.logo', {
                color: 'white'
            })
            console.log("leave")

        }, // Change la couleur de #div2 en blanc lors de la sortie
    });

    // gsap.to(className, {
    //     scrollTrigger: {
    //         trigger: trigger,
    //         start: "top bottom",
    //         end: "bottom top",
    //         scrub: true,
    //         markers: true,
    //         onEnter: () => {
    //             gsap.to(className, {
    //                 color: 'black'
    //             })
    //         },
    //         onLeave: () => {
    //             gsap.set(className, {
    //                 color: 'white'
    //             })
    //         }
    //     },

    //     duration: .1,
    //     ease: "power1.inOut"
    // })

}

export function changeBG(className, trigger, duration) {
    gsap.to(className, {
        scrollTrigger: {
            trigger: trigger,
            start: "top bottom",
            end: "bottom 95%",
            scrub: true,
            markers: true,
            onEnter: () => {
                gsap.to(className, {
                    color: 'black'
                })
            },
            onLeave: () => {
                gsap.set(className, {
                    color: 'white'
                })
            }
        },

        backgroundColor:"white",
        duration: duration,
        ease: "power1.inOut"
    })

}

// ------------FRAMER MOTION
export const text_from_bottom = {
    initial: { opacity: 0, y: '100%' },
    animate: { opacity: 1, y: '0%' },
    exit: { opacity: 0, y: '100%', transition: { duration: 0.5 } },
};

export const textVariants = {
    opacity0: { opacity: 0, y: 50 },
    opacity1: { opacity: 1, y: 0 },

    from_bottom: { opacity: 0, y: '100%' },
    to_top: { opacity: 1, y: '0%' },
    exit_from_bottom: { opacity: 0, y: '100%', transition: { duration: 0.5 } }, // Accélérer la transition de sortie

};

export const imageVariantsIncline = {
    initial: { clipPath: 'polygon(5% 100%, 100% 95%, 100% 95%, 5% 100%)' },
    animate: { clipPath: 'polygon(5% 100%, 100% 95%, 95% 0, 0 5%)' },
    transition: { duration: .3, delay: 3.5 },
    exit: { clipPath: 'polygon(5% 100%, 100% 95%, 100% 95%, 5% 100%)', transition: { duration: 0.5 } },
}

export const imageVariants = {
    initial: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
    animate: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0, 0 0%)' },
    transition: { duration: .2 },
    exit: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', transition: { duration: 0.5 } },
}

export const opacity = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: .3 },
    exit: { opacity: 0, duration: .2 },

}

export const popUp = {
    initial: { scale: 0, opacity: 0 },// État initial (non visible)
    animate: { scale: 1, opacity: 1 },// Animation (pop up)
    exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } },

}
