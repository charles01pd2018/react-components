// components
import { Header, Footer } from '../components/layout'

// content
const siteTitle = 'pofo';

const DefaultLayout = ({
    children
}) => {

    return (
        <>
            <Header siteTitle={siteTitle}/>
                <main className='site-content'>{children}</main>
            <Footer siteTitle={siteTitle} />
        </>
    );
}

export default DefaultLayout;