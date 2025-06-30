import { useEffect } from 'react'
import './App.css'
import Lenis from 'lenis'
import { FirstPage } from './components/FirstPage';
import { ScrollTrigger, ScrollSmoother, CustomEase } from 'gsap/all';
import gsap from 'gsap';
import { SecondPage } from './components/SecondPage';
import { ThirdPage } from './components/ThirdPage';
import { FourthPage } from './components/FourthPage';
import { FifthPage } from './components/FifthPage';
import { useGSAP } from '@gsap/react';
import { SixthPage } from './components/SixthPage';
import { SeventhPage } from './components/SeventhPage';

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,CustomEase);

export const App = () => {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);






  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,        // Slower scroll duration (default is 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smoother easing
      smooth: true,
      smoothTouch: false,   // Disable on touch devices for better performance
      wheelMultiplier: 0.7, // Reduce scroll sensitivity (default is 1)
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);






  // useEffect(()=>{
  //   ScrollSmoother.create({
  //     wrapper: "#smooth-wrapper",
  //     content: "#smooth-content",
  //     smooth: 1,   // How smooth the scrolling is (0-3)
  //     // effects: true, // Enable data-speed effects
  //     // smoothTouch: 0.1, // Much less smooth on touch devices
  //   });
  // },[])




  // const col = "linear-gradient(to right, #111117, #16141f, #1b1828)"

  // useGSAP(() => {
  //   // Create background color transitions
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#smooth-wrapper",
  //       start: "top top",
  //       end: "bottom bottom",
  //       // scrub: true,
  //     }
  //   });

  //   // Define color transitions for each page
  //   tl.to("#smooth-wrapper", {
  //     backgroundColor: "#ffffff", // gray-800 for FirstPage
  //     duration: 1,
  //     ease: "none"
  //   })
  //   .to("#smooth-wrapper", {
  //     backgroundColor: "#7c2d12", // orange-800 for SecondPage
  //     duration: 1,
  //     ease: "none"
  //   })
  //   .to("#smooth-wrapper", {
  //     backgroundColor: "#581c87", // purple-800 for ThirdPage
  //     duration: 1,
  //     ease: "none"
  //   })
  //   .to("#smooth-wrapper", {
  //     backgroundColor: "#1e40af", // blue-700 for FourthPage
  //     duration: 1,
  //     ease: "none"
  //   })
  //   .to("#smooth-wrapper", {
  //     backgroundColor: col, // red-600 for FifthPage
  //     duration: 1,
  //     ease: "none"
  //   });

  // },[]);






  return (
    <>
      <div id="smooth-wrapper" className='bg-white'>
        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>
        <FourthPage/>
        <FifthPage/>
        <SixthPage/>
        <SeventhPage/>
      </div>
    </>
  )
}

