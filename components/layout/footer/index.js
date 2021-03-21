// dependencies
import Link from 'next/link';

// content
import { footerNavLinks, footerSocialIcons } from './content';

// partials
import Logo from '../logo';

const Footer = () => {

    return (
        <section className='footer-container'>
                <footer className='footer-wrapper'>
                    <div className='footer-branding-wrapper'>
                        <Logo />
                    </div>

                    <nav className='container'>
                        <div className='footer-category-wrapper'>
                            {
                                footerNavLinks.map( ({ categoryDescription, categoryLinks }) => {
                                    return (
                                        <div className='footer-category'>
                                            <h3 className='footer-category-title'>{categoryDescription}</h3>

                                            <ul className='footer-category-links-wrapper'>
                                                {
                                                    categoryLinks.map( ({ linkTitle, linkDestination }) => (
                                                        <li key={linkTitle} className='footer-list-item site-link'>
                                                            <Link key={linkTitle} href={linkDestination}>{linkTitle}</Link>
                                                        </li>
                                                    ) )
                                                }
                                            </ul>
                                        </div>
                                    );
                                } )
                            }
                        </div>

                        <div className='footer-social-bar-wrapper'>
                            {
                                footerSocialIcons.map( ({ socialIconType, socialIconPath, socialIconDestination }) => (
                                    <a key={socialIconType} href={socialIconDestination} target='_blank'>
                                        <img src={socialIconPath} alt={socialIconType} className='footer-social-icon site-link'/>
                                    </a>
                                ))
                            }
                        </div>

                    </nav>
                </footer>
        </section>
    );
}

export default Footer;