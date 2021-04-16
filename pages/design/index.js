// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../../layout';
// content
import { DesignLayoutContent } from '../../content/layoutContent';

const Design = ({
}) => {

    return (
        <DefaultLayout content={DesignLayoutContent}>
            <Head>
                <title>Design</title>
            </Head>
            <div className='container'>
                <h1>Design Page</h1>
            </div>
        </DefaultLayout>
    );
}

export default Design;