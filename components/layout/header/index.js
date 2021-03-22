// dependencies
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import classNames from 'classNames';

// content
import { headerNavLinks } from './content';

// partials
import Logo from '../logo';


const Header = ({
    siteTitle
}) => {

    // hamburger icon
    const hamburgerRef = useRef(null);
    // navigation menu, including mobile nav
    const navRef = useRef(null);

    const [ mobileHeaderActive, setMobileHeaderActive ] = useState(false);

    const closeMobileHeader = () => {
        document.body.classList.remove('off-nav-is-active');
        setMobileHeaderActive(false);
    }

    const openMobileHeader = () => {
        document.body.classList.add('off-nav-is-active');
        setMobileHeaderActive(true);
    }

    const exitKey = (e) => {
        mobileHeaderActive && e.keyCode === 27 && closeMobileHeader();
    }

    // closes menu when the user clicks off the menu
    const clickOutside = (e) => {
        if (!navRef.current) return; // prevent page breakdown in event of a bug
        if (navRef.current.contains(e.target)) return; // don't close on header or nav menu click
        if (e.current === hamburgerRef.current) return; // don't close on hamburger click
        closeMobileHeader();
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
                        <Logo logoTitle={siteTitle} />
                    </div>

                    <nav ref={navRef} className='header-nav-menu'>
                        <button ref={hamburgerRef} onClick={mobileHeaderActive === true ? closeMobileHeader : openMobileHeader} className="header-nav-toggle">
                            <span className="screen-reader">Menu</span>
                                <span className="hamburger">
                                    <span className="hamburger-inner"></span>
                                </span>
                        </button>

                        <ul className={classNames('header-links-wrapper', mobileHeaderActive === true ? 'header-mobile-active' : '')}>
                            {
                                headerNavLinks.map( linkObject => {
                                    const { mainLinkTitle, mainLinkDestination } = linkObject.mainLink;
                                    return (
                                        <li key={mainLinkTitle} onClick={closeMobileHeader} className='header-list-item site-link'>
                                            <Link href={mainLinkDestination}>{mainLinkTitle}</Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>

            </header>
        </section>
    );
}

export default Header;