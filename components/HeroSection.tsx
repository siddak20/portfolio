import Image from "next/image";
import {reactjs, tailwind} from "./assets"
import {Modelman} from "./canvas";
const HeroSection = () => {
  const logo=[reactjs,tailwind,reactjs,tailwind,reactjs];
  return (
    <section id="home" className="w-full min-h-[100dvh] h-max relative">
      <div className="absolute w-80 h-80 bg-secondary rounded-full bottom-0 left-0" style={{filter:'blur(100px)'}}></div>
      <div className="absolute w-80 h-80 bg-secondary rounded-full top-0 left-0" style={{filter:'blur(100px)'}}></div>
      <div className="absolute w-80bg-fourth h-80 rounded-full bottom-0 right-0" style={{filter:'blur(200px)'}}></div>
      <div className="w-11/12 mx-auto max-w-7xl min-h-[100dvh] z-10 h-screen items-center flex lg:flex-row flex-col justify-between">
           <div className="lg:w-1/2 w-full lg:mt-0 mt-32 z-10  h-max flex flex-col gap-3">
            <p className="font-extrabold text-6xl text-white">Hi, Myself <span className="text-fourth">Siddak</span></p>
            <p className="text-[#FFFFFF] opacity-50 text-xl">Crafting Engaging Websites for Brands <br />
            Ready to Make Their Mark Online.</p>
            <div className="flex gap-2 text-white font-bold">
            <button className="  bg-[#2E236C] px-8  flex justify-center items-center   rounded-2xl">Hire me</button>
             <button className=" border-2 border-[#2E236C] px-8  flex justify-center items-center py-3 rounded-2xl">Download Cv</button>        
            </div>
            <div className="flex gap-4">
              {
                logo.map((item,idx)=>{
                  return (
                    <Image src={item} alt="img" key={idx} width={40} className=""/>
                  )
                })
              }
            </div>
           </div>
           <div className="lg:w-1/2 w-screen h-full z-10">
           <Modelman/>
           </div>
      </div>
    </section>
  )
}

export default HeroSection