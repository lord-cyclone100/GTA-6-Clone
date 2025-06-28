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
    .to("#brand-logo",{
      scale:0.1,
      duration:2,
      top:'-56vh'
    },9.5)
    .fromTo('#parent-text',{
      y:20
    },{
      y:0,
      opacity:1,
      duration:2
    })
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
          
          <div id="parent-text" className="font-gta1 text-8xl font-black absolute top-60 opacity-0 flex flex-col items-center gap-8">
            <div id="" className="flex items-center justify-center flex-col bg-gradient-to-r from-[#ef8469] via-[#f4be7a] to-[#ef8469] bg-clip-text text-transparent">
              <h1 className="">COMING</h1>
              <h1 className=""> MAY 26</h1>
              <h1 className="">2026</h1>
            </div>
            <div className="flex gap-4">
              <img src="./images/ps5logo.png" alt="" className="h-6" />
              <img src="./images/xboxlogo.svg" alt="" className="h-6"  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




//  scale-2500 opacity-0