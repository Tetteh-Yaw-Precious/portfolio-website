import Topnavbar from '@/components/topnavbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yaw Precious | Product Designer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex justify-center'>
        <main className='border xl:w-[1440px] w-full'>
          <Topnavbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
