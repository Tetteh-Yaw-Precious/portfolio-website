import React from 'react'
import Image from 'next/image'

const newprojectcard = ({ image, title, description, background, textColor }: any) => {
    return (
        <div className={`md:flex md:flex-row md:even:flex-row-reverse md:min-h-[100vh] w-full bg-[${background}]`}>
            <div className="md:w-[50%] w-full flex items-center">
                <Image src={image} width={1440} height={600} alt='skinplus' />
            </div>
            <div className="md:w-[50%] w-full flex items-center justify-center px-12 pt-5 pb-12">
                <div className={`flex flex-col text-[${textColor}] md:w-[60%] w-full`}>
                    <h1 className="font-sora md:text-4xl text-xl">{title}</h1>
                    <p className="leading-[150%] md:text-lg text-base">{description}</p>
                    <div>
                        <div className="flex gap-4 items-center font-sora mt-4">
                            <a className="cursor-pointer underline font-semibold">View live Project</a>
                            <a className="cursor-pointer underline font-semibold">Read Case Study</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default newprojectcard