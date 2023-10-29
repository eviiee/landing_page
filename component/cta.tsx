
import styles from './cta.module.scss';

export default function CTA({
    img,
    title,
    link,
} : {
    img : string,
    title : string,
    link : string,
}) {
    return (
        <a href={link} className={styles.cta} target='_blank'>
            <img src={img} alt={title} />
            <h4>{title}</h4>
        </a>
    )
}

const appStoreCta = () => CTA({
    img: '/Apple_logo.png',
    title: 'App Store',
    link: 'https://www.apple.com/',
});

const googlePlayCta = () => CTA({
    img: '/Google-Play-Logo.png',
    title: 'Google Play',
    link: 'https://play.google.com/',
});

export const appStoreCTA = appStoreCta;
export const googlePlayCTA = googlePlayCta;