// dependencies
import Head from 'next/head';
// components
import { Header, Footer, Sidebar } from '../components/layout'
// content
import { HeaderContent, FooterContent, SidebarContent } from '../content/layoutContent';

const DefaultLayout = ({
    children
}) => {

    var SITE_NAME = 'pofo';

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header siteTitle={SITE_NAME} content={HeaderContent} />
            <Sidebar id='sidebar-nav' content={SidebarContent} />
                <main className='site-content'>{children}</main>
            <Footer siteTitle={SITE_NAME} content={FooterContent} />
        </>
    );
}

export default DefaultLayout;