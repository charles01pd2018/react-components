// dependencies
import Head from 'next/head';

// layout
import { DefaultLayout } from '../layout';

// components
import { Hero, WaveHero } from '../components/hero';
import { GridPanel, FlexPanel, GridSection, Carousel, ImageGallery } from '../components';


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
                  <Carousel />
                  <ImageGallery />
                  <GridSection />
                  <GridPanel />
                  <FlexPanel />
        </DefaultLayout>
  );
}

export default ReactComponents;