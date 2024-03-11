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
      className="p-6 bg-white rounded-md shadow-md"
    >
      <h1 className="text-3xl font-bold mb-4">Kelvin Zimba's CV</h1>
      <hr />
      <br />
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc pl-6">
          <li>Ctech Systems - Junior Software Engineer (internship) (August-December 2022)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <ul className="list-disc pl-6">
          <li>Malawi Assemblies of God University - Bachelor of Commerce in Business Information Systems (2018-2023)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc pl-6">
          <li>Veterinary Appointment Booking System</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-6">
          <li>JavaScript (React, Next.js)</li>
          <li>HTML/CSS (Tailwind CSS)</li>
          <li>Node.js</li>
          <li>PHP</li>
          <li>Svelte</li>
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