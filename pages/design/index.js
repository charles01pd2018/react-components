// dependencies
import Head from 'next/head';
// layout
import { DefaultLayout } from '../../layout';

const Design = ({

}) => {

    return (
        <DefaultLayout>
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