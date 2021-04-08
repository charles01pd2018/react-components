export const Hero = ({
    id,
    content: { heroTitle, heroDescription }
}) => {

    return (
        <section id={id} className='container'>
            <div className='hero-wrapper'>
                <h1>{heroTitle}</h1>
                <p>{heroDescription}</p>
            </div>
        </section>
    );
}

export const WaveHero = ({
    id,
    content: { waveHeroTitle, waveHeroDescription }
}) => {

    return (
        <section id={id} className='hero-wave-background'>
            <div className='container'>
                <h1>Hero</h1>
                <div className='hero-wave-wrapper'>
                    <div className='hero-wave-content'>
                        <h1 className='hero-wave-content-title'>{waveHeroTitle}</h1>
                        <p className='hero-wave-content-description'>{waveHeroDescription}</p>
                    </div>

                    <div className='hero-wave-visual-wrapper'>
                        <object type="image/svg+xml" data='/static/branding/pofoAnimation.svg' alt='site-logo' role='presentation' className='hero-wave-visual-image site-image' >
                            Site Logo
                        </object>
                    </div>
                </div>
            </div>
        </section>
    );
}