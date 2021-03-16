// dependencies
import Head from 'next/head';

// layout
import DefaultLayout from './layout/defaultLayout';

// components
import Hero from '../components/hero/hero';
import GridPanel from '../components/grid-panel';


const ReactComponents = ({
}) => {
  return (
        <DefaultLayout>
                <Head>
                    <title>React Components Template</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                  <Hero />
                  <GridPanel />
        </DefaultLayout>
  );
}

export default ReactComponents;