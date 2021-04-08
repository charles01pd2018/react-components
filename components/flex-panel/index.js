// partials
import Card from './card';

const FlexPanel = ({
    id,
    content: { flexPanelTitle, flexPanelCards }
}) => {

    return (
        <section id={id} className='container'>
            <h1>{flexPanelTitle}</h1>
                <div className='flex-panel'>
                    {
                        flexPanelCards.map( ({ cardHeader, cardDescription }) => (
                            <Card cardHeader={cardHeader} cardDescription={cardDescription} key={cardHeader} />
                        ))
                    }
                </div>
        </section>
    )
}

export default FlexPanel;