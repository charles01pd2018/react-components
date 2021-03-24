// elements
import { ImageOverlay } from '../elements';

// content
import { CarouselContent } from './content';

const Carousel = ({
}) => {
    
    // main content
    const { carouselDisplay, carouselDescriptionTitle, carouselDescriptionText, ...optionalCarouselContent } = CarouselContent[0];
    // display content
    const { displayImages, carouselDisplayDestination } = carouselDisplay;
    // optional descriptions
    const { carouselDescriptionFeatures, carouselDescriptionTags } = optionalCarouselContent;
    const { featuresTitle, featuresList } = carouselDescriptionFeatures;
    
    // !!! LOOP THROUGH THE CONTENT ARRAY !!! //
    return (
        <section className='carousel-background'>
            <div className='container test'>
                <h1>Carousel</h1>
                <div className='carousel-wrapper'>
                    <div className='carousel-display-wrapper'>
                        <a href={carouselDisplayDestination} target='_blank'><ImageOverlay images={displayImages} /></a>

                        <div className='carousel-state-tracker'>
                            1 of 5
                        </div>
                    </div>

                    <div className='carousel-description-wrapper'>
                        {/* MAKE THIS AN ELEMENT */}
                        <div className='carousel-description-tags-wrapper'>
                            {
                                carouselDescriptionTags.map( tag => (
                                    <span className='carousel-description-tag'>
                                        <p key={tag} className='text-xs'>{tag}</p>
                                    </span>
                                ))
                            }
                        </div>
                        
                        {/* MAKE THIS AN ELEMENT */}
                        <div className='carousel-description-text-wrapper'>
                            <div className='carousel-description-title'>
                                <h4>{carouselDescriptionTitle}</h4>
                            </div>
                            {carouselDescriptionText}
                            <hr className='horizontal-line-sm align-left'/>

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

                        <div className='carousel-toggle'>
                            Toggle Button
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;