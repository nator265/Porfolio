"use client";
import React from 'react';
import {motion} from 'framer-motion';


const AchievementsList = [
    {
        metric: "Projects",
        value: "100+",
    },
    {
        metric: "Users",
        value: "10+",
    },
    {
        metric: "Awards",
        value: "1",
    },
    {
        metric: "Years",
        value: "5+",
    },
];

const AchievementsSection = () => {
  return (
    <motion.div 
    initial={{ opacity:0, y: 100}} 
    animate={{ opacity:1, y: 0}} 
    transition={{ duration:1 }}
    className='md:mb-0 md:pb-[30px] md:pt-[90px] md:px-4 xl:px-4'>
        <div className='border-[#33353F] w-full border rounded-md py-8 px-0 lg:px-20 flex flex-row items-center justify-between'>
            {
                AchievementsList.map((achievement, index) => {
                    return (
                        <div key = {index} className='flex flex-col items-center justify-center mx-3'>
                            <h2 className='text-white text-2xl md:text-4xl font-bold'> {achievement.value} </h2>
                            <p className='text-[#ADB7BE] text-base'> {achievement.metric} </p>
                        </div>
            
                    )
                })
            }
        </div>
    </motion.div>
  )
}

export default AchievementsSection