// dependencies
import { useState } from 'react';

// elements
import { ImageOverlay, Tags } from '../elements';

// content
import { CarouselContent } from './content';

const Carousel = ({
}) => {

    const [ carouselIndex, setCarouselIndex ] = useState(0);

    const incrementCarouselIndex = () => {
        setCarouselIndex( state => {
            if (state >= CarouselContent.length - 1) return state;
            return state + 1;
        });
    }

    const decrementCarouselIndex = () => {
        setCarouselIndex( state => {
           if (state <= 0) return state;
           return state - 1;
        });
    }

    // main content
    const { carouselDisplay, carouselDescriptionTitle, carouselDescriptionText, ...optionalCarouselContent } = CarouselContent[carouselIndex];
    // display content
    const { displayImages, carouselDisplayDestination } = carouselDisplay;
    // optional descriptions --> ha
    const { carouselDescriptionFeatures, carouselDescriptionTags } = optionalCarouselContent;
    const { featuresTitle, featuresList } = carouselDescriptionFeatures;
    
    return (
        <section className='carousel-background'>
            <div className='container'>
                <h1>Carousel</h1>
                <div className='carousel-wrapper'>

                    <div className='carousel-display-wrapper'>
                        <a href={carouselDisplayDestination} target='_blank'><ImageOverlay images={displayImages} /></a>

                        <div className='carousel-state-tracker'>
                            {carouselIndex + 1} of {CarouselContent.length}
                        </div>
                    </div>

                    <div className='carousel-description-wrapper'>
                        <span className='carousel-description-title'><h4>{carouselDescriptionTitle}</h4></span>
                        <span className='carousel-description-text'>{carouselDescriptionText}</span>
                        <hr className='horizontal-line-sm align-left'/>

                        <div className='carousel-description-features-wrapper'>
                            <i>{featuresTitle}</i>
                            <ul className='carousel-description-features-list'>
                                {
                                    featuresList.map( feature => (
                                        <li key={feature} className='carousel-description-feature'>{feature}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='carousel-tags-wrapper'>
                            <Tags tags={carouselDescriptionTags} />
                        </div>

                        <div className='carousel-toggle-wrapper'>
                            <span className='carousel-toggle-left'>
                                <span className='chevron left' onClick={decrementCarouselIndex}></span>
                            </span>

                            <span className='carousel-toggle-right'>
                                <span className='chevron right' onClick={incrementCarouselIndex}></span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;