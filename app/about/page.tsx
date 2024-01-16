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
      name: 'UI/UX Design',
      description: 'Crafting seamless and engaging user experiences, combining functionality with aesthetic appeal.'
    },
    {
      name: 'Frontend Technologies',
      description: 'Proficiency in HTMl, CSS, SCSS, Javascript, Typescript, ReactJS, NextJS'
    },
    {
      name: 'Brand Design',
      description: 'Creating cohesive brand identities and strategies that resonate with the target audience and giving businesses positioning'
    }
  ]

  return (
    <Curve>
      <div className="flex flex-col py-[8rem] gap-[10rem]">
        <section className="flex flex-row px-[15%] items-center gap-12">
          <div>
            <h1 className="font-clash text-6xl font-semibold tracking-tighter leading-none mb-4">{`I'm Yaw Precious`}</h1>
            <p className="text-lg leading-[175%] font-normal">
              Hello, I’m Tetteh Yaw Precious for the past two years I’ve found myself working as a Product Designer while picking up various skills like Brand Design & Frontend Development.
              These skills go a long way to impact how I collaborate with businesses and optimize my output. I love to put myself in uncomfortable situations so I can grow and learn. As a great talker, I find myself dragging people into conversations that excite them be it design or how we can make our environment a better place with the creations we make by putting humanity first.
            </p>
          </div>
          <div>
            {/* Adjusted the height, make sure to replace 'mypic.png' with your actual image file */}
            <Image src={'/images/mypic.png'} width={3500} height={400} alt="mypic" />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-clash text-5xl font-semibold tracking-tighter">My Skills</h1>
          <div className="flex justify-between items-center gap-10 w-full px-[15%] h-[10rem]">
            {skills.map((skill, index) => (
              <div key={index} className="w-1/3 h-full flex justify-start flex-col">
                <h3 className="font-semibold text-xl font-clash tracking-tight">{skill.name}</h3>
                <p className="text-lg text-gray-800 leading-[175%] font-normal">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-clash text-5xl tracking-tighter font-semibold leading-none">{`Professional Journey`}</h1>
          <p className="font-normal text-xl tracking-tight leading-none mb-4 text-gray-700">{`In my journey so far, I've had the privilege of contributing my skills to several remarkable companies`}</p>
          <div className="flex justify-between items-center w-full px-[22%]">
            {companies.map((company, index) => (
              <div key={index} className="w-1/3 h-full flex justify-start flex-col">
                <Image src={`${company.link}`} alt="company logo" width={300} height={75} />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-clash text-5xl tracking-tighter font-semibold leading-none">{`Out of the Blue`}</h1>
          <p className="font-light text-xl tracking-tight">{`A few things I have going on at the moment`}</p>
          <div className="flex flex-col justify-between items-center w-full px-[25%] gap-4">
            {otherthings.map((item, index) => (
              <div key={index} className="w-full h-full flex justify-start flex-col py-[2.5rem] border-2 rounded-md border-black">
                <p className="text-center font-semibold font-clash text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Curve>
  );
}