// partials
import Card from './card';

// component data
import { GridPanelContent } from './content';


const GridPanel = ({
    content
}) => {

    return (
        <section className='container'>
            <h1>Grid Panel</h1>
                <div className='panel-grid'>
                    {
                       GridPanelContent.map( ({ cardHeader, cardDescription }) => (
                           <Card cardHeader={cardHeader} cardDescription={cardDescription} key={cardHeader} />
                       ))
                    }
                </div>
        </section>
    );
}

export default GridPanel;