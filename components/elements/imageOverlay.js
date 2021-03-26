// dependencies
import classNames from 'classnames';

const ImageOverlay = ({
    images, // array
    className
}) => {

    const imageOverlayWrapperClasses = classNames( 'image-overlay-wrapper', className );

    return(
        <div className='image-overlay-container'>
            <div className={imageOverlayWrapperClasses}>
                {
                    images.map( ({ imagePath, imageAltText }) => (
                        <img key={imageAltText} src={imagePath} alt={imageAltText} role='presentation' className='overlay-image site-image' />
                    ) )
                }
            </div>
        </div>    
    );
}

export default ImageOverlay;