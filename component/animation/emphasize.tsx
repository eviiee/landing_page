import { useInView, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import styles from './animation.module.scss'

export default function Emphasize({ children, delay = 500, color = '#00ff3d' }: { children: string, delay?: number, color?: string }) {

    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { margin: '-100px 0px -100px 0px' })
    const outView = !useInView(ref, { margin: '400px 0px 400px 0px' })
    const [inViewPort, setInViewPort] = useState<boolean>(inView)

    useEffect(() => {
        if (inView) setInViewPort(true)
        if (outView) setInViewPort(false)
    }, [inView, outView])

    const textAnimate = {
        fontWeight: inViewPort ? 700 : 500,
    }

    const pathAnimate = {
        strokeDashoffset: inViewPort ? 0 : 78,
        strokeDasharray: 78,
    }

    return (
        <span ref={ref} className={styles.emphasize}>
            <motion.svg className={styles.animated}
                preserveAspectRatio="none"
                viewBox="0 0 92 16"
            >
                <motion.path
                    animate={pathAnimate}
                    transition={{ delay: inViewPort ? delay : 0, ease: 'easeInOut', duration: inViewPort ? 0.6 : 0 }}
                    d="m7.49999,8.14104c0,0 0.88912,0 1.77818,0c1.77818,0 3.5563,0 4.88998,0c1.33362,0 2.06598,-0.20781 4.00086,-0.42735c1.73063,-0.19637 3.5563,0 4.88992,0c1.33368,0 3.11847,0.05222 4.00092,0c1.81913,-0.10765 3.5563,-0.21368 5.33448,-0.21368c1.77818,0 3.55636,0 5.33448,0c1.77818,0 3.55636,0 6.2236,0c1.77818,0 4.00086,0 5.77904,0c2.22274,0 4.00086,0 5.77904,0c3.55636,0 6.2236,0 8.89084,0c3.1118,0 5.29346,0.10603 7.11266,0.21368c1.76485,0.10443 2.66724,0 3.55636,0c0.88906,0 1.77812,0 3.1118,0c0.4445,0 2.16871,0.10544 3.5563,0.21367c1.31641,0.10268 2.22274,0 2.22274,0l0.88906,0"
                    strokeWidth={15}
                    fill="none"
                    stroke={color}
                    strokeLinecap='round'
                />
            </motion.svg>
            <motion.span
                animate={textAnimate}
                transition={{ delay: inViewPort ? delay : 0, ease: 'easeInOut', duration: inViewPort ? 0.6 : 0 }}
            >{children}</motion.span>
        </span>
    )
}