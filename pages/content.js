// dependencies
import Head from 'next/head';

// pages
import DefaultLayout from './layout/defaultLayout';

const Content = ({
}) => {
  return (
        <DefaultLayout>
            <div className="container">
                <Head>
                    <title>React Components Template</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 className="title">
                    React Components Reference
                </h1>
            </div>
        </DefaultLayout>
  );
}

export default Content;