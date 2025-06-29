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









  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <FirstPage/>
          <SecondPage/>
          <ThirdPage/>
          <FourthPage/>
          <FifthPage/>
        </div>
      </div>
    </>
  )
}

