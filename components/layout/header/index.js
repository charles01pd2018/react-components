// content
import { navLinks } from './content';

// dependencies
import Link from 'next/link';
import { useRef, useState } from 'react';
import classNames from 'classNames';

const Header = ({

}) => {

    const hamburgerRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const [ mobileHeaderActive, setMobileHeaderActive ] = useState(false);

    const handleMobileHeaderToggle = () => {
        setMobileHeaderActive(!mobileHeaderActive);
    }

    // closes menu when the user clicks off the menu
    const clickOutside = () => {

    }

    return (
        <section className='header-container'>
            <header className='header-wrapper'>

                    <div className='header-branding-wrapper'>
                        <h1 className='header-branding-title'>pofo</h1>
                    </div>

                    <nav className='header-nav-menu'>
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