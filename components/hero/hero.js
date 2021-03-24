// content
import { HeroContent, WaveHeroContent } from './content';

export const Hero = ({

}) => {

    return (
        <section className='container'>
            <div className='hero-wrapper'>
                <h1>{HeroContent.title}</h1>
                <p>{HeroContent.description}</p>
            </div>
        </section>
    );
}

export const WaveHero = ({

}) => {

    return (
        <section className='hero-wave-background'>
            <div className='container'>
                <div className='hero-wave-wrapper'>
                    <div className='hero-wave-content'>
                        <h1 className='hero-wave-content-title'>{WaveHeroContent.title}</h1>
                        <p className='hero-wave-content-description'>{WaveHeroContent.description}</p>
                    </div>

                    <div className='hero-wave-visual-wrapper'>
                        <object type="image/svg+xml" data='/static/branding/pofoAnimation.svg' alt='site-logo' className='hero-wave-visual-image site-image' >
                            Site Logo
                        </object>
                    </div>
                </div>
            </div>
        </section>
    );
}