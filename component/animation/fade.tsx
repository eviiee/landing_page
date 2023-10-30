import { useInView, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import styles from './animation.module.scss'

type direction = 'bottom' | 'left' | 'right'

export default function Fade({ children, delay = 500, direction = 'bottom' }: { children: string, delay?: number, direction?: direction }) {

    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { margin: '-100px 0px -100px 0px' })
    const outView = !useInView(ref, { margin: '400px 0px 400px 0px' })
    const [inViewPort, setInViewPort] = useState<boolean>(inView)

    useEffect(() => {
        if (inView) setInViewPort(true)
        if (outView) setInViewPort(false)
    }, [inView, outView])

    const textAnimate = {
        x: inViewPort ? 0 : direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
        y: inViewPort ? 0 : direction === 'bottom' ? 30 : 0,
        opacity: inViewPort ? 1 : 0,
    }

    return (
        <motion.span ref={ref} className={styles.fade}
            animate={textAnimate}
            transition={{ delay: inViewPort ? delay : 0, ease: 'easeInOut', duration: inViewPort ? 0.6 : 0 }}
        >
            {children}
        </motion.span>
    )
}