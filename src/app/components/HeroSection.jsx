"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';


function HeroSection({ navbarOpen }) {

  const [showA, setShowA] = useState(false); // State to control the visibility of the letter "A"

  return (
    <section id="heroSection" className='pt-24'>
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-10 md:pt-0">
        <div 
          className="col-span-7 place-self-center text-center sm:text-left">

          <h1
           className="text-white mb-3 lg:mb-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <motion.span 
            initial={{ opacity:0, }} 
            animate={{ opacity:1, }} 
            transition={{ duration:1 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-400">
              {showA ? null : "Hi, I'm "} 
              {showA && "A"}{" "}
            </motion.span>
            <br />
            <div className='sm:w-auto h-[80px] md:h-[100px] md:text-[90%] lg:text-[100%] overflow-hidden'>
              <TypeAnimation
                sequence={[
                  'Kelvin Zimba.',
                  () => setShowA(true), // Show the letter "A" when "Kelvin Zimba" appears
                  'Web Developer.',
                  () => setShowA(true), // Show the letter "A" when "Web Developer" appears
                  'UI/UX Designer.',
                  () => setShowA(false) // Hide the letter "A" when "UI/UX Designer" appears
                  
                ]}
                wrapper="span"
                speed={1}
                repeat={Infinity}
                cursor={true}
                deletionSpeed={{type: 'keyStrokeDelayInMs', value: 200}}
              />
              <div className='mt-10'></div>
            </div>            
          </h1>
          <motion.p 
            initial={{ opacity:0, }} 
            animate={{ opacity:1, }} 
            transition={{ duration:1 }}
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            I am a Software Engineer that lives and breathes code!
          </motion.p>
          <div className="button">
            <Link href={"#contact"}>
              <motion.button
                initial={{ opacity:0, x:150}} 
                animate={{ opacity:1, x:0}} 
                transition={{ delay:0.5, duration:0.5 }}
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 via-blue-700 to-indigo-600 hover:bg-slate-200 text-white">

                  Hire Me 
              </motion.button>
            </Link>
            <Link href={"/cv"}>
              <motion.button 
                initial={{ opacity:0, x:50}} 
                animate={{ opacity:1, x:0}} 
                transition={{ delay:0.5, duration:0.5 }}
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 ">
                <span className='block bg-[#1f1f1f] hover:bg-slate-900 rounded-full px-5 py-2 transition ease-in-out delay-10'> 
                  View CV 
                </span>
              </motion.button>
            </Link>
            </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity:0, x:100 }} 
            animate={{ opacity:1, x:0 }} 
            transition={{ duration: 1 }}  
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mt-10 mb-20 md:mb-0 relative">
              <Image
                src="/images/hero-image2.png"
                alt="Developer"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:mt-7 md:mt"
                width={300}
                height={300}
              />
              <p className='text-[#92929225] text-xs py-5 absolute bottom-0 left-7 lg:left-24 lg:py-11 lg:bottom-1'><a href="https://www.vecteezy.com/free-png/man-with-laptop">Man With Laptop PNGs by Vecteezy</a></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
