"use client"
import React, { useRef, useEffect } from 'react';
import NavLink from './NavLink';
import { motion, useAnimation, useInView } from 'framer-motion';

const MenuOverlay = ({ links, onClick }) => {
  const mobileMenuRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: -40 });
    } else {
      controls.start({ opacity: 1, y: -40 });
    }
  }, [inView, controls]);

  return (
    <ul
      className='flex flex-col items-center justify-center md:hidden h-dvh'
      id='mobileMenu'
      ref={mobileMenuRef}
    >
      {links.map((link, index) => (
        <motion.li
          key={index}
          ref={ref}
          initial={{opacity: 0}}
          animate={controls}
          exit={{ opacity: 0, x: -70 }} // Define exit animation
          whileHover={{ scale: 1.1 }} // Hover animation
          transition={{ type: 'spring', stiffness: 120, duration:0.8}}
          className='my-10 underline underline-offset-8'
          onClick={onClick}
        >
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
