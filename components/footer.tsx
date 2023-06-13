import "remixicon/fonts/remixicon.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center md:py-16 ">
      <div className=" flex justify-center py-32 h-[31.25rem] rounded-[16px] w-[77.5rem] items-center bg-brandblack"
        id="contact">

        <div className="flex items-center justify-center w-full">
          <div className=" w-[100%] flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center w-full md:flex md:flex-col md:items-center md:justify-center">
              <h1 className="md:text-xl font-outfit font-extralight md:text-start text-center !text-white">
                Let’s stay in touch, it’d be nice speaking to you
              </h1>
              {/* <div className="hidden md:block">
						<hr className="w-32 h-1 my-2 text-white bg-white border rounded-2xl" />
					</div> */}
            </div>
            <div className="flex items-center justify-center gap-3 mb-6 border-b-4 w-fit">
              <Link href={"#"} className="flex items-center gap-2">
                <div className="hidden md:flex">
                  <i className="text-white ri-mail-line ri-4x"></i>
                </div>
                <span className="text-white md:text-[4rem] font-bold text-2xl ">
                  Send an Email
                </span>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="hhttps://www.behance.net/yaw_precious"
                className="flex items-center font-outfit justify-center gap-2 px-10 rounded-[0.5rem] py-3 text-lg text-center text-white shadow-neubrutalism-white transition ease-in border-2 delay-2"
              >
                <div className="flex border-white ">
                  <i className="text-white ri-behance-line ri-lg"></i>
                </div>
                <span className="leading-0 h-fit text-base mt-[2px]">
                  Behance
                </span>
              </a>
              <a
                className="flex items-center font-outfit justify-center gap-2 px-10 py-3 rounded-[8px] text-lg text-center text-white transition shadow-neubrutalism-white ease-in border-2 rounded-75xl delay-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/precious-tetteh-431b0418b/"
              >
                <div className="flex">
                  <i className="text-white ri-linkedin-box-line ri-lg"></i>
                </div>
                <span className="leading-0 h-fit text-base mt-[2px]">
                  LinkedIn
                </span>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Tetteh-Yaw-Precious"
                className="flex items-center font-outfit justify-center gap-2 px-12 py-3 text-lg text-center text-white transition shadow-neubrutalism-white ease-in border-2 rounded-[0.5rem] delay-2 rounded-75xl"
              >
                <div className="flex border-white ">
                  <i className="text-white ri-github-line ri-lg"></i>
                </div>
                <span className="leading-0 h-fit text-base mt-[2px]">
                  Github
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
