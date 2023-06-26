'use client'
import React from 'react'
import Herosection from '@/components/projects/herosection';
import { getProjects } from "@/sanity/sanity-utils";
import '@sanity/asset-utils'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import ProjectSection from '@/components/projects/projectSection';
export default function Project() {

  return (
    <>
      <Herosection />
      <ProjectSection />
    </>
  )
}