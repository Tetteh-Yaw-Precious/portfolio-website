'use client'
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useShowStore } from "@/context/context";
import FooterBackground from "./backgrounds/footerBackground";
import { Button } from "@chakra-ui/react";

const Footer = () => {

  const { showFooter } = useShowStore()
  // Create a Date object to get current UTC time
  let currentDate = new Date();

  // Get components of the UTC date and time
  let year = currentDate.getUTCFullYear();
  let month = ('0' + (currentDate.getUTCMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
  let day = ('0' + currentDate.getUTCDate()).slice(-2);
  let hours = ('0' + currentDate.getUTCHours()).slice(-2);
  let minutes = ('0' + currentDate.getUTCMinutes()).slice(-2);
  let seconds = ('0' + currentDate.getUTCSeconds()).slice(-2);

  // Format the timestamp string
  let timestamp = `© ${year} Tetteh Yaw Precious — ${hours}:${minutes} GMT`;

  return (
    <>
      {showFooter && (
        // <footer className="flex">

        //   <div className=" flex justify-center py-32 w-full items-center bg-gray-950"
        //     id="contact">
        //     <div className="flex items-center justify-center w-full">
        //       <div className=" w-[100%] flex flex-col items-center justify-center gap-8">
        //         <div className="flex flex-col items-center w-full md:flex md:flex-col md:items-center md:justify-center">
        //           <p className="md:text-xl font-sora font-extralight md:text-start text-center !text-white">
        //             {`If you really care about good design, Let's talk `}
        //           </p>
        //           {/* <div className="hidden md:block">
        //   <hr className="w-32 h-1 my-2 text-white bg-white border rounded-2xl" />
        // </div> */}
        //         </div>
        //         <div className="flex items-center justify-center gap-3 mb-6 border-b-4 w-fit">
        //           <a href={""} className="flex items-center gap-2">
        //             <div className="hidden md:flex">
        //               <i className="text-white ri-mail-line ri-4x"></i>
        //             </div>
        //             <span className="text-white md:text-[4rem] font-bold text-2xl font-sora">
        //               Send an Email
        //             </span>
        //           </a>
        //         </div>
        //         <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        //           <a
        //             target="_blank"
        //             rel="noopener noreferrer"
        //             href="hhttps://www.behance.net/yaw_precious"
        //             className="flex items-center font-sora justify-center gap-2 px-10 rounded-[0.5rem] py-3 text-lg text-center text-white shadow-neubrutalism-white transition ease-in border-2 delay-2"
        //           >
        //             <div className="flex border-white ">
        //               <i className="text-white ri-behance-line ri-lg"></i>
        //             </div>
        //             <span className="leading-0 h-fit text-base mt-[2px]">
        //               Behance
        //             </span>
        //           </a>
        //           <a
        //             className="flex items-center font-sora justify-center gap-2 px-10 py-3 rounded-[8px] text-lg text-center text-white transition shadow-neubrutalism-white ease-in border-2 rounded-75xl delay-2"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //             href="https://www.linkedin.com/in/precious-tetteh-431b0418b/"
        //           >
        //             <div className="flex">
        //               <i className="text-white ri-linkedin-box-line ri-lg"></i>
        //             </div>
        //             <span className="leading-0 h-fit text-base mt-[2px]">
        //               LinkedIn
        //             </span>
        //           </a>

        //           <a
        //             target="_blank"
        //             rel="noopener noreferrer"
        //             href="https://github.com/Tetteh-Yaw-Precious"
        //             className="flex items-center font-sora justify-center gap-2 px-12 py-3 text-lg text-center text-white transition shadow-neubrutalism-white ease-in border-2 rounded-[0.5rem] delay-2 rounded-75xl"
        //           >
        //             <div className="flex border-white ">
        //               <i className="text-white ri-github-line ri-lg"></i>
        //             </div>
        //             <span className="leading-0 h-fit text-base mt-[2px]">
        //               Github
        //             </span>
        //           </a>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </footer>
        <footer className=" md:h-[100vh] h-[75vh] flex items-center" style={{
          backgroundImage: 'url(/images/footerbackground.png)',
          backgroundColor: '#191819',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

          <section className="content-container flex md:flex-row flex-col-reverse w-full px-[10%] md:gap-0 gap-8">
            <div className="md:w-[4/5] w-full flex flex-col md:gap-14 gap-7">
              <h1 className="md:text-[4.5rem] text-2xl text-white font-semibold leading-[120%] font-sora tracking-[-2px] md:w-[70%] w-full">Let’s work on your next project  together</h1>
              <div className="md:flex md:flex-row flex-col md:gap-8 gap-4">
                <Button className='font-sora font-medium md:text-2xl text-lg md:px-14 px-8 py-6 md:!py-10 rounded-full md:w-[24rem] w-full md:mb-0 mb-4' style={{
                  background: ' linear-gradient(90deg, #66DA00 27%, #E1FBCB 100%)',
                }}>{`Book a  call`}
                </Button>
                <Button className='font-sora font-medium md:text-2xl text-lg md:px-14 px-8 py-6 md:!py-10 rounded-full md:w-[24rem] w-full md:mb-0 mb-4' style={{
                  background: ' transparent ',
                  border: '1px solid white',
                  color: 'white'
                }}>{`Contact me 👋`}
                </Button>
              </div>
              <p className="text-white md:text-lg text-sm font-sora italic">
                {`${timestamp.toString()}`}
              </p>
            </div>
            <div className="flex flex-col md:w-1/5 w-full gap-4">
              <h1 className="text-3xl text-white font-semibold leading-[120%] font-sora tracking-[-2px] md:flex hidden">Contact</h1>
              <div className="flex md:flex-col  flex-row gap-4 text-white md:text-lg text-base font-outfit w-full ">
                <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/precious-tetteh-431b0418b/" className="hover:underline">Linkedin</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.behance.net/yaw_precious" className="hover:underline">Behance</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Tetteh-Yaw-Precious" className="hover:underline">Github</Link>
                <Link target="_blank" rel="noopener noreferrer" href="https://www.behance.net/yaw_precious" className="hover:underline">Resume</Link>
              </div>
            </div>
          </section>
        </footer>
      )}

    </>
  );
};

export default Footer;
