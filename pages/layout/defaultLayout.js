// components
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';

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