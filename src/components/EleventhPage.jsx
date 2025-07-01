import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react"

export const EleventhPage = () =>{
  const videoRef = useRef(null);
  useGSAP(()=>{
      const videoTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#outro-video-box',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    pin: true,
    onUpdate: (self) => {
      if (videoRef.current) {
            const video = videoRef.current;
            const progress = self.progress;
            const duration = video.duration || 0;
            
            // Video plays for first 60% of scroll, then stops
            if (progress <= 0.6) {
              const videoProgress = progress / 0.6; // Normalize to 0-1 for video
              if (duration > 0) {
                video.currentTime = videoProgress * duration;
              }
            } else {
              // Keep video at end after 60% scroll progress
              if (duration > 0) {
                video.currentTime = duration;
              }
            }
          }
        }
      }
    })

  if (videoRef.current) {
  videoRef.current.pause();
}




  videoTl
      .to({}, {
        duration: 0.6, // Video plays for 60% of the timeline
        ease: 'none'
      })
      .to('#outro-box', {
        opacity: 1, // Back to normal opacity
        duration: 0.2,
        ease: 'none'
      })
      .to('#outro-box', {
        scale: 1, // Back to 100% scale
        duration: 0.2,
        ease: 'none'
      });







  },[])
  return(
    <>
      <div id="outro-video-box" className="h-dvh w-full bg-lime-400 relative overflow-hidden">
        <video id="jason-vid" ref={videoRef} src="./videos/vid3outro-output.mp4" muted playsInline className="w-full h-full object-cover"></video>
        <div id="outro-box" className="size-[inherit] absolute bg-gradient-to-b from-[#111117] via-[#16141f] to-[#1b1828] top-0 flex items-center justify-center flex-col gap-10 opacity-0 scale-[120%]">
          <div>
            <img src="./images/brand-logo.png" alt="" className="h-32" />
          </div>
          <div className="w-1/3">
            <h1 className="bg-gradient-to-r from-[#b33467] via-[#f1576a] to-[#f78474] bg-clip-text text-transparent font-gta1 text-8xl font-black  text-center">COMING MAY 26 2026</h1>
          </div>
        </div>
      </div>
    </>
  )
} 