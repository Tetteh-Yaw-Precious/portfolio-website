'use client'
import React from 'react'
import Herosection from '@/components/projects/herosection';
import { getProjects } from "@/sanity/sanity-utils";
import '@sanity/asset-utils'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

export default function Project() {

  return (
    <>
      <section className='xl:h-[42.875rem] hero-background'>
        <div className="flex flex-col items-center h-full content-container py-[6.25rem] px-8 gap-14">
          <h1 className='md:text-7xl text-4xl font-sora !leading-[100%] font-medium text-center'> Creating Connections through Design
          </h1>
          <div className='flex flex-col items-center w-full border-4 border-red-500'>
            <Tabs variant='unstyled' className='flex flex-col items-center w-full gap-8'>
              <TabList className='flex gap-4 border'>
                <Tab _selected={{ color: 'red', bg: 'blue.500' }} className='px-12 border-2 md:text-lg text-base text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'>
                  All
                </Tab>
                <Tab _selected={{ color: 'red', bg: 'brand.wblue.100' }} className='px-12 border-2 md:text-lg text-base text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'>
                  Design
                </Tab>
                <Tab _selected={{ color: 'red', bg: 'blue.500' }} className='px-12 border-2 md:text-lg text-base text-gray-700 rounded-[0.5rem] font-outfit border-black md:h-14 h-12 shadow-neubrutalism-button font-light aria-selected:!bg-brandblack aria-selected:border-white aria-selected:text-white'>
                  Frontend Development
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel >
                  <div className='!w-full border border-red-500'>

                    <p>one!</p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>

        </div>

      </section>
    </>
  )
}


