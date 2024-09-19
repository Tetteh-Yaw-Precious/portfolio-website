import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/library/theme-config';
import { AnimatePresence } from 'framer-motion';
import Topnavbar from '@/components/topnavbar';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<AnimatePresence mode='wait'>
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
		</ChakraProvider>
	);
}

export default dynamic(() => Promise.resolve(MyApp), {
	ssr: false,
});
