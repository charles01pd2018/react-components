const ImageGallery = ({
    id,
    content: { imageGalleryTitle, imageGalleryDescription, imageGalleryImages }
}) => {

    return (
        <section id={id} className='container'>
            <h1>Image Gallery</h1>
            <h2>{imageGalleryTitle}</h2>
            <div className='image-gallery-wrapper'>
                {
                    imageGalleryImages.map( ({ imagePath, imageAltText }) => (
                        <img key={imageAltText} src={imagePath} alt={imageAltText} role='presentation' className='image-gallery-image site-image' />
                    ) )
                }
            </div>
        </section>
    );
}

export default ImageGallery;