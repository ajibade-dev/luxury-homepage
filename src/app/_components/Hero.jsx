"use client"

// components/Hero.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Image from 'next/image';

const images = [
  {
    desktop: '/desktop-image-hero-1.jpg',
    mobile: '/mobile-image-hero-1.jpg', 
    text: 'Discover innovative ways to decorate',
    subText: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    desktop: '/desktop-image-hero-2.jpg',
    mobile: '/mobile-image-hero-2.jpg',
    text: 'We are available all across the globe',
    subText: 'With stores all over the world, it is easy for you to find furniture for your home or place of business. Locally, we are in most major cities throughout the country. Find the branch nearest to you using our store locator. Any questions? Dont hesistate to contact us today',
  },
  {
    desktop: '/desktop-image-hero-3.jpg',
    mobile: '/mobile-image-hero-3.jpg',
    text: 'Manufactured with the best materials',
    subText: 'Our modern funiture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in the industry, we understand what customers want for their home and offices.',
  },
 
  // Add more items as needed
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
        <div className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <AnimatePresence mode='wait'>
        <div className='absolute top-0 p-5'>
        <Header />
        </div>
        <div className="w-full lg:w-[60%] h-full">
            <div className="hidden md:block">
              <motion.img
                key={images[index].desktop}
                src={images[index].desktop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:hidden">
              <motion.img
                key={images[index].mobile}
                src={images[index].mobile}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
              <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='flex xl:hidden relative max-w-[70px] ml-auto bottom-11  justify-between'>
          <button
          onClick={prevSlide}
          className="absolute hover:bg-stone-700 left-0 bg-black text-white p-4"
        >
          <Image src="/icon-angle-left.svg" width={6} height={6} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute hover:bg-stone-700 right-0 bg-black text-white p-4"
        >
          <Image src="/icon-angle-right.svg" width={6} height={6} />
        </button>
          </motion.div>
            </div>
            </div>
        
      </AnimatePresence>
      <AnimatePresence mode='wait'>

        <div className='lg:w-[40%] w-full'>
        <motion.div
        key={images[index].text}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-center md:px-16 px-8 py-6 md:py-0">
          <h1 className="md:text-5xl text-3xl font-semibold tracking-tighter">{images[index].text}</h1>
          <p className="mt-4 text-md tracking-tight font-semibold text-stone-400">{images[index].subText}</p>
          <button className='flex flex-row gap-3 items-center text-black hover:text-stone-400'>
          <p className="mt-4  text-black font-semibold tracking-widest">S   H   O   P <span className='mx-5'> N   O   W</span></p>
          <Image src="/icon-arrow.svg" width={40} height={2} className='mt-2' />
          </button>
          
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='lg:flex hidden relative max-w-[110px] top-16 right-0 justify-between'>
          <button
          onClick={prevSlide}
          className="absolute hover:bg-stone-700 left-0 bg-black text-white p-6"
        >
          <Image src="/icon-angle-left.svg" width={10} height={10} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute hover:bg-stone-700 right-0 bg-black text-white p-6"
        >
          <Image src="/icon-angle-right.svg" width={10} height={10} />
        </button>
          </motion.div>
          </div>
      </AnimatePresence>
     
    </div>
    </div>
  );
}
