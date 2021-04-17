// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../../layout';
// content
import { ContactLayoutContent } from '../../content/layoutContent';

const Contact = ({
}) => {

    return (
        <DefaultLayout content={ContactLayoutContent}>
            <Head>
                <title>Contact</title>
            </Head>
            <div className='container'>
                <h1>Contact</h1>
            </div>
        </DefaultLayout>
    );
}

export default Contact;