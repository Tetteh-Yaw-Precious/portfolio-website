'use client';
import { useShowStore } from '@/context/context';
import { config } from '@/sanity.config';
import { NextStudio } from 'next-sanity/studio';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
	const { showNav, setShowNav, setShowFooter, showFooter } = useShowStore();

	useEffect(() => {
		setShowNav(false);
		setShowFooter(false);
	}, [setShowNav, showNav, setShowFooter]);

	return <NextStudio config={config} />;
}
