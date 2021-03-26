// dependencies
import { useState } from 'react';
import classNames from 'classnames';

// elements
import { ImageOverlay, Tags } from '../elements';

// content
import { CarouselContent } from './content';

const Carousel = ({
}) => {

    /* HOOKS */
    const [ carouselIndex, setCarouselIndex ] = useState(0);

    /* FUNCTIONS */
    const incrementCarouselIndex = () => {
        setCarouselIndex( state => {
            return state + 1;
        });
    }

    const decrementCarouselIndex = () => {
        setCarouselIndex( state => {
           return state - 1;
        });
    }
 
    /* CLASSNAMES */
    const carouselLeftIconClasses = classNames( 'chevron left', carouselIndex === 0 ? 'hide' : '' );
    const carouselRightIconClasses = classNames( 'chevron right', carouselIndex === CarouselContent.length - 1 ? 'hide' : '' );

    /* CONTENT */
    const { carouselDisplay, carouselDescriptionTitle, carouselDescriptionText, ...optionalCarouselContent } = CarouselContent[carouselIndex]; // main content
    const { displayImages, carouselDisplayDestination } = carouselDisplay; // display content
    // don't display if these object are null
    const { carouselDescriptionFeatures, carouselDescriptionTags } = optionalCarouselContent; // optional descriptions
    
    return (
        <section className='carousel-background'>
            <div className='container'>
                <h1>Carousel</h1>
                <div className='carousel-wrapper'>

                    <div className='carousel-display-wrapper'>
                        {
                            carouselDisplayDestination ? ( <a href={carouselDisplayDestination} target='_blank'><ImageOverlay className='zoom-image' images={displayImages} /></a> ) : 
                            ( <ImageOverlay images={displayImages} /> )
                        }

                        <div className='carousel-state-tracker'>
                            {carouselIndex + 1} of {CarouselContent.length}
                        </div>
                    </div>

                    <div className='carousel-description-wrapper'>
                        <span className='carousel-description-title'><h4>{carouselDescriptionTitle}</h4></span>
                        <span className='carousel-description-text'>{carouselDescriptionText}</span>
                        <hr className='horizontal-line-sm align-left'/>

                        {
                            carouselDescriptionFeatures ? (
                                <div className='carousel-description-features-wrapper'>
                                    <i>{carouselDescriptionFeatures.featuresTitle}</i>
                                    <ul className='carousel-description-features-list'>
                                        {
                                            carouselDescriptionFeatures.featuresList.map( feature => (
                                                <li key={feature} className='carousel-description-feature'>{feature}</li>
                                            ))
                                        }
                                    </ul> 
                                </div> ) : ( null )
                        }


                        {
                            carouselDescriptionTags ? ( <div className='carousel-tags-wrapper'><Tags tags={carouselDescriptionTags} /></div> ) : ( null )
                        }

                        <div className='carousel-toggle-wrapper'>
                            <span className='carousel-toggle-left'>
                                <span className={carouselLeftIconClasses} onClick={decrementCarouselIndex}></span>
                            </span>

                            <span className='carousel-toggle-right'>
                                <span className={carouselRightIconClasses} onClick={incrementCarouselIndex}></span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;