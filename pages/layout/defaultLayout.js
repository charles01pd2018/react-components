// components
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';

const DefaultLayout = ({
    children
}) => {

    return (
        <>
            <Header />
                <main className='site-content'>{children}</main>
            <Footer />
        </>
    );
}

export default DefaultLayout;