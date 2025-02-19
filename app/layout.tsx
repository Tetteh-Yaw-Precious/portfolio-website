import Topnavbar from '@/components/topnavbar';
import './globals.css';
import Footer from '@/components/footer';
import Head from 'next/head';
import { Providers } from './providers';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Define default values
	let title = 'Yaw Precious | Product Designer';
	let description =
		"Hello I'm Yaw Precious, a Product Designer with focus on UX Research, business strategy & Engineering";

	// Change title and description based on the current route
	// if (router === '/about') {
	// 	title = 'About Yaw Precious';
	// 	description = 'Learn more about Yaw Precious, a Product Designer.';
	// } else if (router.startsWith('/projects')) {
	// 	title = 'Projects | Yaw Precious';
	// 	description = '';
	// }
	// Add more conditions as needed for other routes

	return (
		<html lang='en' className={inter.className}>
			<head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta charSet='UTF-8' />
			</head>
			<body className='flex justify-center'>
				<Script
					strategy='afterInteractive' // Ensures script loads after initial render
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTM_ID}');
        `,
					}}
				/>
				<Providers>
					<main className='flex flex-col justify-center items-center w-full xl:w-full scroll-smooth'>
						<main className='md:max-w-[1440px] w-full'>
							<Topnavbar />
							{children}
							<Footer />
						</main>
						<Analytics />
					</main>
				</Providers>
			</body>
		</html>
	);
}
