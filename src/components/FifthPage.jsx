import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const FifthPage = () =>{
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade',
        start:'top top',
        end:'bottom top',
        scrub:true
      }
    })
    tl.fromTo('#cal-text',{
      y:50
    },{
      y:-10,
      duration:20,
      ease:'none'
    })
  },[])
  return(
    <>
      <div className="w-full h-dvh relative">
        <img src="./images/carlbg.webp" alt="" id="fade" className="absolute z-2" />
        <div id="overlay6" className="absolute w-[inherit] h-[138vh] bg-gradient-to-r from-[#131845]  to-transparent top-0 opacity-50 z-4"></div>
        {/* <div id="overlay6" className="absolute w-[inherit] h-[138vh] bg-gradient-to-b from-transparent  to-[#1a243c] top-0 opacity-50 z-3"></div> */}
        <img src="./images/carl02.webp" alt="" id="fade" className="absolute top-0 z-2"/>
        <div id="cal-text" className="absolute flex flex-col gap-8 ml-44 top-[36%] z-8">
          <h1 className="font-gta3 text-7xl text-[#fff9cb] w-1/5">CAL HAMPTON</h1>
          <h3 className="font-gta2 text-[#91dfec] text-4xl w-1/4">What if everything on the internet was true?</h3>
          <p className="font-gta2 text-white text-2xl w-1/4">
            Jason’s friend and a fellow associate of Brian’s, Cal feels safest hanging at home, snooping on Coast Guard comms with a few beers and some private browser tabs open.
          </p>
        </div>
        <div id="fade1" className="w-full h-[300vh] bg-[#1a243c] absolute top-[48vh] z-6">
          
        </div>
        <div className="w-full">
          <div className="flex justify-between absolute z-7 top-240 w-full">
            <div className="flex flex-col gap-5">
              <div className="size-120 bg-purple-300 ml-61 mt-12">
                <img src="./images/cal-rob.jpg" alt="" className="object-cover w-full h-full object-[50%_center]" />
              </div>
              <div className="size-181 bg-neutral-600">
                <video src="./videos/cal-output.mp4" autoPlay loop muted playsInline></video>
              </div>
            </div>
            <div className="size-181 bg-amber-300 mt-[-8vh]">
              <img src="./images/cal-golf.jpg" alt="" className="object-cover w-full h-full object-[100%_center]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}