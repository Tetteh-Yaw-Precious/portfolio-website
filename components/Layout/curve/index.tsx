import { motion } from 'framer-motion';
import React, { ReactNode, FC, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { text, curve, translate } from './anim';

interface InnerProps {
    children: ReactNode;
}



type RoutesEnum = {
    "/": "Home";
    "/projects": "Projects";
    "/about": "About Me";
    [key: string]: string; // Index signature for dynamic keys
};


const routes: RoutesEnum = {
    "/": "Home",
    "/projects": "Projects",
    "/about": "About Me",
};

const anim = (variants: any) => {
    return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit"
    };
};

const Curve: FC<InnerProps> = ({ children }) => {
    const pathname: any = usePathname();
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    });

    // Add back the useEffect for resizing
    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth as any,
                height: window.innerHeight as any
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className='page curve' style={{ backgroundColor: '#yourBackgroundColor' }}>
            <div style={{ opacity: dimensions.width == null ? 1 : 0 }} className='background' />
            <motion.p className='route font-sora' {...anim(text)}>
                {routes[pathname]}
            </motion.p>
            {dimensions.width != null && <SVG {...dimensions} />}
            {children}
        </div>
    );
};

const SVG: FC<{ height: any; width: any }> = ({ height, width }) => {

    const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300
    `;

    return (
        <motion.svg {...anim(translate)} className='backgroundsvg'>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    );
};

export default Curve;
