// dependencies
import classNames from 'classnames';

// content
import { GridSectionContent } from './content';


const GridSection = ({
    alignImage='left' // 'left' || 'right'
}) => {

    const { image, description } = GridSectionContent

    const gridSectionClasses = classNames(
        'grid-section',
        alignImage === 'left' ? 'image-align-left' : 'image-align-right',
    );

    return (
        <section className='container'>
            <h1>Grid Content</h1>
            <div className={gridSectionClasses}>

                <div className='grid-section-image-wrapper'>
                    <img src='/favicon.svg' alt='site-logo'/>
                </div>

                <div className='grid-section-description-wrapper'>
                    <p>This is a magnificent description accompanied by an image</p>
                </div>

            </div>

        </section>
    );
}

export default GridSection;