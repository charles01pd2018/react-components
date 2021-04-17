// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../../layout';
// components
import { Hero, Form } from '../../components';
// content
import { HeroContent } from '../../content/contactContent';
import { ContactLayoutContent } from '../../content/layoutContent';

const Contact = ({
}) => {

    return (
        <DefaultLayout content={ContactLayoutContent}>
            <Head>
                <title>Contact</title>
            </Head>

            <Hero id='contact-hero' content={HeroContent} />
            <Form id='contact-form' />
        </DefaultLayout>
    );
}

export default Contact;