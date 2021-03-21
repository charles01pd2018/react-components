// dependencies
import Link from 'next/link';

// content
import { footerNavLinks } from './content';

// partials
import Logo from '../logo';

const Footer = () => {

    return (
        <section className='footer-container'>
                <footer className='footer-wrapper'>
                    <div className='footer-branding-wrapper'>
                        <Logo />
                    </div>

                    <nav className='container footer-nav-menu'>
                        <div className='footer-category-wrapper'>
                            {
                                footerNavLinks.map( ({ categoryDescription, categoryLinks }) => {
                                    return (
                                        <>
                                            <h3 className='footer-category-title'>{categoryDescription}</h3>

                                            <ul className='footer-category-links-wrapper'>
                                                {
                                                    categoryLinks.map( ({ linkTitle, linkDestination }) => (
                                                        <li key={linkTitle} className='footer-list-item site-link'>
                                                            <Link key={linkTitle} href={linkDestination} className='footer-link'>{linkTitle}</Link>
                                                        </li>
                                                    ) )
                                                }
                                            </ul>
                                        </>
                                    );
                                } )
                            }
                        </div>
                    </nav>
                </footer>
        </section>
    );
}

export default Footer;