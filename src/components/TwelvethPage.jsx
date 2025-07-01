import { footerDetails } from "../../constants/constants"

export const TwelvethPage = () => {
  return(
    <>
      <div className="text-white w-[100%] h-[50vh] bg-gradient-to-t from-[#111117] via-[#16141f] to-[#1b1828] flex">
        <div className="size-full flex items-center flex-col gap-8 mt-0 font-gta1">
          <div className="flex items-center gap-8 text-2xl">
            <p className="">Wishlist Now</p>
            <button className="rounded-4xl bg-[#2a2a30]">
              <img src="./images/ps5logo.png" className="h-4 my-4 mx-6" alt="" />
            </button>
            <button className="rounded-3xl bg-[#2a2a30]">
              <img src="./images/xboxlogo.svg" className="h-5 my-3 mx-6" alt="" />
            </button>
          </div>
          <div className="w-[60vw] h-24 rounded-[500px] border-1 border-[#ffffff30] flex items-center justify-center gap-8 mx-20">
            <img src="./images/rockstar-games-logo.svg" alt="" className="h-6" />
            <h6 className=" font-bold text-[110%]">GET ROCKSTAR PROPAGANDA</h6>
            <p className=" w-1/2 text-[82%]">Get the latest game announcements, updates on special events and offers, and much more from Rockstar Games</p>
          </div>
          <div className="flex text-[85%] gap-8 text-[#ffffff80]">
            {
              footerDetails.map((item,idx)=>(
                <p key={idx}>{item}</p>
              ))
            }
          </div>
          <div className="flex gap-8 items-center justify-center">
            <img src="./images/rp.svg" alt="" />
            <p className="w-[30vw]">
              May contain content inappropriate for children. Visit <u>esrb.org</u> for rating information.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}