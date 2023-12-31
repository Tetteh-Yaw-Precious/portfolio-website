'use client'
import React, { forwardRef, useEffect, useState } from 'react'
import Image from 'next/image'
import myLogo from '../public/images/logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { gsap } from 'gsap';
import Link from 'next/link'
import { useShowStore } from '@/context/context'
import '../app/app.scss'
import { AnimatePresence, motion } from 'framer-motion'
import { useIsMedium, useIsSmall } from '@/hooks/mediaQuery'

const Topnavbar = (
) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const { showNav } = useShowStore()

  let menuBar = gsap.timeline();
  let tl = gsap.timeline({ paused: false });

  const menuLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/' },
    // { label: 'Blog', href: '#' },
    // { label: 'Resources', href: '#' },
    // { label: 'Contact Me', href: '#' },
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
        duration: 0.5,
        delay: .5
      }
    }
  }

  return (
    <div className='sticky top-0 !bg-white z-10 h-[12vh]'>
      {showNav && (
        <div className='sticky w-full top-10'>
          <div className=" !w-full">
            <div className="header-row h-[12vh] px-[5%]">
              <Image src={myLogo} width={'120'} alt="Yaw Precious Logo" />
              <a className={`z-50 p-2 !border shadow-neubrutalism-button white-button-hover border-black rounded-full menu-toggle ${open ? 'border-white' : ''}`} id="menuToggle" onClick={isOpen}
              >
                <Bars3Icon className={`w-4 h-4 md:w-8 md:h-8 ${open ? 'text-white border-white' : ''}`} />
              </a>
            </div>
          </div>
          <AnimatePresence>
            {
              open && (
                <motion.div className="menu_container"
                  variants={item}
                  // initial={{ width: 0, opacity: 0 }}
                  animate={isMedium ? { width: "30%", opacity: 1 } : { width: "100%", opacity: 1 }}
                  transition={{ duration: .5 }}
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
      )}
    </div>
  )
}

export default Topnavbar