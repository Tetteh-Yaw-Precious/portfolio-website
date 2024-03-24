// Marquee.tsx

import React from 'react';
import Marquee from 'react-fast-marquee';

interface MarqueeProps {
    children: React.ReactNode;
    speed?: number;
    pauseOnHover?: boolean // Optional prop for speed control
}

const MarqueeComponent: React.FC<MarqueeProps> = ({ children, speed = 50, pauseOnHover }) => {
    return (
        <Marquee gradient={false} speed={speed} pauseOnHover={pauseOnHover}>
            {children}
        </Marquee>
    );
};

export default MarqueeComponent;
