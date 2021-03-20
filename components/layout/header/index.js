// content
import { navLinks } from './content';

// dependencies
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import classNames from 'classNames';

const Header = ({

}) => {

    const hamburgerRef = useRef(null);
    const navRef = useRef(null);

    const [ mobileHeaderActive, setMobileHeaderActive ] = useState(false);

    const handleMobileHeaderToggle = () => {
        setMobileHeaderActive(!mobileHeaderActive);
    }

    // closes menu when the user clicks off the menu
    const clickOutside = (e) => {
        if (!navRef.current) return; // prevent page breakdown in event of a bug
        if (navRef.current.contains(e.target)) return; // don't close on header or nav menu click
        if (e.current === hamburgerRef.current) return; // don't close on hamburger click
        handleMobileHeaderToggle();
    }

    const exitKey = (e) => {
        mobileHeaderActive && e.keyCode === 27 && handleMobileHeaderToggle();
    }

    useEffect( () => {
        document.addEventListener('keydown', exitKey);
        document.addEventListener('click', clickOutside);
        
        return () => {
            document.removeEventListener('keydown', exitKey);
            document.removeEventListener('click', clickOutside);
        }
    })

    return (
        <section className='header-container'>
            <header className='header-wrapper'>

                    <div className='header-branding-wrapper'>
                        <h1 className='header-branding-title'>pofo</h1>
                    </div>

                    <nav ref={navRef} className='header-nav-menu'>
                        <button ref={hamburgerRef} onClick={handleMobileHeaderToggle} className="header-nav-toggle">
                            <span className="screen-reader">Menu</span>
                                <span className="hamburger">
                                    <span className="hamburger-inner"></span>
                                </span>
                        </button>

                        <ul className={classNames('header-links-wrapper', mobileHeaderActive === true ? 'header-mobile-active' : '')}>
                            {
                                navLinks.map( linkObject => {
                                    const { mainLinkTitle, mainLinkDestination } = linkObject.mainLink;
                                    return (
                                        <li className='header-list-item'>
                                            <Link href={mainLinkDestination} classname='header-link'>{mainLinkTitle}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>

            </header>
        </section>
    );
}

export default Header;