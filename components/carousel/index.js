// elements
import { ImageOverlay } from '../elements';

// content
import { CarouselContent } from './content';

const Carousel = ({
    displayAlign // 'left' || 'right'
}) => {
    
    // main content -> THIS IS AN ARRAY sdafjhskdfjdsklh
    const { carouselDisplay, carouselDescriptionText, ...optionalCarouselContent } = CarouselContent[0];
    // display content
    const { displayImages, carouselDisplayDestination } = carouselDisplay;
    // optional descriptions
    const { carouselDescriptionFeatures, carouselDescriptionTags } = optionalCarouselContent;
    const { featuresTitle, featuresList } = carouselDescriptionFeatures;
 
    return (
        <section className='container'>
            <div className='carousel-wrapper'>
                <div className='carousel-display-wrapper'>
                    <a href={carouselDisplayDestination} target='_blank'><ImageOverlay images={displayImages} /></a>
                </div>

                <div className='carousel-description-wrapper'>
                    <div className='carousel-description-tags-wrapper'>
                        {
                            carouselDescriptionTags.map( tag => (
                                <p key={tag} className='text-sm'>{tag}</p>
                            ))
                        }
                    </div>

                    <div className='carousel-description-text-wrapper'>
                        {carouselDescriptionText}
                        <hr className/>
                        <div className='carousel-description-features-wrapper'>
                            {featuresTitle}
                            <ul className='carousel-description-features-list'>
                                {
                                    featuresList.map( feature => (
                                        <li key={feature} className='carousel-description-feature'>{feature}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;