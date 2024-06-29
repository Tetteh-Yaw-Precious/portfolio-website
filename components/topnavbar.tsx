'use client'
import React, { forwardRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useShowStore } from '@/context/context'
import '../app/app.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './homepage/largenavbar';

interface NavLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
}

const navbarLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];


const Topnavbar = (
) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);







  const [menuOpen, setMenuOpen] = useState(false)
  const { showNav } = useShowStore()

  let menuBar = gsap.timeline();
  let tl = gsap.timeline({ paused: false });

  const menuLinks = [
    { label: 'Home', href: '/' },
    // { label: 'Projects', href: '/projects' },
    { label: 'About Me', href: '/about' }
  ]


  const handlemenu = (): void => {
    menuBar.reversed(!menuBar.reversed());
    tl.reversed(!tl.reversed());
  }


  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(!open);
  }

  const closeMenu = () => {
    setOpen(false);
  }

  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        // Set isMedium to true when the screen width is at least 768px (adjust this value as needed)
        setIsMedium(true);
      } else {
        setIsMedium(false);
      }
    };

    // Call handleResize initially and add a listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  //lets start animation
  const item = {
    exit: {
      width: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: .3
      }
    }
  }

  return (
    <>
      {showNav && (

        <div className='sticky top-0 z-40'>
          <div className=' '>
            <div className='fixed w-full top-10'>
              <div className=" !w-full">
                <div className="header-row h-[15vh] px-[10%] flex justify-end">
                  <a className={`z-50 md:p-6 p-4 rounded-full ${open ? ' text-white bg-black' : 'bg-black text-white'}`} id="menuToggle" onClick={isOpen}
                  >
                    <Bars3Icon className={`w-10 h-10 md:w-14 md:h-14 stroke-4 ${open ? 'text-white' : ''}`} />
                  </a>
                </div>
              </div>
              <AnimatePresence>
                {
                  open && (
                    <motion.div className="menu_container"
                      variants={item}
                      animate={isMedium ? { width: "30%", opacity: 1 } : { width: "100%", opacity: 1 }}
                      transition={{ duration: .3 }}
                      exit="exit"
                    >

                      {menuLinks.map((link, index) => (
                        <a href={link.href} key={index}>
                          <motion.a
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.5 }}
                            exit={{
                              opacity: 0,
                              x: 40,
                              transition: {
                                ease: 'easeInOut',
                                delay: 0.1,
                              },
                            }}
                            className='font-medium'
                            onClick={closeMenu}
                          >
                            {link.label}
                          </motion.a>
                        </a>
                      ))}
                    </motion.div>
                  )
                }
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Topnavbar