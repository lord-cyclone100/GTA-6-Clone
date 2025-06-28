import { useEffect } from 'react'
import './App.css'
import Lenis from 'lenis'
import { FirstPage } from './components/FirstPage';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { SecondPage } from './components/SecondPage';

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <FirstPage/>
      <SecondPage/>
    </>
  )
}

