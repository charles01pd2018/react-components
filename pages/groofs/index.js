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
                <div className='groofs-container'>
                    <section id='groof-1' className='groofs-wrapper'>
                        <h2>Groof 1</h2>
                        1. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space
                    </section>
                    <section id='groof-2' className='groofs-wrapper'>
                        <h2>Groof 2</h2>
                        2. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space
                    </section>
                    <section id='groof-3' className='groofs-wrapper'>
                        <h2>Groof 3</h2>
                        3. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space
                    </section>
                    <section id='groof-4' className='groofs-wrapper'>
                        <h2>Groof 4</h2>
                        4. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space. Hello this is a peice of text that will take up space
                    </section>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Design;