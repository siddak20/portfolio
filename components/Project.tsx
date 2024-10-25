import React from 'react'
import { projects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
const Project = () => {
  return (
    <section className='w-full min-h-screen'>
      <p className='text-white font-bold text-4xl mx-auto w-11/12 lg:w-max mb-20'>A small section of my <span className='text-fourth'>recent work</span> </p>
        <div className='w-11/12 mx-auto grid grid-rows-2 grid-cols-2 max-w-7xl h-max gap-3'>
           {
            projects.map((project,idx)=>{
              return (
                <div key={idx} className='lg:row-span-1  flex flex-col py-10 items-center  rounded-2xl h-max lg:h-[500px] bg-white/5 lg:col-span-1 col-span-2 row-span-1'>
                  <div className='w-11/12 flex flex-col gap-3 mx-auto '>
                   <div className='w-full flex justify-center h-max pt-10  rounded-2xl bg-[#13162D] overflow-hidden'>
                         <Image src={project.imageSrc} alt='img' width={100} height={0} className=' w-full h-52 rotate-3 translate-y-3 object-contain'/>
                   </div>
                   <p className="text-white font-bold  text-2xl">{project.title}</p>
                   <p className="text-white/50 font-bold  text-xl">{project.subTitle}</p>
                   <div className='w-full flex justify-between'>
                   <div className='flex gap-2'>
                      {
                        project.logos.map((item,id)=>{
                          return <Image src={item} alt='img' width={30} key={id}/>
                        })
                      }
                   </div>
                   <Link href={project.href} className='font-semibold text-[17px] text-fourth'>Check Live status</Link>
                   </div>
                   </div>
                </div>
              )
            })
           }
        </div>
        
    </section>
  )
}

export default Project