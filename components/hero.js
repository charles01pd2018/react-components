const Hero = ({
    heroText,
    descriptionText
}) => {

    return (
        <section className='container'>
            <div className='hero'>
                <h1>{heroText}</h1>
                <p>{descriptionText}</p>
            </div>
        </section>
    );
}

export default Hero;