import Topnavbar from '@/components/topnavbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Head from 'next/head'

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
      <Head>
        <meta name="description" content="Hello I'm Yaw Precious, a Product Designer.
        I love to untangle difficult problems by tagging along from conceptualisation to 
        the actualisation of a product. Skills: Brand Strategy & Design | User Research | UI Design | ReactJs | NextJs <typescript>" />
      </Head>
      <body className='flex justify-center'>
        <main className='xl:w-[90rem] w-full'>
          <Topnavbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
