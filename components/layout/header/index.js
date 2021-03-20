//content
import { simpleNavLinks } from './content';

// dependencies
import Link from 'next/link';

const Header = ({

}) => {

    return (
        <section className='header-container'>
            <header className='header-wrapper'>
                    <div className='header-branding-wrapper'>
                        <h1 className='header-branding-title'>pofo</h1>
                    </div>
                    <ul className='header-links-wrapper'>
                        {
                            simpleNavLinks.map( linkText => (
                                <li className='header-list-item'>
                                    <Link href='' classname='header-link'>{linkText}</Link>
                                </li>
                            ))
                        }
                    </ul>
            </header>
        </section>
    );
}

export default Header;