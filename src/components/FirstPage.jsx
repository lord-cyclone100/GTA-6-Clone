import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useEffect, useState } from "react";

export const FirstPage = () =>{

  useGSAP(()=>{
    gsap.to('#overlay',{
      opacity:0,
      duration:1.5,
      ease:'power3.out',
    })
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#parent-container',
        start:'top top',
        end:'bottom top',
        scrub:1.5,
        pin:true
      }
    })
    tl.to('#logo-container',{
      opacity:0,
      duration:3
    }).to('#hero-section',{
      scale:1.1,
      duration:3.5
    },0).to('#hero-section',{
      opacity:0,
      duration:5
    },3.5).to('#masked-logo',{
      scale:1,
      duration:5,
      opacity:1
    },3.5)
    .to('#brand-background',{
      opacity:0,
      duration:1
    },8.5)
    .to("#brand-logo",{
      opacity:1,
      duration:1
    },8.5)
    .to("#masked-logo",{
      backgroundColor:"black",
      duration:0
    },8.5)
  },[])
 
  return(
    <>
      <div id="parent-container" className="h-dvh w-full relative flex items-center justify-center overflow-hidden">
        <div id="overlay" className="h-[inherit] w-[inherit] absolute bg-black z-3"></div>
        <div id="hero-section" className="h-[inherit] w-[inherit] scale-130" >
          <div id="hero-container" className="absolute z-1">
            <img src="./images/background.webp" alt="" />
          </div>
          <div id="logo-container" className="absolute z-2">
            <img src="./images/logo.webp" alt="" />
          </div>
        </div>
        <div id="masked-logo" className="absolute h-[inherit] w-[inherit] flex justify-center z-6 scale-9000"> 
          <img src="./images/brand-logo2.png" alt="" id="brand-logo" className="absolute z-5 scale-30 top-[-29vh] left-[-3vh] opacity-0" />
          <img src="./images/logo6.svg" alt="" id="brand-background" className="absolute z-4" />
        </div>
      </div>
    </>
  )
}




//  scale-2500 opacity-0