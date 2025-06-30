import { useGSAP } from "@gsap/react"
import "../css/FourthPage.css"
import gsap from "gsap"

export const FourthPage = () =>{
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.clip-skew',
        start:'top top',
        end:'bottom top',
        scrub:1,
        // pin:true,
        // markers:true
      }
    })
    tl.to('#motel',{
      y:-30,
      duration:2
    })
  },[])
  return(
    <>
      <div className="bg-gradient-to-tr from-[#111117] via-[#16141f] to-[#1b1828]">
        <div className="clip-skew overflow-hidden">
          <img src="./images/jason-and-lucia.jpg" id="motel" className="object-contain w-full h-full object-[60%_center] scale-110" alt="" />
        </div>
        <div id="hello" className="w-full h-[90vh] font-gta1 bg-gradient-to-r from-[#ef8469] via-[#f4be7a] to-[#ef8469] bg-clip-text text-transparent flex items-center justify-center gap-60">
          <h1 className="text-8xl font-black w-1/4" >Only in Leonida</h1>
          <p className="text-3xl w-1/5">
            When the sun fades and the neon glows, everyone has something to gain — and more to lose.
          </p>
        </div>
      </div>
    </>
  )
}