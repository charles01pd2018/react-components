import classNames from 'classnames';

const ImageBackground = ({
    className,
    imageBackgroundURL, // url path for background image
    imageOnTop, // image object with image path and alt text
}) => {

    /* CLASSNAMES */
    const imageBackgroundClasses = classNames( 'image-background-wrapper', className );

    return (
        <div className='image-container'>
            <div className={imageBackgroundClasses} style={{ backgroundImage: 'url(' + imageBackgroundURL + ')' }}>
                <div className='image-on-top'>
                    <img src={imageOnTop.imagePath} alt={imageOnTop.imageAltText} role='presentation'/>
                </div>
            </div>
        </div>
    );
}

export default ImageBackground;