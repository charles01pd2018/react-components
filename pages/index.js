// dependencies
import Head from 'next/head';
// components
import { Hero, WaveHero } from '../components/hero';
import { GridPanel, FlexPanel, GridSection, Carousel, ImageGallery } from '../components';
// content
import { HeroContent, WaveHeroContent, CarouselContent, ImageGalleryContent, GridSectionContent, GridPanelContent, FlexPanelContent } from '../content/homeContent';
import { HomeLayoutContent } from '../content/layoutContent';
// layout
import { DefaultLayout } from '../layout';


const Home = ({
}) => {
  return (
    <DefaultLayout content={HomeLayoutContent}>
        <Head>
            <title>React Components Template</title>
        </Head>

          <Hero id='hero' content={HeroContent} />
          <WaveHero id='wave-hero' content={WaveHeroContent} />
          <Carousel id='carousel' content={CarouselContent} />
          <ImageGallery id='image-gallery' content={ImageGalleryContent} />
          <GridSection id='grid-section' content={GridSectionContent} />
          <GridPanel id='grid-panel' content={GridPanelContent} />
          <FlexPanel id='flex-panel' content={FlexPanelContent} />
    </DefaultLayout>
  );
}

export default Home;