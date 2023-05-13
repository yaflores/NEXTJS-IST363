import { useState } from 'react';

import ButtonUI from './ButtonUI';
import Link from 'next/link';
import Logo from './Logo';
import NavOverlay from './NavOverlay';
import NavDesktop from './NavDesktop';

import styles from './header.module.scss';

const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
        <Link href="/">
            <Logo />
        </Link> 
        <ButtonUI
            icon="menu" 
            clickHandler = {() => {
                setMenuVisible(true);
            }}
            id="menuBtn"
        /> 
        < NavDesktop />
        {isMenuVisible && 
            <NavOverlay
                closeHandler = {()=> {
                    setMenuVisible(false);
                }}
            /> 
        } 
    </header>
}
export default Header