import { motion } from 'framer-motion';
import React, { ReactNode, FC } from 'react';

interface InnerProps {
    children: ReactNode;
}


const Inner: FC<InnerProps> = ({ children }) => {

    const anim = (variants: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: 'exit',
            variants
        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1,
            transition: {
                duration: 2
            }
        },
        exit: {
            opacity: 1
        }
    }
    return (
        <motion.div {...anim(opacity)} className="page">
            {children}
        </motion.div>
    );
};

export default Inner;
