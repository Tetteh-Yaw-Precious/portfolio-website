'use client'
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useShowStore } from "@/context/context";
import { useEffect, useState } from 'react';
import FooterBackground from "./backgrounds/footerBackground";
import { Button } from "@chakra-ui/react";

const Footer = () => {
  const { showFooter } = useShowStore();
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    let currentDate = new Date();
    let year = currentDate.getUTCFullYear();
    let hours = ('0' + currentDate.getUTCHours()).slice(-2);
    let minutes = ('0' + currentDate.getUTCMinutes()).slice(-2);
    let seconds = ('0' + currentDate.getUTCSeconds()).slice(-2);
    setTimestamp(`© ${year} Tetteh Yaw Precious — ${hours}:${minutes} GMT`);
  }, []);

  return (
    <>
      {showFooter &&
        <footer className="md:h-[65vh] h-[75vh] flex items-center justify-center mt-[6rem]" style={{
          backgroundImage: 'url(/images/footerbackground.png)',
          color: '#191819',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <section className="content-container flex md:flex-col px-[10%] md:gap-0 gap-8">
            <div className="flex flex-col md:gap-14 justify-center items-center gap-7">
              <h1 className="md:text-3xl text-2xl text-black font-normal leading-[120%] font-outfit tracking-[-1.5px]">Want to talk about your project?</h1>
              <div className="md:flex md:flex-row flex-col md:gap-8 gap-4">
                <a href="mailto:yawprecious072@gmail.com" className='font-medium scroll-smooth'>
                  <button className={`group relative inline-flex h-[10.5rem] items-center font-outfit justify-center rounded-full px-20 font-regular border-4 border-neutral-900 bg-none text-gray-900 !text-normal text-5xl hover:bg-gray-900 hover:text-white`}>
                    <span>{`let's chat 👋`}</span>
                  </button>
                </a>

              </div>
              <div className="flex md:flex flex-row gap-4 text-black md:text-lg text-base font-outfit w-full justify-center">
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/precious-tetteh-431b0418b/" className="hover:underline">Linkedin</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.behance.net/yaw_precious" className="hover:underline">Behance</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Tetteh-Yaw-Precious" className="hover:underline">Github</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.behance.net/yaw_precious" className="hover:underline">Resume</Link>
              </div>
              <p className="text-black md:text-lg text-sm font-outfit italic">
                {timestamp}
              </p>
            </div>
          </section>
        </footer>
      }
    </>
  );
};

export default Footer;
