// dependencies
import classNames from 'classnames';

// elements
import { ImageOverlay } from '../elements';

// content
import { GridSectionContent } from './content';


const GridSection = ({
    alignImage='left' // 'left' || 'right'
}) => {
    
    // content
    const { images, description } = GridSectionContent;

    // classnames
    const gridSectionClasses = classNames( 'grid-section', alignImage === 'left' ? 'image-align-left' : 'image-align-right' );

    return (
        <section className='container'>
            <h1>Grid Content</h1>
            <div className={gridSectionClasses}>

                <div className='grid-section-image-wrapper'>
                    <ImageOverlay images={images} />
                </div>

                <div className='grid-section-description-wrapper'>
                    <h3>{description.descriptionTitle}</h3>
                    <p className='text-sm'>{description.descriptionText}</p>
                </div>

            </div>
        </section>
    );
}

export default GridSection;