// dependencies
import Head from 'next/head';

// layout
import DefaultLayout from './layout/defaultLayout';

// components
import { Hero, WaveHero } from '../components/hero/hero';
import { GridPanel, FlexPanel, GridSection, Carousel } from '../components';


const ReactComponents = ({
}) => {
  return (
        <DefaultLayout>
                <Head>
                    <title>React Components Template</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                  <Hero />
                  <Carousel />
                  <WaveHero />
                  <GridSection />
                  <GridPanel />
                  <FlexPanel />
        </DefaultLayout>
  );
}

export default ReactComponents;