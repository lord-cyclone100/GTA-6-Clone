import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const NinthPage = () => {


    const videoRef = useRef(null);







    const handleMouseEnter = () => {
    gsap.to('#ambrosia', {
      scale:1.01,
      rotation: 1, // Negative for left rotation
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to('#ambrosia', {
      scale:1,
      rotation: 0, // Back to original position
      duration: 0.3,
      ease: "power2.out"
    })
  }


  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade-raul',
        start:'top top',
        end:'bottom top',
        scrub:true
      }
    })
    tl.fromTo('#raul-text',{
      y:50
    },{
      y:-10,
      duration:20,
      ease:'none'
    })





    const videoTl = gsap.timeline({
      scrollTrigger: {
      trigger: '#raul-vid',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        if (videoRef.current) {
          const video = videoRef.current;
          const progress = self.progress;
          const duration = video.duration || 0;
        
        // Set video currentTime based on scroll progress
          if (duration > 0) {
            video.currentTime = progress * duration;
          }
        }
      }
    }
  })

  if (videoRef.current) {
    videoRef.current.pause();
  }

  videoTl.fromTo('#raul-speech',{
    y:'65%'
  },{
    y:'-110%',
    duration:2,
    ease:'none'
  })


  const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade5',
        start:'bottom bottom',
        end:'bottom center',
        scrub:true
      }
    })

    tl2.to('#fade5',{
      backgroundImage:"linear-gradient(to bottom right, #2c4234, #223329)",
      duration:2,
      ease:'none'
    })



    const tl3 = gsap.timeline({
      scrollTrigger:{
        trigger:'#ambrosia',
        start:'top 80%',
        end:'bottom 10%',
        scrub:true
      }
    })

    tl3.to('#hey-raul',{
      backgroundImage:"linear-gradient(to right, #323953, #525970)",
      duration:2,
      ease:'none'
    })



  },[])



  return(
    <>
      <div id="hola-raul" className="w-full h-[408vh] relative bg-emerald-900">
        <img src="./images/raulbg.webp" alt="" id="fade-raul" className="absolute z-2" />
        <div id="overlay2" className="absolute w-[inherit] h-[138vh] bg-gradient-to-l from-[#72b946] via-transparent to-transparent top-0 opacity-50 z-4"></div>
        {/* <div id="overlay6" className="absolute w-[inherit] h-[138vh] bg-gradient-to-b from-transparent  to-[#1a243c] top-0 opacity-50 z-3"></div> */}
        <img src="./images/raul02.webp" alt="" id="fade-raul" className="absolute top-0 z-2"/>
        <div id="raul-text" className="absolute flex flex-col gap-8 ml-[65%] top-[6%] z-8">
          <h1 className="font-gta3 text-7xl text-[#fff9cb] w-1/4">RAUL BAUTISTA</h1>
          <h3 className="font-gta2 text-[#ffed95] text-4xl w-1/2">Experience counts.</h3>
          <p className="font-gta2 text-white text-2xl w-[26vw]">
            Confidence, charm, and cunning — Raul’s a seasoned bank robber always on the hunt for talent ready to take the risks that bring the biggest rewards.
          </p>
        </div>
        <div id="fade5" className="w-full h-[388vh] bg-[#223329] absolute top-[20vh] z-6">
          
        </div>
        <div className="w-full">
          <div className="flex flex-row-reverse justify-between absolute z-7 top-240 w-full">
            <div className="flex flex-col gap-5">
              <div className="size-120 bg-purple-300 mr-20 mt-12">
                <img src="./images/raul-fold.jpg" alt="" className="object-cover w-full h-full object-[60%_center]" />
              </div>
              <div id="raul-vid" className="size-181 bg-neutral-600 flex gap-10">
                <video src="./videos/raul-output.mp4" ref={videoRef} muted playsInline></video>
                <div id="cal-speech-bo" className="w-[30vw] h-140 top-40 left-[-38vw] absolute">
                  <h1 id="raul-speech" className="font-gta3 text-[#fff9cb] text-7xl absolute bottom-[-65%]">"LIFE IS FULL OF SURPRISES, MY FRIEND. I THINK WE'D ALL BE WISE TO REMEMBER THAT."</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-20 items-center">
              <div className="size-181 bg-amber-300 mt-[-8vh]">
                <img src="./images/raul-phone.jpg" alt="" className="object-cover w-full h-full object-[70%_center]" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div id="hey-raul" className="relative h-[280vh] w-full bg-gradient-to-tr from-[#2c4234] to-[#223329] overflow-x-hidden">
        
        <div className="w-110 h-[120vh] bg-lime-400 absolute top-10 right-[19%]">
          <img src="./images/raul-look.jpg" className="object-cover w-full h-full object-[44%_center]" alt="" />
        </div>
        <div className="flex flex-col gap-80">
          <div className="size-110 bg-lime-700 absolute left-[19.5%] top-70">
            
            <img src="./images/raul-drive.jpg" className="object-cover w-full h-full object-[60%_center]" alt="" />
          </div>
          <div id="hola-raul" className="w-1/2 flex flex-col gap-6 -right-30 top-200 absolute left-[19.5%]">
            <h3 className="font-gta2 text-[#ffed95] text-4xl w-[20vw]">
              A professional adapts.
            </h3>
            <p className="font-gta2 text-white text-2xl w-[26vw]">
              Raul's recklessness raises the stakes with every score. Sooner or later, his crew will have to double down or pull their chips from the table.
            </p>
          </div>
        </div>
        {/* <div className="absolute flex items-center gap-20 top-350 left-[50%] transform -translate-x-1/2">
          <div className="">
            <img src="./images/visit-leonida-logo.svg" className="h-30" alt="" />
          </div>
          <div className="font-gta2 text-white text-3xl w-[23vw]">
            <p>
              Tour a few of the must-see destinations across the sunshine state.
            </p>
          </div>
        </div> */}
        {/* <div className="absolute transform left-1/2 top-400 h-dvh bg-amber-300"> */}
          <img id="ambrosia" src="./images/ambrosia-postcard.svg" className="h-[98vh] absolute top-300 left-1/2 transform -translate-x-1/2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="" />
        {/* </div> */}
      </div>
    </>
  )
}