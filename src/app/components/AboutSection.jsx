"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className='list-disc text-white grid grid-cols-3'>
				<li>Node.js</li>
				<li>Express</li>
				<li>PHP</li>
				<li>Laravel</li>
				<li>Flutter</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>javascript</li>
				<li>React</li>
				<li>Next Js</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className='list-disc text-white grid'>
				<li>Malawi Assemblies of God University</li>
			</ul>
		),
	},
	{
		title: "Certificate",
		id: "certifications",
		content: (
			<ul className='list-disc text-white grid'>
				<li> Bachelor of Commerce: Business Information Systems </li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	const cardVariants2 = {
		initial: { y: 80, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className='text-white pt-[22px] md:pt-[50px]' ref={ref} id='about'>
			<div className='mt-2 md:mt-0 md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 pb-0 xl:py-16'>
				<Image
					src='/images/me.jpg'
					alt='Programer or Developer'
					width={600}
					height={600}
					className='hidden md:flex rounded-full'
				/>

				<div className='mt-6 md:mt-0 text-left flex flex-col h-full'>
					<motion.h2
						variants={cardVariants2}
						initial='initial'
						animate={isInView ? "animate" : "initial"}
						transition={{ delay: 0.7, duration: 0.5 }}
						className='text-4xl font-bold text-white mb-4'>
						About Me
					</motion.h2>

					<motion.p
						variants={cardVariants}
						initial='initial'
						animate={isInView ? "animate" : "initial"}
						transition={{ delay: 0.5, duration: 0.5 }}
						className='text-base lg:text-lg lg:pr-20 lg:text-justify'>
						I am a full stack web developer with a passion for creating
						interactive and responsive web applications. I have experience
						working with Javascript, React, nextJs, Redux, Node.js, Flutter, Laravel,
						HTML, CSS, mongoDB, Express and Git. I am a quick learner always lookin forward to
						expand my knowledge and skill set. I am a team player and I am
						excited to work with others to create amazing applications.
					</motion.p>
					<div className='flex flex-row mt-8'>
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}>
							{" "}
							Skills{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}>
							{" "}
							Education{" "}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}>
							{" "}
							Certifications{" "}
						</TabButton>
					</div>
					<div className='h-[160px]'>
						<div className='mt-8 '>
							{TAB_DATA.find((t) => t.id === tab).content}
						</div>
					</div>
					<Link href='./cv'>
						<motion.button
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 0.5 }}
							className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
							<span className='block bg-[#1f1f1f] hover:bg-slate-900 rounded-full px-5 py-2 transition ease-in-out delay-10'>
								View CV
							</span>
						</motion.button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
