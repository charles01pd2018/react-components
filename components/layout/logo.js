// dependencies
import Link from 'next/link';

const Logo = ({
    logoTitle
}) => {

    /* CONTENT */
    const displayLogoTitle = logoTitle ? ( <h1 className='header-branding-title'>{logoTitle}</h1> ) : ( null );

    return (
        <>
            <Link href='#top'>
                <a><img src='/favicon.svg' alt='site-logo' className='site-logo' /></a>
            </Link>
            {displayLogoTitle}
        </>
    );
}

export default Logo;