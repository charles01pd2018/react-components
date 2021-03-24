// dependencies
import classNames from 'classnames';

// content
import { GridSectionContent } from './content';


const GridSection = ({
    alignImage='left' // 'left' || 'right'
}) => {

    const { images, description } = GridSectionContent

    return (
        <section className='container'>
            <h1>Grid Content</h1>
            <div className={ classNames( 'grid-section', alignImage === 'left' ? 'image-align-left' : 'image-align-right' ) }>

                <div className='grid-section-image-wrapper'>
                    {
                        images.map( ({ imagePath, imageAltText }) => (
                            <img key={imageAltText} src={imagePath} alt={imageAltText} />
                        ) )
                    }
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