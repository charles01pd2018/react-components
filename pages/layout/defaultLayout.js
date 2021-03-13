// components
import Header from '../../components/header';
import Footer from '../../components/footer';

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