import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const aboutme = () => {
    const impactedClients = [
        'impact-clients-01.png', 'impact-clients-02.png', 'impact-clients-03.png', 'impact-clients-04.png', 'impact-clients-05.png', 'impact-clients-06.png', 'impact-clients-07.png'
    ]
    return (
        <div className='md:min-h-[40vh] min-h-[100vh] flex flex-col justify-center md:py-0 scroll-smooth' id='about' >
            <div className='flex items-center justify-center md:px-[20%] px-[10%] md:py-[8rem] py-[4rem]'>
                <div className='flex md:flex-row flex-col-reverse md:gap-32 gap-6'>
                    <div className='!leading-[120%] h-full flex justify-center items-center w-full'>
                        <p className='md:!text-xl text-base !leading-[190%] md:tracking-[-0.2px] tracking-[-0.2] md:text-left text-center font-outfit text-gray-900 !font-normal'>{
                            `
Hello! I’m Yaw Precious, a Product Designer crafting crafting intuitive apps and websites that enhance both user experiences and business operations. My work involves conducting user interviews to uncover key insights, translating them into sweet user experiences, and collaborating closely with developers with my coding expertise when needed.
I specialize in user research, UI/UX design, and business strategy, delivering data-driven solutions that align with business goals. Recently, I've been diving deeper into frontend development, I'm fascinated by NextJS and AstroJS.
        `}</p>
                    </div>
                </div>
            </div>
            <section className="impact flex md:flex-row flex-col md:px-[10%] px-none px-none md:gap-15 gap-4" style={{
                background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(25, 24, 25, 0.05) 67.69%, rgba(255, 255, 255, 0.05) 88.32%)'
            }}>
                <div className='md:w-[15%] w-full md:pr-[0rem] pr-0 flex md:items-center md:justify-normal justify-center md:bg-none !md:mb-0 md:mt-0  mt-5'>
                    <h4 className='font-outfit md:text-lg w-full text-base md:text-start text-center font-semibold leading-[120%]'>Where I’ve made an impact</h4>
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