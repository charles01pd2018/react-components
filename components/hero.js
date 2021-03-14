const Hero = ({
    heroText,
    descriptionText
}) => {

    return (
        <div className='container'>
            <div className='hero'>
                <h1>{heroText}</h1>
                <p>{descriptionText}</p>
            </div>
        </div>
    );
}

export default Hero;