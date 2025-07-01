import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export const SecondPage = () => {
  const videoRef = useRef(null);

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
      ease:"none",
    })
    // .to('#jason-sub-hero',{
    //   // backgroundColor:'#16141f',
    //   duration:100,
    //   ease:'power3.inOut'
    // },0)
    .to('#overlay2',{
      opacity:'95%',
      duration:100,
      delay:1
    },0)
    .from('#jason-photo1',{
      y:50,
      duration:5
    },0)




    const videoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#jason-video-box',
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



  videoTl.to({}, {
  duration: 40, // This represents the "video playing" portion of the scroll
  ease: 'none'
})

    .to('#overlay3',{
      opacity:'90%',
      duration:30,
      // delay:2
      ease:'none'
    },40)

    .fromTo('#jason-quote',{
      y:'100%'
    },{
      y:'-100%',
      duration:60,
      ease:'none'
    },40)





    


    // videoRef.current.onloadedmetadata = () => {
    //   videoTl.to(videoRef.current,{
    //     currentTime:videoRef.current.duration
    //   })
    // }

    





  },[])
  return(
    <>
      <div id="second-page-container" className="w-full relative overflow-hidden min-h-screen">
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
      <div id="jason-video-box" className="w-full relative flex justify-center overflow-hidden">
        <div id="overlay3" className="w-full h-full bg-[#16141f] absolute opacity-0"></div>
        <video id="jason-vid" ref={videoRef} src="./videos/jason-loot.mp4" muted playsInline className="w-full h-full object-cover"></video>
        <div id="jason-quote" className="size-50 absolute top-[100%] w-full h-auto">
          <div className="flex flex-col gap-30 pb-20">
            <h1 className="text-[#fff9cb] font-gta3 text-6xl w-1/2 pl-50">"IF ANYTHING HAPPENS, I'M RIGHT BEHIND YOU."</h1>
            <h1 className="text-[#ffb0c4] font-gta2 text-4xl w-1/3 pl-50">Another day in paradise, right?</h1>
            <div className="size-170 bg-amber-200">
              <img src="./images/jason-gun.jpg" className="object-cover w-full h-full object-[25%_center]" alt="" />
            </div>
            <div className="size-120 bg-amber-200 ml-50 mt-[-14vh]">
              <img src="./images/jason-fish.jpg" className="object-cover w-full h-full object-[18%_center]" alt="" />
            </div>
            <div className="w-150 h-[120vh] bg-amber-200 ml-50 mt-[-14vh] absolute top-170 right-43">
              <img src="./images/jason-phone.jpg" className="object-cover w-full h-full object-[15%_center]" alt="" />
            </div>
            <p className="text-white font-gta2 text-2xl w-1/4 absolute right-80 top-70">
              Meeting Lucia could be the best or worst thing to ever happen to him. Jason knows how he'd like it to turn out but right now, it's hard to tell.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

// #ef8469      #f4be7a