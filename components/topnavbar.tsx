import Image from 'next/image'
import React from 'react'
import myLogo from '../public/images/logo.png'
import { Bars3Icon } from '@heroicons/react/24/outline'

function Topnavbar() {
  return (
    <div className='h-[6.25rem] !px-[5%] flex items-center justify-between'>
      <Image src={myLogo} width={'143'} alt="Yaw Precious Logo" />
      <a className='p-2 border-2 border-black rounded-full'>
        <Bars3Icon className='w-6 h-6 md:w-12 md:h-12' />
      </a>
    </div>
  )
}

export default Topnavbar