import styles from './mockup.module.scss';

export default function Mockup({
    img,
}: {
    img: string,
}) {
    return (
        <div className={styles.mockup}>
            <img src={img} alt='Mockup Screen' />
            <img src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png" alt="iPhone Clay" />
        </div>
    )
}