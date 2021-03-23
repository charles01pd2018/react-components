// dependencies
import Head from 'next/head';

// layout
import DefaultLayout from './layout/defaultLayout';

// components
import { Hero, WaveHero } from '../components/hero/hero';
import GridPanel from '../components/grid-panel';
import FlexPanel from '../components/flex-panel'
import GridSection from '../components/grid-section';


const ReactComponents = ({
}) => {
  return (
        <DefaultLayout>
                <Head>
                    <title>React Components Template</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                  <Hero />
                  <WaveHero />
                  <GridSection />
                  <GridPanel />
                  <FlexPanel />
        </DefaultLayout>
  );
}

export default ReactComponents;