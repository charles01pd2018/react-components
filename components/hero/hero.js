// content
import { HeroContent } from './content';

const Hero = ({

}) => {

    return (
        <section className='container'>
            <div className='hero'>
                <h1>{HeroContent.title}</h1>
                <p>{HeroContent.description}</p>
            </div>
        </section>
    );
}

export default Hero;