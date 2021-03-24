
const ImageOverlap = ({
    images
}) => {

    return(
        <div className='image-overlap-wrapper'>
            {
                images.map( ({ imagePath, imageAltText }) => (
                    <img key={imageAltText} src={imagePath} alt={imageAltText} role='presentation' className='overlap-image site-image' />
                ) )
            }
        </div>    
    );
}

export default ImageOverlap;