// content
import { footerNavLinks } from './content';

// partials
import Logo from '../logo';

const Footer = () => {

    return (
        <section className='container'>
            <footer className='footer-wrapper'>
                <div className='footer-branding-wrapper'>
                        <Logo logoTitle='' />
                </div>

                <nav className='footer-nav-menu'>

                </nav>
            </footer>
        </section>
    );
}

export default Footer;