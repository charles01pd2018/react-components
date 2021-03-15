// partials
import Card from './card';

// component data
import { GridPanelContent } from './content';

const GridPanel = ({
    content
}) => {

    return (
        <section className='container'>
            <h1>Panel Grid</h1>
                <div className='panel-grid'>
                    {
                       content.map( ({ cardHeader, cardDescription }) => (
                           <Card cardHeader={cardHeader} cardDescription={cardDescription} />
                       ))
                    }
                </div>
        </section>
    );
}

export function getStaticProps() {
    const content = GridPanelContent;

    return {
        props: {
            content,        
        },
    }
}

export default GridPanel;