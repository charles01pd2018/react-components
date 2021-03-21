// dependencies
import Link from 'next/link';

const Logo = ({
    logoTitle
}) => {

    return (
        <>
            <Link href='/'>
                <img src='/favicon.svg' alt='site-logo' className='site-logo' />
            </Link>
            { logoTitle ? <h1 className='header-branding-title'>{logoTitle}</h1> : ( null ) }
        </>
    );
}

export default Logo;