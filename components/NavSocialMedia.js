import Image from 'next/image';
import styles from './navsocialmedia.module.scss';

const accounts = [
    {
        name: "Facebook",
        slug: "facebook",
        url: "https://www.facebook.com/subaruofamerica"
    },
    {
        name: "Twitter",
        slug: "twitter",
        url: "https://www.twitter.com/subaru_usa"
    },
    {
        name: "Instagram",
        slug: "instagram",
        url: "https://instagram.com/subaru_usa"
    },
    {
        name: "Youtube",
        slug: "youtube",
        url: "https://www.youtube.com/user/Subaru"
    },
]

const NavSocialMedia = () => {
    return <nav>
        <ul className={styles.nav_socialmedia}>
            {accounts.map((account, index) => {
                const { name, slug, url } = account;
                return <li key={`socialMediaLink${index}`}>
                    <a href={url} target="_blank">
                        <Image
                            src={`/icons/${slug}.svg`}
                            alt={`${name} icon`}
                            width={50}
                            height={50}
                        />
                    </a>
                </li>
            })}
        </ul>
    </nav>
}
export default NavSocialMedia;