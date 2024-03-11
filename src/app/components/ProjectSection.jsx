"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {motion, useInView } from "framer-motion";


const projectsData = [

    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/about-image.jpeg",
        tag: [ "All", "Web" ],
        gitUrl:"/",
        previewUrl:"/"
        
    },
    {
        id: 2,
        title: "React Portfolio Website",
        description: "Project 2 description",
        image: "/images/about-image.jpeg",
        tag: [ "All", "Web" ],
        gitUrl:"/",
        previewUrl:"/"
        
    },
    {
        id: 3,
        title: "React Portfolio Website",
        description: "Project 3 description",
        image: "/images/about-image.jpeg",
        tag: [ "All", "Web" ],
        gitUrl:"/",
        previewUrl:"/"
        
    },
    {
        id: 4,
        title: "React Portfolio Website",
        description: "Project 4 description",
        image: "/images/about-image.jpeg",
        tag: [ "All", "Web" ],
        gitUrl:"/",
        previewUrl:"/"
        
    },
    {
        id: 5,
        title: "React Portfolio Website",
        description: "Project 5 description",
        image: "/images/about-image.jpeg",
        tag: [ "All", "Web" ],
        gitUrl:"/",
        previewUrl:"/"
        
    },
    {
        id: 6,
        title: "React Portfolio Website",
        description: "Project 6 description",
        image: "/images/about-image.jpeg",
        tag: [ "All", "Mobile" ],
        gitUrl:"/",
        previewUrl:"/",
    },

];


 export const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const cardVariants = {
            initial: {y: 50, opacity:0},
            animate: {y: 0, opacity:1},
        };
        
    const handleTagChange = (newTag => {
        setTag(newTag);
    });

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    

  return (
    <section id='projects' className='pt-28'>
        <h2 className='text-center text-4xl font-bold text-white mb-6 md:mb-8'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-1 py-6'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>
        <ul ref={ref} className='grid md:grid-cols-2 gap-8 md:gap-12 lg:grid-cols-3 lg:gap-12 lg:m-0 lg:p-0'>
            {filteredProjects.map((project, index) => 
            <motion.li 
                key={index} 
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" : "initial"}
                transition={{ delay:index * 0.3, duration: 0.5}}
            >
                <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} /> 
            </motion.li>    
            )}
            
        </ul>
    </section>
  )
}

