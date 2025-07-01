import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const SeventhPage = () => {


    const videoRef = useRef(null);







    const handleMouseEnter = () => {
    gsap.to('#grassrivers', {
      scale:1.01,
      rotation: 1, // Negative for left rotation
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to('#grassrivers', {
      scale:1,
      rotation: 0, // Back to original position
      duration: 0.3,
      ease: "power2.out"
    })
  }


  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade-priest',
        start:'top top',
        end:'bottom top',
        scrub:true
      }
    })
    tl.fromTo('#priest-text',{
      y:50
    },{
      y:-10,
      duration:20,
      ease:'none'
    })





    const videoTl = gsap.timeline({
      scrollTrigger: {
      trigger: '#priest-vid',
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

  videoTl.fromTo('#priest-speech',{
    y:'65%'
  },{
    y:'-140%',
    duration:2,
    ease:'none'
  })


  const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade3',
        start:'bottom bottom',
        end:'bottom center',
        scrub:true
      }
    })

    tl2.to('#fade3',{
      backgroundImage:"linear-gradient(to bottom right, #323953, #525973)",
      duration:2,
      ease:'none'
    })



    const tl3 = gsap.timeline({
      scrollTrigger:{
        trigger:'#grassrivers',
        start:'top 80%',
        end:'bottom 10%',
        scrub:true
      }
    })

    tl3.to('#hey-priest',{
      backgroundImage:"linear-gradient(to right, #2c4038, #4e5b4c)",
      duration:2,
      ease:'none'
    })



  },[])



  return(
    <>
      <div id="hola-people" className="w-full h-[408vh] relative bg-emerald-900">
        <img src="./images/priestbg.webp" alt="" id="fade-priest" className="absolute z-2" />
        <div id="overlay2" className="absolute w-[inherit] h-[138vh] bg-gradient-to-r from-[#404560]  to-transparent top-0 opacity-50 z-4"></div>
        {/* <div id="overlay6" className="absolute w-[inherit] h-[138vh] bg-gradient-to-b from-transparent  to-[#1a243c] top-0 opacity-50 z-3"></div> */}
        <img src="./images/priest02.webp" alt="" id="fade-priest" className="absolute top-0 z-2"/>
        <div id="priest-text" className="absolute flex flex-col gap-8 ml-44 top-[6%] z-8">
          <h1 className="font-gta3 text-7xl text-[#fff9cb] w-1/5">DRE'QUAN PRIEST</h1>
          <h3 className="font-gta2 text-[#ffff7e] text-4xl w-1/4">Only Raw... Records</h3>
          <p className="font-gta2 text-white text-2xl w-1/3">
            Dre'Quan was always more of a hustler than a gangster. Even when he was dealing on the streets to make ends meet, breaking into music was the goal.
          </p>
        </div>
        <div id="fade3" className="w-full h-[388vh] bg-[#292f45] absolute top-[20vh] z-6">
          
        </div>
        <div className="w-full">
          <div className="flex justify-between absolute z-7 top-240 w-full">
            <div className="flex flex-col gap-5">
              <div className="size-120 bg-purple-300 ml-61 mt-12">
                <img src="./images/priest-club.jpg" alt="" className="object-cover w-full h-full object-[68%_center]" />
              </div>
              <div id="priest-vid" className="size-181 bg-neutral-600 flex gap-10">
                <video src="./videos/priest-output.mp4" ref={videoRef} muted playsInline></video>
                <div id="cal-speech-bo" className="w-[30vw] h-140 overflow-hidd top-40 right-[-38vw] absolute">
                  <h1 id="priest-speech" className="font-gta3 text-[#fff9cb] text-7xl absolute bottom-[-65%]">"DANCERS ARE LIKE MY A&RS. IF THE RECORD'S A HIT, DJS GONNA BE SPINNIN' IT."</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-20 items-center">
              <div className="size-181 bg-amber-300 mt-[-8vh]">
                <img src="./images/priest-coat.jpg" alt="" className="object-cover w-full h-full object-[100%_center]" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div id="hey-priest" className="relative h-[280vh] w-full bg-gradient-to-tr from-[#323953] to-[#525973] overflow-x-hidden">
        
        <div className="w-110 h-[120vh] bg-lime-400 absolute top-10 left-[20%]">
          <img src="./images/priest-dance.jpg" className="object-cover w-full h-full object-[15%_center]" alt="" />
        </div>
        <div className="flex flex-col gap-40">
          <div className="size-110 bg-lime-700 absolute right-[18.5%] top-70">
            
            <img src="./images/priest-dj.jpg" className="object-cover w-full h-full object-[44%_center]" alt="" />
          </div>
          <div id="hola-people" className="w-1/2 flex flex-col gap-6 -right-30 top-200 absolute">
            <h3 className="font-gta2 text-[#ffff7e] text-4xl w-[16vw]">
              You're with the label now.
            </h3>
            <p className="font-gta2 text-white text-2xl w-[26vw]">
              Now that he's signed the Real Dimez, Dre'Quan's days of booking acts into Boobie's strip club might be numbered as he sets his sights on the Vice City scene.
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
          <img id="grassrivers" src="./images/grassrivers-postcard.svg" className="h-[98vh] absolute top-300 left-1/2 transform -translate-x-1/2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="" />
        {/* </div> */}
      </div>
    </>
  )
}

// hrrf8q1 hrrf8q3