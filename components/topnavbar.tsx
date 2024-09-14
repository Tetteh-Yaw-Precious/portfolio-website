'use client'
import React, { forwardRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useShowStore } from '@/context/context'
import '../app/app.scss'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './homepage/largenavbar';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const currentPath = usePathname();


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
    { label: 'Home', href: '/#home' },
    { label: 'About me', href: '/#about' },
    { label: "Works", href: '/#works' },
    { label: 'My Resume', href: 'https://drive.google.com/file/d/1HK5s3GK5PoMg6YsSsCNRD2VQDjk1hU4F/view?usp=sharing' }
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
    <div className=''>

      {showNav && (

        <div className='fixed w-full top-0 z-40 md:hidden block'>
          <div className=''>
            <div className='sticky w-full top-10'>
              <div className=" !w-full">
                <div className="header-row h-[10vh] px-[10%] flex justify-end">
                  <a className={`z-50 md:p-6 p-4 rounded-full ${open ? ' text-white bg-black' : 'bg-black text-white'}`} id="menuToggle" onClick={isOpen}
                  >
                    <Bars3Icon className={`w-6 h-6 stroke-4 ${open ? 'text-white' : ''}`} />
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
                        <a href={link.href} key={index} className="!scroll-smooth">
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
                            className='font-medium scroll-smooth'
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


      {isMedium && (
        <div className='z-[100] sticky top-0 flex justify-center items-center h-[8vh]'>
          <nav className='h-[8vh] fixed w-full border-gray-200 flex bg-white items-center justify-center text-base font-normal font-outfit'>
            {menuLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="!scroll-smooth"
                target={index === menuLinks.length - 1 ? '_blank' : '_self'}
                rel={index === menuLinks.length - 1 ? 'noopener noreferrer' : undefined}
              >
                <motion.a
                  className='font-medium scroll-smooth'
                  onClick={closeMenu}
                >
                  <button
                    className={`group relative inline-flex h-12 items-center justify-center rounded-full px-4 font-regular ${currentPath.includes(link.label) ? "bg-neutral-900 text-neutral-200" : 'bg-none text-gray-900'}`}
                  >
                    <span>{link.label}</span>
                    <div className="relative ml-1 h-5 w-5 overflow-hidden">
                      <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                          <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -translate-x-4">
                          <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </motion.a>
              </a>
            ))}
          </nav>
        </div >
      )}
    </div>
  )
}

export default Topnavbar