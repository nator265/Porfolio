"use client";
import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/githubIcon.svg";
import LinkedinIcon from "../../../public/linkedinIcon.svg";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const EmailSection = () => {
	const router = useRouter();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		try {
			const response = await fetch("https://formspree.io/f/xgegzzyk", {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});

			if (response.ok) {
				setIsModalOpen(true);
				setTimeout(() => {
					setIsModalOpen(false);
					router.push("/");
				}, 3000);
			} else {
				console.error("Form submission failed:", response.statusText);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
		router.push("/");
	};

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	const cardVariants2 = {
		initial: { x: 50, opacity: 0 },
		animate: { x: 0, opacity: 1 },
	};

	return (
		<section
			ref={ref}
			id='contact'
			className='grid md:grid-cols-2 md:py-24 gap-10 md:gap-4 pt-[100px] md:pt-[150px] pb-14 md:mb-0 md:pb-0 relative'>
			<div
				className='bg-gradient-to-tl from-indigo-900 to-transparent rounded-full lg:h-[280px] lg:w-[280px] z-1 blur-lg absolute -bottom-20 -left-50 transform -translate-x-1/2 -translate-y-1/2 opacity-60'
				style={{ transform: "rotate(-45deg)" }}></div>
			<div
				className='bg-gradient-to-tl from-purple-900 to-transparent opacity-80 rounded-full md:h-60 md:w-60 z-2 blur-lg absolute -bottom-[120px] -left-[120px] transform translate-x-1/2 -translate-y-20'
				style={{ transform: "rotate(-45deg)" }}></div>
			<div className='z-2'>
				<motion.h5
					variants={cardVariants}
					initial='initial'
					animate={isInView ? "animate" : "initial"}
					transition={{ delay: 0.7, duration: 0.5 }}
					className='text-xl font-bold text-white mb-2  md:pt-[100px]'>
					Let's Connect.
				</motion.h5>
				<motion.p
					variants={cardVariants2}
					initial='initial'
					animate={isInView ? "animate" : "initial"}
					transition={{ delay: 0.7, duration: 0.5 }}
					className='text-[#ADB7BE] md-4 max-w-md'>
					{" "}
					I'm currently looking for new opportunities, my inbox is always open.
					Whether you have a question or just want to say hi, I'll try my best
					to get back to you!
				</motion.p>
				<div className='socials flex flex-row gap-2 mt-5'>
					<Link
						href='https://github.com/nator265'
						className='bg-white w-200 h-200 rounded-full'>
						<Image src={GithubIcon} alt='Github Icon' height={50} width={50} />
					</Link>
					<Link
						href='linkedin.com/in/kelvin-zimba-7b0549273'
						className='bg-white rounded-full'>
						<Image
							src={LinkedinIcon}
							alt='Linkedin Icon'
							height={50}
							width={50}
						/>
					</Link>
				</div>
			</div>
			<form onSubmit={handleSubmit} className='flex flex-col gap-2'>
				<label htmlFor='email' className='text-white block text-sm font-medium'>
					Your email:
				</label>
				<input
					type='email'
					name='kelvinzimba2322000@gmail.com'
					className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] mb-3 text-gray-100 text-sm rounded-lg block w-full p-2.5'
					required
					placeholder='email@example.com'
				/>
				<label
					htmlFor='subject'
					className='text-white block text-sm font-medium'>
					Subject:
				</label>
				<input
					type='text'
					name='subject'
					className='bg-[#18191E] mb-3 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
					required
					placeholder="Let's Build Together!"
				/>
				<label
					htmlFor='message'
					className='text-white block text-sm font-medium'>
					Message
				</label>
				<textarea
					name='message'
					className='bg-[#18191E] h-20 border border-[#33353F] placeholder-[#9CA2A9] mb-9 text-gray-100 text-sm rounded-lg block w-full p-2.5'
					placeholder="Let's talk about..."
				/>
				<button
					type='submit'
					className='bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-600 hover:bg-cyan-600 text-white font-medium py-2.5 rounded-lg w-full'>
					Send Message
				</button>
			</form>

			{isModalOpen && (
				<div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center'>
					<div className='bg-white p-6 rounded-lg'>
						<button
							className='absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700'
							onClick={closeModal}>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'></path>
							</svg>
						</button>
						<p className='text-lg font-semibold mb-4'>
							Your message has been successfully sent!
						</p>
						<button
							className='bg-indigo-600 text-white px-4 py-2 rounded-lg'
							onClick={closeModal}>
							Close
						</button>
					</div>
				</div>
			)}
		</section>
	);
};
