import React from 'react'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'

const newprojectcard = ({ image, title, description, background, textColor, slug, projectStatus, projectUrl }: any) => {
    return (
        <div className={`md:flex md:flex-col items-center justify-center w-full gap-[1.2rem]`}
        // style={{
        //     backgroundColor: background
        // }}

        >
            <div className="md:w-[100%] w-full flex items-center justify-center">
                <Image src={image} width={800} height={511} alt='skinplus' className='rounded-[2rem]' />
            </div>
            <div className="md:w-[100%] w-full flex items-center pt-5 pb-12">
                <div className={`flex md:w-[100%] px-[2%] w-full gap-4 items-start justify-between !text-gray-900`} style={{ color: textColor }}>
                    <h1 className="font-outfit md:text-xl text-xl leading-[120%] font-medium tracking-[-.5px] w-[70%]">{title}</h1>
                    {/* <p className="leading-[150%] md:text-lg text-base">{description}</p> */}
                    <div>
                        <div className="flex gap-4 items-center font-outfit">
                            {/* <span className='py-3 px-5 bg-gray-100 rounded-10xl font-normal text-base text-gray-500'> Coming Soon</span> */}
                            {projectStatus === 'complete' &&
                                <a className="cursor-pointer w-full font-normal px-5 py-2 rounded-full border-2 hover:bg-black hover:text-white border-black" href={`/projects/${slug}`}>

                                    Read Case study

                                </a>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default newprojectcard