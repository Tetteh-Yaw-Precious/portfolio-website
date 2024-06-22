import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const aboutme = () => {
    const impactedClients = [
        'impact-clients-01.png', 'impact-clients-02.png', 'impact-clients-03.png', 'impact-clients-04.png', 'impact-clients-05.png', 'impact-clients-06.png', 'impact-clients-07.png'
    ]
    return (
        <div className='min-h-[100vh] space-y-20 flex flex-col justify-center md:py-0 py-[10%]'>
            <div className='flex items-center justify-center md:px-[10%] px-[15%] '>
                <div className='flex md:flex-row flex-col-reverse md:gap-32 gap-6'>
                    <div className='md:w-[30%] w-full '>
                        <h4 className='font-sora md:text-xl text-base font-semibold md:mb-3 mb-1'>What I do on a day to day</h4>
                        <ul className='!font-outfit md:text-base text-sm font-normal space-y-1 ml-5' style={{ listStyleType: 'disc' }}>
                            <li className='list-item'>Designing of Apps & Websites</li>
                            <li>Conducting interviews, analyzing data and generating insights</li>
                            <li>Business design & marketing strategies</li>
                            <li>Brand & Product Strategies</li>
                            <li>Improving customer experiences through user testing</li>
                            <li>Aiding developers with my engineering expertise using ReactJS, NextJS, typescript, tailwindcss & sanity CMS</li>
                            <li>Watch Anime (currently watching: One Piece & Jujutsu Kaisen)</li>
                            <li>I love to teach and share my knowledge</li>
                        </ul>
                    </div>
                    <div className='!leading-[120%] h-full flex justify-center items-center md:w-[52%] w-full'>
                        <p className='md:!text-2xl text-base !leading-[150%] md:tracking-[-0.5px] tracking-[-0.2] text-left font-outfit text-gray-900 !font-normal'>{
                            `
          I have three years of experience as a Product Designer, specializing in research, strategy, UI, brand and business design. I leverage my frontend technology skills to contribute effectively to my teams. I enjoy sharing my knowledge and am currently passionate about data-driven design, building strong teams, and creating cohesive brand experiences.
        `}</p>
                    </div>
                </div>
            </div>
            <section className="impact flex md:flex-row flex-col md:px-[10%] px-none px-none md:gap-15 gap-4" style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(25, 24, 25, 0.05) 67.69%, rgba(255, 255, 255, 0.05) 88.32%)'
            }}>
                <div className='md:w-[15%] w-full md:pr-[4rem] pr-0 flex md:items-center md:justify-normal justify-center md:bg-none !md:mb-0 md:mt-0  mt-5'>
                    <h4 className='font-sora md:text-lg text-base font-semibold leading-[120%]'>Where I’ve made an impact</h4>
                </div>
                <div className='Capitalize md:h-[140px] h-[90px] md:w-[80%] w-full flex items-center' >
                    <Marquee speed={100} pauseOnHover={true}>
                        {impactedClients.map((item, index) => {
                            return (
                                <div key={index} className='px-6'>
                                    <Image src={`/images/${item}`} alt={'client'} width={135} height={90} />
                                </div>
                            )
                        })}
                    </Marquee>
                </div>
            </section>
        </div>
    )
}

export default aboutme