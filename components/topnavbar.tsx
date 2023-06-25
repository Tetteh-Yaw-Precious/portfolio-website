'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import myLogo from '../public/images/logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { gsap } from 'gsap';
import Link from 'next/link'

function Topnavbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  let menuBar = gsap.timeline();
  let tl = gsap.timeline({ paused: false });

  const menuLinks = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Resources', href: '#' },
    { label: 'Contact Me', href: '#' },
  ]

  useEffect(() => {
    // menuBar.fromTo('.bar-1', {
    //   attr: { d: "M8,2 L2,8" },
    //   x: 1,
    //   ease: 'power2.inOut'
    // }, {
    //   attr: { d: "M8,2 L2,8" },
    //   x: 1,
    //   duration: 0.5,
    //   ease: 'power2.inOut'
    // }, 'start');

    // menuBar.fromTo('.bar-2', {
    //   autoAlpha: 1
    // }, {
    //   autoAlpha: 0,
    //   duration: 0.5,
    //   ease: 'power2.inOut'
    // }, 'start');



    // menuBar.fromTo('.bar-3', {
    //   attr: { d: "M8,8 L2,2" },
    //   x: 1
    // }, {
    //   attr: { d: "M8,8 L2,2" },
    //   x: 1,
    //   duration: 0.5,
    //   ease: 'power2.inOut'
    // }, 'start');

    tl.to('.fullpage-menu', {
      duration: 0,
      display: "block",
      ease: 'Expo.easeInOut',
    });

    tl.from('.menu-bg span', {
      duration: 1,
      x: "100%",
      stagger: 0.1,
      ease: 'Expo.easeInOut'
    });

    tl.from('.main-menu li a', {
      duration: 1.5,
      y: "100%",
      stagger: 0.2,
      ease: 'Expo.easeInOut'
    }, "-=0.5");

    tl.from('.social-links li', {
      duration: 1,
      y: "-100%",
      opacity: 0,
      stagger: 0.1,
      ease: 'Expo.easeInOut'
    }, "-=0.5");

    tl.reverse();
  }, [menuBar, tl])

  const handlemenu = (): void => {
    menuBar.reversed(!menuBar.reversed());
    tl.reversed(!tl.reversed());
  }


  return (
    <div>
      <div className="header-row">
        <Image src={myLogo} width={'143'} alt="Yaw Precious Logo" />
        <a className='z-50 p-2 !border shadow-neubrutalism-button hover:shadow-none border-black rounded-full menu-toggle' id="menuToggle" onClick={() => {
          handlemenu()
        }}>
          <Bars3Icon className='w-6 h-6 md:w-12 md:h-12' />
        </a>
      </div>
      {/* <section className="fullpage-menu">
        <div className="fullpage-menu-inner">
          <div className="menu-bg">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav>
            <ul className="main-menu font-outfit">
              {menuLinks.map((menuItem, index) => (
                <li key={index}>
                  <Link href={menuItem.href} onClick={handlemenu}>
                    {menuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-nav-footer">
            <ul className="social-links font-sora">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li className='text-white'>&copy;2023</li>
            </ul>
          </div>

        </div>
      </section> */}

    </div>
  )
}

export default Topnavbar