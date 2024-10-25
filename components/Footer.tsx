import React from 'react'
import DotPattern from './magicui/DotPattern'
import { cn } from './@lib/utils'
const Footer = () => {
  return (
    <section className='w-full  mt-20 h-[50vh]'>
        <div className='w-11/12 relative h-full mx-auto flex justify-center flex-col items-center max-w-7xl'>
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
        )}
      />
      <p className='text-4xl text-center text-white font-bold'>Ready to take <span className='text-fourth'>your</span>  digital <br />  presence to the next leave ?</p>
        </div>
    </section>
  )
}

export default Footer