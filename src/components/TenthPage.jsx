import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export const TenthPage = () =>{
  const videoRef = useRef(null);







    const handleMouseEnter = () => {
    gsap.to('#kalaga', {
      scale:1.01,
      rotation: 1, // Negative for left rotation
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to('#kalaga', {
      scale:1,
      rotation: 0, // Back to original position
      duration: 0.3,
      ease: "power2.out"
    })
  }










  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade-brian',
        start:'top top',
        end:'bottom top',
        scrub:true
      }
    })
    tl.fromTo('#brian-text',{
      y:50
    },{
      y:-10,
      duration:20,
      ease:'none'
    })

    
    const videoTl = gsap.timeline({
      scrollTrigger: {
      trigger: '#brian-vid',
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

  videoTl.fromTo('#brian-speech',{
    y:'65%'
  },{
    y:'-120%',
    duration:2,
    ease:'none'
  })

  const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade6',
        start:'bottom bottom',
        end:'bottom center',
        scrub:true
      }
    })

    tl2.to('#fade6',{
      backgroundImage:"linear-gradient(to bottom right, #28375c, #274a6e)",
      duration:2,
      ease:'none'
    })

    const tl3 = gsap.timeline({
      scrollTrigger:{
        trigger:'#kalaga',
        start:'top 80%',
        end:'bottom 10%',
        scrub:true
      }
    })

    tl3.to('#hey-brian',{
      backgroundImage:"linear-gradient(to right, #2a3f3b, #455f52)",
      duration:2,
      ease:'none'
    })

  },[])
  return(
    <>
      <div id="hola" className="w-full h-[408vh] relative bg-emerald-900">
        <img src="./images/brianbg.webp" alt="" id="fade-brian" className="absolute z-2" />
        <div id="overlay6" className="absolute w-[inherit] h-[138vh] bg-gradient-to-r from-[#131845]  to-transparent top-0 opacity-50 z-4"></div>
        {/* <div id="overlay6" className="absolute w-[inherit] h-[138vh] bg-gradient-to-b from-transparent  to-[#1a243c] top-0 opacity-50 z-3"></div> */}
        <img src="./images/brian02.webp" alt="" id="fade-brian" className="absolute top-0 z-2"/>
        <div id="brian-text" className="absolute flex flex-col gap-8 ml-44 top-[6%] z-8">
          <h1 className="font-gta3 text-7xl text-[#fff9cb] w-1/5">BRIAN HEDER</h1>
          <h3 className="font-gta2 text-[#91dfec] text-4xl w-[20vw]">Nothing better than a Mudslide at sunset.</h3>
          <p className="font-gta2 text-white text-2xl w-[26vw]">
            Brian's a classic drug runner from the golden age of smuggling in the Keys. Still moving product through his boat yard with his third wife, Lori, Brian's been around long enough to let others do his dirty work.
          </p>
        </div>
        <div id="fade6" className="w-full h-[388vh] bg-[#1a243c] absolute top-[20vh] z-6">
          
        </div>
        <div className="w-full">
          <div className="flex justify-between absolute z-7 top-240 w-full">
            <div className="flex flex-col gap-5">
              <div className="size-120 bg-purple-300 ml-61 mt-12">
                <img src="./images/brian-box.jpg" alt="" className="object-cover w-full h-full object-[50%_center]" />
              </div>
              <div id="brian-vid" className="size-181 bg-neutral-600 flex gap-10">
                <video src="./videos/brian-output.mp4" ref={videoRef} muted playsInline></video>
                <div id="brian-speech-box" className="w-[30vw] h-140 overflow-hidd top-40 right-[-38vw] absolute">
                  <h1 id="brian-speech" className="font-gta3 text-[#fff9cb] text-7xl absolute bottom-[-65%]">"I HAULED SO MUCH GRASS IN THAT PLANE, I COULD MAKE THE STATE OF LEONIDA LEVITATE."</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-20 items-center">
              <div className="size-181 bg-amber-300 mt-[-8vh]">
                <img src="./images/brian-car.jpg" alt="" className="object-cover w-full h-full object-[100%_center]" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div id="hey-brian" className="relative h-[290vh] w-full bg-gradient-to-tr from-[#28375c] to-[#274a6e] overflow-x-hidden">
        
        <div className="w-110 h-[120vh] bg-lime-400 absolute top-10 left-[20%]">
          <img src="./images/brian-stand.jpg" className="object-cover w-full h-full object-[58%_center]" alt="" />
        </div>
        <div className="flex flex-col gap-40">
          <div className="size-110 bg-lime-700 absolute right-[18.5%] top-70">
            
            <img src="./images/brian-chat.jpg" className="object-cover w-full h-full object-[16%_center]" alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-6 -right-30 top-200 absolute">
            <h3 className="font-gta2 text-[#91dfec] text-4xl w-[20vw]">
              Looks like a Leonida beach bum — moves like a great white shark.
            </h3>
            <p className="font-gta2 text-white text-2xl w-[26vw]">
              Brian’s letting Jason live rent-free at one of his properties — so long as he helps with local shakedowns, and stops by for Lori’s sangria once in a while.
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
          <img id="kalaga" src="./images/kalaga-postcard.svg" className="h-[98vh] absolute top-320 left-1/2 transform -translate-x-1/2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="" />
        {/* </div> */}
      </div>
    </>
  )
}