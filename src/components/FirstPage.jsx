import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";

export const FirstPage = () =>{

  useGSAP(()=>{
    gsap.to('#overlay',{
      opacity:0,
      duration:1.5,
      ease:'none',
    })
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#home-page',
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
      duration:10,
      opacity:1
    },3.5)
    .to('#brand-background',{
      opacity:0,
      duration:1,
      ease:'none'
    },13.5)
    .to("#brand-logo",{
      opacity:1,
      duration:1
    },13.5)
    .to("#masked-logo",{
      backgroundColor:"#16141f",
      duration:0,
    },13.5)
    .to("#brand-logo",{
      scale:0.1,
      duration:2,
      top:'-56vh',
      ease:'none'
    },14.5)
    .fromTo('#parent-text',{
      y:20
    },{
      y:0,
      opacity:1,
      duration:2
    },16.5)
    .to('#brand-logo',{
      opacity:0,
      duration:5
    },18.5)
    .to('#parent-text',{
      opacity:0,
      duration:4.5
    },18.5)
    .to('#para-text',{
      opacity:1,
      scale:1,
      duration:5
    },23)









 
  },[])
 
  return(
    <>
      {/* <NavBar/> */}
      <div id="home-page" className="h-dvh w-1/2 md:w-full relative flex items-center justify-center overflow-hidden">
        <div id="overlay" className="h-[inherit] w-[inherit] absolute bg-black z-4"></div>
        <div id="hero-section" className="h-[inherit] w-[inherit] scale-130" >
          <div id="hero-container" className="absolute z-2">
            <img src="./images/background.webp" alt="" />
          </div>
          <div id="logo-container" className="absolute z-3">
            <img src="./images/logo.webp" alt="" />
          </div>
        </div>
        <div id="masked-logo" className="absolute h-[inherit] w-[inherit] flex justify-center z-7 scale-9000 "> 
          <img src="./images/brand-logo2.png" alt="" id="brand-logo" className="absolute z-6 scale-30 top-[-29vh] left-[-3vh] opacity-0" />
          <img src="./images/logo6.svg" alt="" id="brand-background" className="absolute z-5" />
          
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
          <div id="para-text" className="flex justify-center flex-col gap-10 mx-50 bg-gradient-to-r from-[#b33467] via-[#f1576a] to-[#f78474] bg-clip-text text-transparent opacity-0 z-8 scale-130">
            <h1 className="font-gta2 text-6xl font-bold">Vice City, USA.</h1>
            <p className="font-gta2 text-4xl">
              Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they want to make it out alive.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}




//  scale-2500 opacity-0