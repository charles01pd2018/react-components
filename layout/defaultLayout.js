// dependencies
import Head from 'next/head';
// components
import { Header, Footer, Sidebar } from '../components/layout'

const DefaultLayout = ({
    children,
    content: { headerContent={}, sidebarContent={}, footerContent={} }
}) => {

    var SITE_NAME = 'pofo';

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header siteTitle={SITE_NAME} content={headerContent} />
            <Sidebar id='sidebar-nav' content={sidebarContent} />
                <main className='site-content'>{children}</main>
            <Footer siteTitle={SITE_NAME} content={footerContent} />
        </>
    );
}

export default DefaultLayout;