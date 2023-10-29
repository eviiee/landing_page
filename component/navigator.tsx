'use client';

import styles from './navigator.module.scss';

export default function Navigator() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    }

    return (
        <aside className={styles.navigator}>
            <img src="/assets/icon/down-arrow.svg" alt="" onClick={scrollToTop} />
            <img src="/assets/icon/down-arrow.svg" alt="" onClick={scrollToBottom} />
        </aside>
    )
}