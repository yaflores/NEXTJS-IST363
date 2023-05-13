import ButtonUI from './ButtonUI';

import styles from './navoverlay.module.scss';

import { getPages } from '../lib/api';
import Link from 'next/link';

const NavOverlay = ({ closeHandler }) => {
    const pages = getPages();
    return <div className={styles.navoverlay}>
        <ButtonUI
            icon="close"
            clickHandler={closeHandler}
        />
        <nav className={styles.navmobile}>
        <ul className={styles.navmobile_list}>
            {pages.map((page, index)=> {
                const {title, slug} = page;
                return <li key={`navDesktop${index}`}>
                    {slug ?
                        <Link href={`/${slug}`}> {title} </Link>
                    : title
                    }
                </li>
            })}
        </ul>
    </nav>
    </div>
}
export default NavOverlay;