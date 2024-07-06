"use client"
import { useState } from 'react';
import Image from 'next/image';

// components/Header.js
import Link from 'next/link';

export default function Header() {
 const [isOpen, setIsOpen] = useState(false)

 const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  return (
    <div>
       <header className="flex w-full  lg:p-8 p-0 text-white gap-14 ">
        {/* this is what shows firstly on small screens */}
      <div className="md:hidden flex w-full justify-start gap-x-20">
          <button onClick={toggleMenu} >
            <Image src="/icon-hamburger.svg" alt="Menu" width={24} height={24} />
          </button>
          <div className="md:hidden flex text-2xl font-semibold">room</div>
        </div>
        {/* for the big screen */}
      <div className="md:flex hidden text-2xl font-semibold -mt-1">room</div>
      <nav className=" md:flex hidden space-x-4 items-center justify-center">
        <Link href="/" className='pb-3 hover:border-b-2 hover:border-b-white'>home</Link>
        <Link href="/shop"className="pb-3 hover:border-b-2 hover:border-b-white">shop</Link>
        <Link href="/about"className="pb-3 hover:border-b-2 hover:border-b-white">about</Link>
        <Link href="/contact" className="pb-3 hover:border-b-2 hover:border-b-white">contact</Link>
      </nav>
      {/* for the mobile view */}
      
      
        {isOpen && (
          <div className='md:hidden fixed inset-0 bg-black opacity-90'>
            <nav className="md:hidden flex bg-white text-black fixed top-0 right-0 left-0 h-[15%] w-full p-4 z-40 transition ease-in-out duration-300 justify-evenly items-center">
          
          <div className='flex items-center'>
            <button onClick={toggleMenu} >
            <Image src="/icon-close.svg" alt="Menu" width={16} height={16} />
          </button>
          </div>
          <div className='flex flex-row justify-evenly w-auto gap-4 ml-auto'>

          <a href="#" className="block hover:text-stone-700 font-bold">home</a>
          <a href="#" className="block hover:text-stone-700  font-bold">shop</a>
          <a href="#" className="block hover:text-stone-700  font-bold">about</a>
          <a href="#" className="block hover:text-stone-700  font-bold">contact</a>
          </div>
          
          </nav>
          </div>)
        }
    </header>
    </div>
   
  );
}
