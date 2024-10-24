import Planet from "./canvas/Planet";
import Meteors from "./magicui/Metors";
import Ripple from "./magicui/Ripple";
import AnimatedSubscribeButton from "./magicui/EmailButton";
import SparklesText from "./@core/SparkelText";
import AnimatedBeamDemo from "./@core/TechBeam";
import { MarqueeDemo } from "./@core";
import {Icon1,Icon2,Icon3,Icon4} from './assets/icons'

export default function About(){
    return (
        <section id="About" className="w-full h-max min-h-screen py-40">
        <div className="w-11/12 max-w-7xl mx-auto flex justify-center">
          <div className="w-full  grid-rows-6 relative grid-cols-4 hidden lg:grid  gap-3 h-[140dvh]  max-h-[1000px]">
            <div className=" bg-white/5 col-span-1 row-span-3  rounded-xl flex flex-col ">
               <p className="w-11/12 mx-auto text-white font-bold text-2xl mt-4">I work with all modern Web <span className="text-fourth"> technologies</span></p>
               <div className="w-full"> <AnimatedBeamDemo /></div>
            </div>
            <div
              className="bg-fourth/95  col-span-2 row-span-3 rounded-xl"
            >
              <p className="text-6xl text-center text-white font-bold w-5/6 mx-auto mt-20">  I create things for the Web</p>
            </div>
            <div className="bg-white/5 relative flex items-center overflow-hidden col-span-1 row-span-1 rounded-xl">
            <Meteors number={30} />
            <p className="text-white text-2xl mx-auto w-11/12 font-bold">I constantly improve my tech stack</p>
            </div>
            <div className="bg-white/5 overflow-hidden relative flex justify-center items-center col row-span-2 col-span-1 rounded-xl">
                <Ripple/>
                <p className="text-3xl font-bold text-white">Let&apos;s build</p>
            </div>
            <div className="bg-white/5 flex justify-center items-center row-span-1 col-span-1 rounded-xl">
                <AnimatedSubscribeButton buttonColor="white" subscribeStatus={false} initialText="copy my email" changeText={"Email Copied"}/>
            </div>
            <div className="bg-white/5  relative row-span-3 col-span-1 flex justify-center items-end pb-10 rounded-xl">
            <div className=" absolute top-0 left-0"><Icon2/></div>
            <div className="w-11/12  mx-auto">
              <Icon4/>
              <p className="text-2xl text-white font-bold">Lorem Epsum</p>
              <p className="text-xl text-white/50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
            <div className="bg-white/5 relative row-span-3 col-span-1 flex justify-center items-end pb-10 rounded-xl">
            <div className=" absolute top-0 right-0"><Icon1/></div>
            <div className="w-11/12  mx-auto">
              <Icon3/>
              <p className="text-2xl text-white font-bold">Lorem Epsum</p>
              <p className="text-xl text-white/50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
            <div className="bg-white/5 flex flex-col items-center row-span-3 col-span-1 rounded-xl">
              <MarqueeDemo/>
            </div>
            <div className="bg-white/5 relative overflow-hidden flex items-center text-white row-span-2 col-span-1 rounded-xl">
              <SparklesText className="text-3xl w-11/12 mx-auto text-center" text="Time is Running let's connect"/>
            </div>
            <div
              className="w-80 border-10 border-primary flex justify-center items-center h-80 absolute bg-primary top-1/2 rounded-full left-1/2"
              style={{ transform: 'translate(-50%,-50%)' }}
            >
                <div className="w-72 h-72 rounded-full flex justify-center items-center z-0 bg-white/5">
                <Planet/>
                </div>
            </div>
          </div>
        <div className="w-full lg:hidden flex flex-col gap-3 items-center">
           <div className="flex gap-3 mx-auto flex-col md:flex-row w-full ">
           <div className=" bg-white/5 w-full md:w-1/2 h-[412px] col-span-1 row-span-3  rounded-xl flex flex-col ">
               <p className="w-11/12 mx-auto text-white font-bold text-2xl mt-4">I work with all modern Web <span className="text-fourth"> technologies</span></p>
               <div className="w-full"> <AnimatedBeamDemo /></div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/2">
            <div className="bg-white/5 relative h-[150px] flex items-center overflow-hidden col-span-1 row-span-1 rounded-xl">
            <Meteors number={30} />
            <p className="text-white text-2xl mx-auto w-11/12 font-bold">I constantly improve my tech stack</p>
            </div>
            <div className="bg-white/5 h-[250px] overflow-hidden relative flex justify-center items-center col row-span-2 col-span-1 rounded-xl">
                <Ripple/>
                <p className="text-3xl font-bold text-white">Let&apos;s build</p>
            </div>
            </div>
           </div>
           <div className="flex relative flex-col gap-3">
           <div
              className="bg-fourth/95 h-[412px]  col-span-2 row-span-3 rounded-xl"
            >
              <p className="text-6xl text-center text-white font-bold w-5/6 mx-auto mt-20">  I create things for the Web</p>
            </div>
            <div className="flex gap-3">
            <div className="bg-white/5 relative row-span-3 col-span-1 h-[412px] flex justify-center items-end pb-10 rounded-xl">
            <div className=" absolute top-0 left-0"><Icon2/></div>
            <div className="w-11/12  mx-auto">
              <Icon4/>
              <p className="text-2xl text-white font-bold">Lorem Epsum</p>
              <p className="text-xl text-white/50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
            <div className="bg-white/5 h-[412px] relative row-span-3 col-span-1 flex justify-center items-end pb-10 rounded-xl">
            <div className=" absolute top-0 right-0"><Icon1/></div>
            <div className="w-11/12  mx-auto">
              <Icon3/>
              <p className="text-2xl text-white font-bold">Lorem Epsum</p>
              <p className="text-xl text-white/50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
            </div>
            <div
              className="w-72 border-10 border-primary flex justify-center items-center h-72 absolute bg-primary top-1/2 rounded-full left-1/2"
              style={{ transform: 'translate(-50%,-50%)' }}
            >
                <div className="w-64 h-64 rounded-full flex justify-center items-center z-0 bg-white/5">
                <Planet/>
                </div>
            </div>
           </div>
           <div className="flex gap-3 flex-col md:flex-row  mx-auto w-full ">
           <div className="bg-white/5  flex w-full md:w-1/2 h-[412px] flex-col items-center row-span-3 col-span-1 rounded-xl">
              <MarqueeDemo/>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-1/2">
            <div className="bg-white/5 h-[150px] w-full flex justify-center items-center row-span-1 col-span-1 rounded-xl">
                <AnimatedSubscribeButton buttonColor="white" subscribeStatus={false} initialText="copy my email" changeText={"Email Copied"}/>
            </div>
            <div className="bg-white/5 h-[250px] relative overflow-hidden flex items-center text-white row-span-2 col-span-1 rounded-xl">
              <SparklesText className="text-3xl w-11/12 mx-auto text-center" text="Time is Running let's connect"/>
            </div>
            </div>
           </div>
        </div>
        </div>
      </section>
    )
}

