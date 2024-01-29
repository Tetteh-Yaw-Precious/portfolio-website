'use client'
import Curve from "@/components/Layout/curve";
import Inner from "@/components/Layout/inner";
import Image from "next/image";

export default function About() {

  const otherthings = [
    'Currently mentoring Junior Designers & being Mentored',
    'Training Interns & learning along the way', 'Building a SAAS startup with my friends',
    'Learning and unlearning'
  ]
  const companies = [
    {
      name: 'dawncraft',
      link: '/images/dawncraft-logo.png'
    },
    {
      name: 'dawncraft',
      link: '/images/wia-logo.png'
    },
    {
      name: 'megafortune',
      link: '/images/omni-logo.png'
    },
    {
      name: 'megafortune',
      link: '/images/megafortune-logo.png'
    }
  ]

  const skills = [
    {
      name: 'UX Research',
      description: 'I understand users, delving into their behaviors, needs, and motivations. I employ a variety of research methods, including surveys, interviews, usability testing, and data analysis, to gather valuable insights'
    },
    {
      name: 'UX Design',
      description: 'Armed with valuable insights from user research, I translate research findings into tangible interfaces, wireframes and prototypes'
    },
    {
      name: 'Brand Strategy & Design',
      description: 'Treating products as companies on their own, I help businesses find product market fit through brand & product positioning, personality and identity design'
    },
    {
      name: 'Frontend Development',
      description: 'I use my knowledge of HTML, CSS, SCSS, and JavaScript/TypeScript, especially with ReactJS and NextJS, to shape design systems and components. This helps me create user-friendly and visually appealing interfaces that work smoothly and look great.'
    }
  ]

  return (
    <Curve>
      <div className="flex flex-col md:py-[8rem] py-[6rem] md:gap-[10rem] gap-[5rem]">
        <section className="flex md:flex-row flex-col-reverse px-[15%] items-center gap-12">
          <div>
            <h1 className="font-clash md:text-6xl text-4xl font-semibold tracking-normal leading-none mb-4">{`I'm Yaw Precious`}</h1>
            <p className="md:text-lg text-base leading-[175%] font-normal">
              {`Hello, I'm Tetteh Yaw Precious. I've been working as a Product Designer for the past two years, gaining skills in Brand Design and Frontend Development along the way. These skills enhance how I collaborate with businesses and improve my work. I thrive on challenges to foster growth and learning. I'm a passionate communicator, sparking exciting conversations about design and making the world a better place through our creations, always prioritizing humanity.`}
            </p>
          </div>
          <div>
            {/* Adjusted the height, make sure to replace 'mypic.png' with your actual image file */}
            <Image src={'/images/mypic.png'} width={3500} height={400} alt="mypic" />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-6 bg-gray-200 text-black py-[15%]">
          <h1 className="font-clash md:text-5xl text-2xl  text-center md:text-start md:leading-normal leading-[100%] font-semibold tracking-loose">I’ve got super powers 🦸🏾‍♂️</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2 w-full md:px-[25%] px-[10%]">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col md:items-start md:justify-start justify-center items-center p-4 rounded-md">
                <h3 className="font-semibold md:text-xl text-large font-clash tracking-tight text-center">{skill.name}</h3>
                <p className="text-base text-black leading-[175%] font-normal md:text-start text-center">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="flex flex-col items-center justify-center md:gap-6 gap-2">
          <h1 className="font-clash md:text-5xl text-2xl tracking-tighter font-semibold leading-none">{`Professional Journey`}</h1>
          <p className="font-normal md:text-xl text-base md:text-start text-center tracking-tight leading-normal mb-4 text-gray-700">{`In my journey so far, I've had the privilege of contributing my skills to several remarkable companies`}</p>
          <div className="flex md:flex-row flex-col justify-between items-center w-full md:px-[22%] px-[10%] md:gap-0 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="md:w-1/3 w-full h-full flex justify-start flex-col">
                <Image src={`${company.link}`} alt="company logo" width={300} height={75} />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center md:gap-6 gap-4">
          <h1 className="font-clash md:text-5xl text-2xl tracking-tighter font-semibold leading-none">{`Out of the Blue`}</h1>
          <p className="font-light md:text-xl text-base leading-none md:text-start text-center tracking-tight">{`A few things I have going on at the moment`}</p>
          <div className="flex flex-col justify-between items-center w-full md:px-[25%] px-[10%] gap-4">
            {otherthings.map((item, index) => (
              <div key={index} className="w-full h-full flex justify-start flex-col py-[2.5rem] border-2 rounded-md border-black">
                <p className="text-center font-semibold font-clash md:text-lg text-base">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Curve>
  );
}