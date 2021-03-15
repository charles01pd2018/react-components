// dependencies
import Head from 'next/head';

// layout
import DefaultLayout from './layout/defaultLayout';

// components
import Hero from '../components/Hero';
import GridPanel from '../components/grid-panel';

const Content = ({
}) => {
  return (
        <DefaultLayout>
                <Head>
                    <title>React Components Template</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                  <Hero heroText='React Components Reference' descriptionText='I want to see what Verdana looks like in paragraph form' />
                  <GridPanel />
        </DefaultLayout>
  );
}

export default Content;