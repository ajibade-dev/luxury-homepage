"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-center'>
        {/* for the first div */}
        <motion.div className='w-full h-full'>
        <img src="/image-about-dark.jpg" className='w-full h-full' />
        </motion.div>
        {/* for the second div */}
        <motion.div className='flex flex-col justify-center w-full md:px-6 md:py-2 px-8 py-8 gap-5'>
            <h3 className='text-black md:tracking-widest tracking-wide font-extrabold text-sm'>A B O U T <span className='mx-3'>O U R </span>F U R N I T U R E</h3>
            <p className='md:text-sm leading-5 tracking-normal font-semibold text-stone-400 lg:text-justify text-start'>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that bests express your interets and what inspires you. Find the funiture pieces you need, from traditional to contemporary styles or anything in between. Product specialist are available to help you create your dream space.</p>
        </motion.div>
        {/* for the third div */}
        <motion.div className='w-full h-full'>
        <img src="/image-about-light.jpg" className='w-full h-full' />
        </motion.div>

    </div>
  )
}

export default About