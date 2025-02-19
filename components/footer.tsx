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
        <footer className="md:h-[65vh] h-[50vh] flex items-center justify-center mt-[6rem]" style={{
          backgroundImage: 'url(/images/footerbackground.png)',
          color: '#191819',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <section className="content-container flex md:flex-col px-[10%] md:gap-0 gap-8">
            <div className="flex flex-col gap-7 justify-center items-center md:gap-14">
              <h1 className="md:text-3xl text-xl text-black font-normal text-center leading-[120%] font-inter tracking-[-1.5px]">Want to talk about your project?</h1>
              <div className="flex-col gap-4 md:flex md:flex-row md:gap-8">
                <a href="mailto:yawprecious072@gmail.com" className='font-medium scroll-smooth'>
                  <button className={`group relative inline-flex md:h-[10.5rem] h-[4rem] items-center font-inter justify-center rounded-full md:px-20 px-10 font-regular md:border-4 border-2 border-neutral-900 bg-none text-gray-900 !text-normal md:text-5xl text-lg hover:bg-gray-900 hover:text-white`}>
                    <span>{`let's chat 👋`}</span>
                  </button>
                </a>

              </div>
              <div className="flex flex-row gap-4 justify-center w-full text-base text-black md:flex md:text-lg font-inter">
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/precious-tetteh-431b0418b/" className="hover:underline">Linkedin</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.behance.net/yaw_precious" className="hover:underline">Behance</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Tetteh-Yaw-Precious" className="hover:underline">Github</Link>
                <Link target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1HK5s3GK5PoMg6YsSsCNRD2VQDjk1hU4F/view?usp=sharing' className="hover:underline">Resume</Link>
              </div>
              {/* <p className="text-sm italic text-black md:text-lg font-inter">
                {timestamp}
              </p> */}
            </div>
          </section>
        </footer>
      }
    </>
  );
};

export default Footer;
