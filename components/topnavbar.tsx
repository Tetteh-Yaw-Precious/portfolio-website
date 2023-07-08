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
    { label: 'Home', href: '' },
    { label: 'My Work', href: '' },
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

  const isSmall = useIsMedium()

  useEffect(() => {
    if (isSmall === true) {
      isSmall
      console.log(isSmall)
    }
  }, [isSmall])


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

  const animation = {}

  return (
    <div className='sticky top-0 !bg-white z-30'>
      {showNav && (
        <div className='sticky w-full top-10 '>
          <div className=" !w-full  ">
            <div className=" header-row">
              <Image src={myLogo} width={'143'} alt="Yaw Precious Logo" />
              <a className={`z-50 p-2 !border shadow-neubrutalism-button white-button-hover border-black rounded-full menu-toggle ${open ? 'border-white' : ''}`} id="menuToggle" onClick={isOpen}
              >
                <Bars3Icon className={`w-6 h-6 md:w-12 md:h-12 ${open ? 'text-white border-white' : ''}`} />
              </a>
            </div>
          </div>
          <AnimatePresence>
            {
              open && (
                <motion.div className="menu_container"
                  variants={item}
                  initial={{ width: 0, opacity: 0 }}
                  animate={isSmall ? { width: "30%", opacity: 1 } : { width: "100%", opacity: 1 }}
                  transition={{ duration: .5 }}
                  exit="exit"
                >

                  {menuLinks.map((link, index) => (
                    <Link href={link.href} key={index}>
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
                    </Link>
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