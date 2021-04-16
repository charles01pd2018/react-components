// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../../layout';
// content
import { GroofsLayoutContent } from '../../content/layoutContent';

const Design = ({
}) => {

    return (
        <DefaultLayout content={GroofsLayoutContent}>
            <Head>
                <title>Groofs</title>
            </Head>
            <div className='container'>
                <h1>!Groofs!</h1>
            </div>
        </DefaultLayout>
    );
}

export default Design;