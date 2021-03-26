// partials
import Card from './card';

// component data
import { GridPanelContent } from './content';


const GridPanel = ({
}) => {

    return (
        <section id='grid-panel' className='container'>
            <h1>Grid Panel</h1>
                <div className='grid-panel'>
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