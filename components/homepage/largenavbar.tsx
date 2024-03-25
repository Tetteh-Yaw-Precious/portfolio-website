import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/images/logo.svg'
import Link from 'next/link';

interface NavLink {
    label: string;
    href: string;
}

const navbarLinks: NavLink[] = [
    // { label: 'Work', href: '/work' },
    { label: 'About Me', href: '/about' },
    // { label: 'Blog', href: '/blog' },
];

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className='h-[6vh] xl:flex justify-between items-center hidden nav-background py-[5vh] px-[4%] rounded-20xl'
        >
            <Image src={logo} width={56} height={48} alt='logo' />
            <ul className='flex gap-12 items-center text-lg'>
                {navbarLinks.map((item, index) => {
                    return (
                        <Link href={item.href} key={index}> {item.label}</Link>
                    )
                })}
                <Link href='https://drive.google.com/file/d/1HK5s3GK5PoMg6YsSsCNRD2VQDjk1hU4F/view?usp=sharing' target="_blank">Resume</Link>
            </ul>
        </nav>
    );
};

export default Navbar;

// styles.css
