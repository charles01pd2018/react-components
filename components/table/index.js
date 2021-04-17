const Table = ({
    id,
    content: { caption='', tableItems={} }
}) => {
    
    /* CONTENT */
    const { columnTitles, columnDescriptions } = tableItems;

    return (
        <section id={id} className='table-container container' role='region' aria-labelledby='something'>
            <h2>Table</h2>
            <table id='cool-table' className='table-wrapper' >
                <caption id='cool-table' className='table-caption'>{caption}</caption>

                <thead className='table-head'>
                    <tr className='table-row'>
                        {   
                            columnTitles.map( ( title, index ) => (
                                <th key={`cell-title-${index}`} className='table-head-cell tabel-cell' scope='col'>{title}</th>
                            ) )
                        }
                    </tr>
                </thead>

                <tbody className='table-body'>
                        {
                            columnDescriptions.map( ( descriptionList, index ) => ( 
                                <tr key={`'table-description-row-${index}`} className='table-row'>
                                    {
                                        descriptionList.map( ( description, index ) => (
                                            <td key={`cell-description-${index}`} className='table-body-cell tabel-cell'>{description}</td>
                                        ))
                                    }
                                </tr>
                            ) )
                        }
                </tbody>             

            </table>
        </section>
    );
}

export default Table;
