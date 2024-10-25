'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import {navLinks} from '../constants/index'
import {menu,close} from './assets'
import Image from "next/image";
const Navbar=()=>{
    const [scolled,setScolled]=useState(false);
    const [active,setActive]=useState("");
    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            const scrollTop=window.scrollY;
            if(scrollTop>100){
                setScolled(true);
            }else{
                setScolled(false);
            }
             console.log(scrollTop);
        }
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll);
    },[])
    
    return (
        <nav className={`w-full py-5 flex items-center top-0 z-100   `}>
                 <div className="flex justify-between  items-center mx-auto max-w-7xl w-11/12 ">
                    <Link className="text-white font-bold text-xl" href="/">
                    Siddak.
                    </Link>
                    <ul className="list-none hidden sm:flex flex-row gap-10">
                          {
                            navLinks.map((nav)=>{
                                return (
                                    <li key={nav.id}
                                        className={`${active===nav.title?'text-white ':'text-white opacity-50'} hover:text-white text-[18px] font-medium cursor-pointer`}
                                    >
                                        <Link href={`#${nav.id}`}>{nav.title}</Link>
                                    </li>
                                )
                            })
                          }
                    </ul>
                    <div className="flex gap-2  text-white">
                      <button className=" border-2 border-[#2E236C] px-4  flex justify-center items-center pb-2 pt-1 rounded-2xl">language</button>
                      <button className="  bg-[#2E236C] px-4  flex justify-center items-center  rounded-2xl">Contact</button>
                    </div>
                    <div className='sm:hidden flex  justify-end items-center'>
          
<Image src={toggle?close:menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={()=>setToggle(!toggle)}/>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-white opacity-50"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          </div>
         </div>
        </nav>
    )
}

export default Navbar