import gsap from "gsap";
import { useRef, useState } from "react";
import { navbarNames, navbarPictures } from "../../constants/constants";
import { port } from "../App";
import { useGSAP } from "@gsap/react";
export const NavBar = () => {
  const[active, setIsActive] = useState(false);
  // const[state, setState] = useState(true);
  const navImgRef = useRef();

  const getName = (e) =>{
    e.target.style.color='#fff9cb';
    const idx = e.target.id;
    // setState(!state);
    // console.log(state);
    // console.log(idx);
    // console.log(navImgRef.current.className);
    navImgRef.current.src = `http://localhost:${port}${navbarPictures[idx]}`
    navImgRef.current.className = "object-cover w-full h-full"

    // gsap.killTweensOf(navImgRef.current);

    gsap.fromTo(navImgRef.current, {
      objectPosition: "20% center",
    },{
      objectPosition:'80% center',
      duration:20,
      ease:'none'
    })
  }

  const removeName = (e) =>{
    e.target.style.color='#fff';
    navImgRef.current.src = `http://localhost:${port}/images/nav-logo.svg`
    navImgRef.current.className = "object-cover h-[24vh]"
    gsap.to(navImgRef.current, {
      objectPosition: "20% center",
      duration: 20,
      ease: 'none'
    })
  }

  const handleSetActive = () => {
    setIsActive(!active);
    if(active){
      gsap.to('#nav-container',{
        x:'100%',
        duration:0.5,
        ease:'none',
      })
      gsap.to('#nav-pic',{
        opacity:'0%',
        duration:0.5,
        ease:'none'
      })
      // gsap.to('#nav-img',{
      //   x:-50,
      //   duration:10,
      //   ease:'none'
      // })
    }
    else{
      gsap.to('#nav-container',{
        x:'-100%',
        duration:0.5,
        ease:'none'
      })
      gsap.to('#nav-pic',{
        opacity:'100%',
        duration:0.5,
        ease:'none'
      })
      // gsap.to('#nav-img',{
      //   x:50,
      //   duration:0,
      //   ease:'none'
      // })
    }
  }
  // useGSAP(()=>{
  //   gsap.fromTo(navImgRef.current,{
  //     objectPosition:"20% center",
  //     duration:0,
  //     ease:'none'
  //   },{
  //     objectPosition:"80% center",
  //     duration:10,
  //     ease:'none'
  //   })
  // },[state])
  return(
    <>
      <nav className="w-full h-40 top-0 z-50 fixed flex items-center justify-between px-20">
        <div id="nav-pic" className={`h-[100vh] w-full bg-gradient-to-b from-[#296074] via-[#585e6f] to-[#4f3f4e] absolute top-0 left-[0%] z-54 flex items-center justify-center opacity-0 ${!active ? 'pointer-events-none' : ''}`}>
          <div className="w-1/2 flex h-[inherit] items-center justify-center">
            <img src="./images/nav-logo.svg" ref={navImgRef} id="nav-img" className="object-cover h-[24vh]" alt="" />
          </div>
          <div className="w-1/2"></div>
        </div>
        <div id="nav-container" className="h-[100vh] w-1/2 bg-gradient-to-tr from-[#111117] via-[#16141f] to-[#1b1828] absolute top-0 right-[-50%] z-55 flex flex-col text-white font-gta3 justify-center gap-2 text-6xl pl-16">
        <div className="w-[52%]">
          {
            navbarNames.map(({name,link,id})=>{
              return <a href={`#${link}`} key={name}><h1 id={id} className="cursor-pointer" onMouseEnter={getName} onMouseLeave={removeName}>{name}</h1></a>
            })
          }
        </div>
          
        </div>
        <a href="#home"><img src="./images/six-menu.svg" className="h-6 cursor-pointer z-52" alt="" /></a>
        <div className="flex gap-8 cursor-pointer z-60">
          <div className={`${active ? 'flex':'hidden'} flex-col gap-2 items-center justify-center`} onClick={handleSetActive}>
            <div className="w-7 h-[0.8vh] bg-white rotate-45 origin-center absolute"></div>
            <div className="w-7 h-[0.8vh] bg-white -rotate-45 origin-center"></div>
          </div>
          <div className={`${active ? 'hidden':'flex'} flex-col gap-2`} onClick={handleSetActive}>
            <div className="w-7 h-[0.8vh] bg-white"></div>
            <div className="w-7 h-[0.8vh] bg-white"></div>
          </div>
        </div>
      </nav>
    </>
  )
}