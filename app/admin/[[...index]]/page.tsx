'use client'
import { useShowStore } from '@/context/context'
import { config } from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminPage() {

  const { showNav, setShowNav } = useShowStore()

  useEffect(() => {
    setShowNav(false)
    console.log(showNav)
  }, [setShowNav, showNav])

  return <NextStudio config={config} />
}