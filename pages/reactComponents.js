// dependencies
import Head from 'next/head';

// components
import { Hero, WaveHero } from '../components/hero';
import { GridPanel, FlexPanel, GridSection, Carousel, ImageGallery } from '../components';

// content
import { HeroContent, WaveHeroContent, CarouselContent, ImageGalleryContent, GridSectionContent, GridPanelContent, FlexPanelContent } from './homeContent';

const ReactComponents = ({
}) => {
  return (
        <>
          <Head>
              <title>React Components Template</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>

            <Hero id='hero' content={HeroContent} />
            <WaveHero id='wave-hero' content={WaveHeroContent} />
            <Carousel id='carousel' content={CarouselContent} />
            <ImageGallery id='image-gallery' content={ImageGalleryContent} />
            <GridSection id='grid-section' content={GridSectionContent} />
            <GridPanel id='grid-panel' content={GridPanelContent} />
            <FlexPanel id='flex-panel' content={FlexPanelContent} />
        </>
  );
}

export default ReactComponents;