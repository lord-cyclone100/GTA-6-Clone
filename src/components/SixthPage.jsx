import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const SixthPage = () => {


    const videoRef = useRef(null);







    const handleMouseEnter = () => {
    gsap.to('#leonida-keys', {
      scale:1.01,
      rotation: 1, // Negative for left rotation
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    gsap.to('#leonida-keys', {
      scale:1,
      rotation: 0, // Back to original position
      duration: 0.3,
      ease: "power2.out"
    })
  }


  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade-ike',
        start:'top top',
        end:'bottom top',
        scrub:true
      }
    })
    tl.fromTo('#ike-text',{
      y:50
    },{
      y:-10,
      duration:20,
      ease:'none'
    })





    const videoTl = gsap.timeline({
      scrollTrigger: {
      trigger: '#ike-vid',
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

  videoTl.fromTo('#ike-speech',{
    y:'65%'
  },{
    y:'-140%',
    duration:2,
    ease:'none'
  })


  const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:'#fade2',
        start:'bottom bottom',
        end:'bottom center',
        scrub:true
      }
    })

    tl2.to('#fade2',{
      backgroundImage:"linear-gradient(to bottom right, #323953, #525973)",
      duration:2,
      ease:'none'
    })



    const tl3 = gsap.timeline({
      scrollTrigger:{
        trigger:'#leonida-keys',
        start:'top 80%',
        end:'bottom 10%',
        scrub:true
      }
    })

    tl3.to('#hey-ike',{
      backgroundImage:"linear-gradient(to right, #2a375a, #2f6780)",
      duration:2,
      ease:'none'
    })



  },[])



  return(
    <>
      <div id="ike-page" className="w-full h-[408vh] relative bg-emerald-900">
        <img src="./images/ikebg.webp" alt="" id="fade-ike" className="absolute z-2" />
        <div id="overlay2" className="absolute w-[inherit] h-[138vh] bg-gradient-to-r from-[#404560]  to-transparent top-0 opacity-50 z-4"></div>
        {/* <div id="overlay6" className="absolute w-[inherit] h-[138vh] bg-gradient-to-b from-transparent  to-[#1a243c] top-0 opacity-50 z-3"></div> */}
        <img src="./images/ike02.webp" alt="" id="fad-ike" className="absolute top-0 z-2"/>
        <div id="ike-text" className="absolute flex flex-col gap-8 ml-44 top-[6%] z-8">
          <h1 className="font-gta3 text-7xl text-[#fff9cb] w-[18vw]">BOOBIE IKE</h1>
          <h3 className="font-gta2 text-[#ffff7e] text-4xl w-[20vw]">It's all about heart — the Jack of Hearts.</h3>
          <p className="font-gta2 text-white text-2xl w-[25vw]">
            Boobie is a local Vice City legend — and acts like it. One of the few to transform his time in the streets into a legitimate empire spanning real estate, a strip club, and a recording studio — Boobie's all smiles until it's time to talk business.
          </p>
        </div>
        <div id="fade2" className="w-full h-[388vh] bg-[#292f45] absolute top-[20vh] z-6">
          
        </div>
        <div className="w-full">
          <div className="flex justify-between absolute z-7 top-240 w-full">
            <div className="flex flex-col gap-5">
              <div className="size-120 bg-purple-300 ml-61 mt-12">
                <img src="./images/ike-cash.jpg" alt="" className="object-cover w-full h-full object-[50%_center]" />
              </div>
              <div id="ike-vid" className="size-181 bg-neutral-600 flex gap-10">
                <video src="./videos/ike-output.mp4" ref={videoRef} muted playsInline></video>
                <div id="cal-speech-bo" className="w-[30vw] h-140 overflow-hidd top-40 right-[-38vw] absolute">
                  <h1 id="ike-speech" className="font-gta3 text-[#fff9cb] text-7xl absolute bottom-[-65%]">"THE CLUB MONEY PAY FOR THE STUDIO, AND THE DRUG MONEY PAY FOR IT ALL."</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-20 items-center">
              <div className="size-181 bg-amber-300 mt-[-8vh]">
                <img src="./images/ike-glass.jpg" alt="" className="object-cover w-full h-full object-[20%_center]" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div id="hey-ike" className="relative h-[280vh] w-full bg-gradient-to-tr from-[#323953] to-[#525973] overflow-x-hidden">
        
        <div className="w-110 h-[120vh] bg-lime-400 absolute top-10 left-[20%]">
          <img src="./images/ike-phone.jpg" className="object-cover w-full h-full object-[29%_center]" alt="" />
        </div>
        <div className="flex flex-col gap-40">
          <div className="size-110 bg-lime-700 absolute right-[18.5%] top-70">
            
            <img src="./images/ike-club.jpg" className="object-cover w-full h-full object-[16%_center]" alt="" />
          </div>
          <div id="ike-page" className="w-1/2 flex flex-col gap-6 -right-30 top-200 absolute">
            <h3 className="font-gta2 text-[#ffff7e] text-4xl w-[20vw]">
              Top quality cuts.
            </h3>
            <p className="font-gta2 text-white text-2xl w-[24vw]">
              Boobie might seem like he's just out for himself, but it's his partnership with the young aspiring music mogul Dre'Quan for Only Raw Records that he's most invested in — now they just need a hit.
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
          <img id="leonida-keys" src="./images/leonida-keys-postcard.svg" className="h-[98vh] absolute top-300 left-1/2 transform -translate-x-1/2 z-70" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt="" />
        {/* </div> */}
      </div>
    </>
  )
}