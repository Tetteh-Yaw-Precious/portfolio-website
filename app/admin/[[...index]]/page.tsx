'use client'
import { client } from '@/client'
import { config } from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'


export default function AdminPage() {
  return <NextStudio config={config} />
}