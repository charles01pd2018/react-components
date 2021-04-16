// dependencies
import { useState } from 'react';
import classNames from 'classnames';

// elements
import { ImageBackground, Tags } from '../elements';


const Carousel = ({
    id,
    content: { carouselTitle='', carouselItems=[] }
}) => {

    /* HOOKS */
    const [ carouselIndex, setCarouselIndex ] = useState(0); // display the first carousel item
    const [ carouselDirection, setCarouselDirection ] = useState(''); // set the direction the carousel is going (for animations)

    /* FUNCTIONS */
    const incrementCarouselIndex = () => {
        setCarouselIndex( state => {
            setCarouselDirection('carousel-right-enter');
            return state + 1;
        });
    }

    const decrementCarouselIndex = () => {
        setCarouselIndex( state => {
            setCarouselDirection('carousel-left-enter');
           return state - 1;
        });
    }

    const handleCarouselWrapperClasses = ( objectIndex, currentIndex ) => {
        if ( objectIndex === currentIndex ) return carouselDirection;
        return 'hide';
    }
    
    /* CLASSNAMES */
    const carouselLeftIconClasses = classNames( 'chevron left carousel-toggle-icon site-link', carouselIndex === 0 ? 'hide' : '' );
    const carouselRightIconClasses = classNames( 'chevron right carousel-toggle-icon site-link', carouselIndex === carouselItems.length - 1 ? 'hide' : '' );
    
    return (
        <section id={id} className='carousel-background'>
            <div className='container'>
                <h1>{carouselTitle}</h1>

                    { carouselItems.map( ( carouselObject, index ) => {
                        /* CONTENT */
                        const { carouselDisplay, carouselDescriptionTitle, carouselDescriptionText, ...optionalCarouselContent } = carouselObject; // main content
                        const { displayImages, carouselDisplayDestination } = carouselDisplay; // display content
                        // don't display if these object are null
                        const { carouselDescriptionFeatures, carouselDescriptionTags } = optionalCarouselContent; // optional descriptions

                        /* CLASSNAMES */
                        const carouselWrapperClasses = classNames( 'carousel-wrapper', handleCarouselWrapperClasses(index, carouselIndex) );

                        return (
                                <div key={`carousel-object-${index}`} className={carouselWrapperClasses}>
                                    <div className='carousel-display-wrapper'>
                                        <div className='carousel-image-wrapper'>
                                            {
                                                carouselDisplayDestination ? ( 
                                                <a href={carouselDisplayDestination} target='_blank'>
                                                    <ImageBackground className='zoom-image' imageBackgroundURL={displayImages[0].imagePath} imageOnTop={displayImages[1]}  />
                                                </a> ) : ( 
                                                <ImageBackground imageBackgroundURL={displayImages[0].imagePath} imageOnTop={displayImages[1]} /> )
                                            }
                                        </div>

                                        <div className='carousel-state-tracker'>
                                            {carouselIndex + 1} of {carouselItems.length}
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
                                                <span className='screen-reader'>carousel toggle chevron left icon</span>
                                                <span className={carouselLeftIconClasses} aria-label='carousel toggle chevron left icon'  onClick={decrementCarouselIndex}></span>
                                            </span>

                                            <span className='carousel-toggle-right'>
                                                <span className='screen-reader'>carousel toggle chevron right icon</span>
                                                <span className={carouselRightIconClasses} aria-label='carousel toggle chevron right icon' onClick={incrementCarouselIndex}></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        } )
                    }
            </div>
        </section>
    );
}

export default Carousel;