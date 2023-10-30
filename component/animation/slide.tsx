import { useInView, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import styles from './animation.module.scss'

export default function Fade({ delay = 500, href, size = 30 }: { delay?: number, href: string, size?: number }) {

    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { margin: '-100px 0px -100px 0px' })
    const outView = !useInView(ref, { margin: '400px 0px 400px 0px' })
    const [inViewPort, setInViewPort] = useState<boolean>(inView)

    useEffect(() => {
        if (inView) setInViewPort(true)
        if (outView) setInViewPort(false)
    }, [inView, outView])

    const animate = {
        width: inViewPort ? `${size + 6}px` : '0px',
        opacity: inViewPort ? 1 : 0,
    }

    return (
        <motion.span ref={ref} className={styles.slide}
            animate={animate}
            transition={{ delay: inViewPort ? delay : 0, duration: inViewPort ? 0.6 : 0 }}
        >
            <img src={href} width={size} height={size} />
        </motion.span>
    )
}