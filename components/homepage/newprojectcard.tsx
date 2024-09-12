import React from 'react'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'

const newprojectcard = ({ image, title, description, background, textColor, slug, projectStatus, projectUrl }: any) => {
    return (
        <div className={`md:flex md:flex-row md:even:flex-row-reverse md:min-h-[60vh] w-full gap-[5%]`}
            style={{
                backgroundColor: background
            }}
        >
            <div className="md:w-[50%] w-full flex items-center">
                <Image src={image} width={1440} height={600} alt='skinplus' />
            </div>
            <div className="md:w-[40%] w-full flex items-center px-12 pt-5 pb-12 ">
                <div className={`flex flex-col md:w-[80%] w-full gap-4`} style={{ color: textColor }}>
                    <h1 className="font-outfit md:text-[32px] text-xl leading-[120%] font-medium tracking-[-.5px]">{title}</h1>
                    {/* <p className="leading-[150%] md:text-lg text-base">{description}</p> */}
                    <div>
                        <div className="flex gap-4 items-center font-outfit mt-4">
                            {/* <span className='py-3 px-5 bg-gray-100 rounded-10xl font-normal text-base text-gray-500'> Coming Soon</span> */}
                            {projectStatus === 'complete' &&
                                <a className="cursor-pointer font-normal px-5 py-2 rounded-2 border hover:bg-black hover:text-white border-black rounded-[.25rem]" target="_blank" href={`/projects/${slug}`}>

                                    Read Case study

                                </a>}
                            {/* <a className="cursor-pointer underline font-semibold" href={`/projects/${slug}`}>View live Project</a>
                            <a className="cursor-pointer underline font-semibold" href={`/projects/${slug}`}>Read Case Study</a> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default newprojectcard