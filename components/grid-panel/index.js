// partials
import Card from './card';


const GridPanel = ({
    id,
    content: { gridPanelTitle, gridPanelCards }
}) => {

    return (
        <section id={id} className='container'>
            <h1>{gridPanelTitle}</h1>
                <div className='grid-panel'>
                    {
                       gridPanelCards.map( ({ cardHeader, cardDescription }) => (
                           <Card cardHeader={cardHeader} cardDescription={cardDescription} key={cardHeader} />
                       ))
                    }
                </div>
        </section>
    );
}

export default GridPanel;