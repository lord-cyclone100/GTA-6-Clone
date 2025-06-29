import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const SecondPage = () => {

  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#second-page-container',
        start:'top top',
        end:'bottom 80%',
        scrub:1,
        pin:true,
        // markers:true
      }
    })
    tl.fromTo('#jason-sub-hero',{
      y:'100%',
    },{
      duration:100,
      y:'-44%',
      ease:'none'
    })
    .to('#jason-sub-hero',{
      // backgroundColor:'#16141f',
      duration:100,
      ease:'power3.inOut'
    },0)
    .to('#overlay2',{
      opacity:'95%',
      duration:100,
      delay:1
    },0)
  },[])
  return(
    <>
      <div id="second-page-container" className="w-full relative overflow-hidden h-screen">
        <div id="jason-hero" className="z-1 block max-w-[100%] h-auto absolute top-0">
          <img src="./images/jason1.webp" alt="" />
        </div>
        <div id="overlay2" className="absolute z-2 top-0 h-[inherit] w-[inherit] bg-[#16141f] opacity-0"></div>
        <div id="jason-sub-hero" className="w-full absolute bottom-0 z-3 transform  translate-y-full flex justify-center items-center gap-50">
          <div className="flex flex-col pl-50 gap-20 w-1/3">
            <div className="w-1/3">
              <h1 className="text-[#fff9cb] font-gta3 text-7xl font-medium">JASON DUVAL</h1>
            </div>
            <div className=" flex flex-col gap-6">
              <h3 className="w-[20vw] text-[#ffb0c4] font-gta2 text-4xl">Jason wants an easy life, but things just keep getting harder.</h3>
              <p className="w-[24vw] text-white font-gta2 text-[3.2vh] leading-8">
                Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners. It might be time to try something new.</p>
            </div>
          </div>
          <div id="jason-photo1" className="size-dvh bg-emerald-300 mt-160">
            <img src="./images/jason-car.jpg" className="object-cover w-full h-full object-[10%_center]" alt="" />
          </div>
          <div id="jason-photo2" className="h-[110vh] w-1/3 bg-emerald-300 absolute left-50 top-280">
            <img src="./images/jason-bike.jpg" className="object-cover w-full h-full object-[82%_center]" alt="" />
          </div>
          <div id="jason-photo3" className="size-100 absolute bg-amber-300 bottom-[-57vh] right-89">
            <img src="./images/jason-bar.jpg" className="object-cover w-full h-full object-[40%_center]" alt="" />
          </div>
 
        </div>
      </div>
      <div className="h-dvh w-full bg-sky-400">
        <h1>Hello</h1>
      </div>
    </>
  )
}

// #ef8469      #f4be7a