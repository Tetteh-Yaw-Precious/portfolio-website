'use client'
import Topnavbar from '@/components/topnavbar'
import './globals.css'
import Footer from '@/components/footer'
import Head from 'next/head'
import { Providers } from './providers'
import Script from 'next/script'


// export const metadata = {
//   title: 'Yaw Precious | Product Designer',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <title>Yaw Precious | Product Designer</title>
        <meta name="description" content="Hello I'm Yaw Precious, a Product Designer with focus on UX Research, business strategy & Engineering" />
        <meta charSet="UTF-8" />

      </head>

      <body className='flex justify-center '>
        <Script
          strategy="afterInteractive" // Ensures script loads after initial render
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
        ` }}
        />
        <Providers>
          <main className='w-full xl:w-full scroll-smooth flex flex-col items-center justify-center'>
            <main className='md:max-w-[1440px] w-full'>
              <Topnavbar />
              {children}
              <Footer />
            </main>
          </main>
        </Providers>
      </body>
    </html>

  )
}
