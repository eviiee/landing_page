'use client';

import React from 'react';
import styles from './collapsable.module.scss';
import { motion } from 'framer-motion';

export default function Collapsable({
    category,
    categoryColor,
    title,
    children,
}: {
    category: string,
    categoryColor: string,
    title: string,
    children: React.ReactNode,
}) {

    const [isCollapsed, setIsCollapsed] = React.useState(true);
    const heightState: string = isCollapsed ? '0px' : 'auto';
    const opacityState: number = isCollapsed ? 0 : 1;

    const highlightStyle = {
        '--highlight-rgb': categoryColor
    } as React.CSSProperties;

    return (
        <div onClick={() => setIsCollapsed(!isCollapsed)} className={styles.collapsable}>
            <div className={styles.title}>
                <h5 style={{ color: categoryColor }}>{category}</h5>
                <h5>{title}</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none" className={isCollapsed ? styles.down : styles.up}>
                    <path d="M1 1L6 6L11 1" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <motion.div animate={{ height: heightState, opacity: opacityState }} className={styles.content} style={highlightStyle}>{children}</motion.div>
        </div>
    );

}