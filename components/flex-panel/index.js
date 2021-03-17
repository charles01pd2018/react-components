// content
import { FlexPanelContent } from './content';

// partials
import Card from './card';

const FlexPanel = ({

}) => {

    return (
        <section className='container'>
            <h1>Flex Panel</h1>
                <div className='flex-panel'>
                    {
                        FlexPanelContent.map( ({ cardHeader, cardDescription }) => (
                            <Card cardHeader={cardHeader} cardDescription={cardDescription} key={cardHeader} />
                        ))
                    }
                </div>
        </section>
    )
}

export default FlexPanel;