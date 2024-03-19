"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Page(){
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, duration: 0.5 }}
      className="p-6 bg-white rounded-md shadow-md text-black"
    >
      <h1 className="text-3xl font-bold mb-2">KELVIN ZIMBA</h1>
      <div className="text-[13px] mb-2">
        <h3>+265884926300</h3>
        <h3>kelvinzimba2322000@gmail.com</h3>
        <h3>Lilongwe, Malawi</h3>
      </div>
      <hr />
      <br />
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-2 border border-t-0 border-l-0 border-r-0 pb-2 border-b-black">WORK EXPERIENCE</h2>
        <div className="pl-3 pr-3">
          <h3>Junior Software Engineer (internship)</h3>
          <div className="block md:flex md:justify-between">
            <div className="text-[13px] italic pl-3"> Ctech Systems, Lilongwe, Malawi. </div>
            <div className="text-[13px] italic pl-3 md:pl-0">16 August - 24 December 2022</div>
          </div>
          <ul className="list-disc pl-8 pr-4 pt-2">
            <li className="mb-2">
              Provided Emails to clients and taught them how to access the emails and followed up with unlimited support.
            </li>
            <li className="mb-2">
              Helped in the creation of an application for the ministry of tourism by providing data to the app that can be used by clients to access the service or product that they are looking for.
            </li>
            <li className="mb-2">
              Managed to broadcast a live stream on Facebook for the Region 5 Youth Games that took place in malawi and was hosted at the Bingu nation stadium in Lilongwe, Malawi.
            </li>
            <li >
              Developed a website for a company called CIM Globac that deals with selling of industry grade pipes and irrigation equipment.
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 border border-t-0 border-l-0 border-r-0 pb-2 border-b-black">EDUCATION</h2>
        <div className="pl-3 pr-3">
          <div> Malawi Assemblies of God University </div>
          <div className="block md:flex md:justify-between">
            <div className="text-[13px] italic pl-3"> Bachelor of Commerce in Business Information Systems </div> 
            <div className="text-[13px] italic pl-3 md:pl-0"> 2019 - 2023 </div>
          </div>
        </div>
        <div className="pl-3 pr-3 pt-3">
          <div>Michiru View Boys Secondary School</div>
          <div className="block md:flex md:justify-between">
            <div className="text-[13px] italic pl-3"> Malawi School Certificate of Education </div> 
            <div className="text-[13px] italic pl-3 md:pl-0"> 2016 - 2017 </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 border border-t-0 border-l-0 border-r-0 pb-2 border-b-black">PROJECTS</h2>
        <ul className="list-disc pl-6 pt-2">
          <li>Veterinary Appointment Booking System</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 border border-t-0 border-l-0 border-r-0 pb-2 border-b-black">SKILLS</h2>
        <ul className="list-disc pl-6">
          <li>JavaScript (React, Next.js)</li>
          <li>HTML/CSS (Tailwind CSS)</li>
          <li>Node.js</li>
          <li>PHP</li>
          <li>Svelte</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 border border-t-0 border-l-0 border-r-0 pb-2 border-b-black">VOLUNTEER EXPERIENCE</h2>
        <div className="block md:flex md:justify-between">
          <div className="pl-3 pr-3">
            Chairman of church youth group
          </div>
          <div className="pl-3 pr-3 text-[13px] italic mb-3">
            January 2024 - Present
          </div>
        </div>
        <ul className="list-disc pl-6">
        <li>
          Directed a fundraising event that generated 220% profit
        </li>
        </ul>
      </div>
      <div className="text-center py-10">
      <Link href={"../#contact"}>
              <motion.button
                initial={{ opacity:0, x:150}} 
                animate={{ opacity:1, x:0}} 
                transition={{ delay:0.5, duration:0.5 }}
                className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-700 to-indigo-600 hover:bg-slate-200 text-white">
                  Hire Me 
              </motion.button>
            </Link>
      </div>
    </motion.div>
    )
}