import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export const ThirdPage = () =>{
  const videoRef = useRef(null);
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'#lucia-page',
        start:'top top',
        end:'bottom 80%',
        scrub:1,
        pin:true,
        // markers:true
      }
    })
    tl.to('#overlay4',{
      opacity:'95%',
      duration:100,
      delay:1
    },0)
    .fromTo('#lucia-sub-hero',{
      y:'100%'
    },{
      duration:100,
      y:'0%',
      ease:"none",
    },0)
    .fromTo('#lucia-sub-hero',{
      y:'0%'
    },{
      duration:100,
      y:'-100%',
      ease:"none",
    },100)
    
    
    
    
    
    


    const videoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#lucia-video-box',
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

.to('#overlay5',{
  opacity:'90%',
  duration:30,
  // delay:2
  ease:'power2.inOut'
},40)
.fromTo('#lucia-quote',{
      y:'100%'
    },{
      y:'-100%',
      duration:60,
      ease:'none'
    },40)

videoTl.to('.lucia-pic',{
      y:-30,
      duration:2
    })

},[])









  return(
    <>
      <div id="lucia-page" className="min-h-screen w-full bg-sky-400 relative overflow-hidden">
        <div id="lucia-hero" className="block max-w-[100%] h-auto">
          <img src="./images/lucia1.webp" alt="" />
        </div>
        <div id="overlay4" className="absolute top-0 h-full w-full bg-[#16141f] opacity-0"></div>
        <div id="lucia-sub-hero" className="absolute w-[inherit] h-[250vh] opacity-90 top-[100%]">
          <div className="flex gap-30">
            <div className="size-dvh bg-emerald-300 mt-60">
              <img src="./images/lucia-punch.jpg" className="object-cover w-full h-full object-[88%_center]" alt="" />
            </div>
            <div className="flex flex-col gap-20">
              <div>
                <h1 className="text-[#fff9cb] font-gta3 text-7xl font-medium">
                  LUCIA CAMINOS
                </h1>
              </div>
              <div className=" flex flex-col gap-6">
                <h3 className="w-[20vw] text-[#ffb0c4] font-gta2 text-4xl">
                  Lucia’s father taught her to fight as soon as she could walk.
                </h3>
                <p className="w-[24vw] text-white font-gta2 text-[3.2vh] leading-8">
                  Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out. Lucia’s learned her lesson — only smart moves from here.
                </p>
              </div>
              <div className="size-100 absolute top-[108vh] right-78">
                <img src="./images/lucia-pool.jpg" className="object-cover w-full h-full object-[50%_center]" alt="" />
              </div>
              <p className="w-[24vw] text-white font-gta2 text-[3.2vh] leading-8 absolute bottom-70">
                  More than anything, Lucia wants the good life her mom has dreamed of since their days in Liberty City — but instead of half-baked fantasies, Lucia is prepared to take matters into her own hands.
                </p>
              <div className="h-[110vh] w-1/3 bg-purple-500 absolute left-63 top-249">
                <img src="./images/lucia-jail.jpg" className="object-cover w-full h-full object-[63%_center]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="lucia-video-box" className="w-full relative flex justify-center overflow-hidden">
        <div id="overlay5" className="w-full h-full bg-[#16141f] absolute opacity-0"></div>
        <video id="lucia-vid" ref={videoRef} src="./videos/lucia-car.mp4" muted playsInline className="w-full h-full object-cover"></video>
        <div id="lucia-quote" className="size-50 absolute top-[100%] w-full h-[235vh]">
          <div className="flex flex-col gap-30 pb-20">
            <div className="flex justify-center">
              <h1 className="text-[#fff9cb] font-gta3 text-7xl w-[60vw] text-center">"THE ONLY THING THAT MATTERS IS WHO YOU KNOW AND WHAT YOU GOT."</h1>
            </div>
            <div id="hello" className="flex justify-center gap-80">
              <p className="text-white font-gta2 text-2xl w-1/4 pt-30">
                Fresh out of prison and ready to change the odds in her favor, Lucia’s committed to her plan — no matter what it takes.
              </p>
              <h1 className="text-[#ffb0c4] font-gta2 text-4xl w-1/6">
                A life with Jason could be her way out.
              </h1>
            </div>
            <div className="flex justify-between">
              <div className="w-130 h-[120vh] ml-63 mt-[-4vh] overflow-hidden">
                <img src="./images/lucia-dance.jpg" className="object-cover w-full h-full object-[60%_center] lucia-pic" alt="" />
              </div>
              <div className="size-170 mt-[-16vh] overflow-hidden">
                <img src="./images/lucia-gun.jpg"className="object-cover w-full h-full object-[0%_center] lucia-pic" alt="" />
              </div>
              <div className="size-120 absolute top-[163vh] right-50 overflow-hidden">
                <img src="./images/lucia-bike.jpg" className="object-cover w-full h-full object-[12%_center] lucia-pic" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}