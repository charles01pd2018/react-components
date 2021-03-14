const Panels = () => {

    return (
        <section className='container'>
            <h1>Panel Grid</h1>
                <div className='panel-grid'>
                    <div className='panel-card'>
                        <h2>Card 1</h2>
                        <p>Card 1 Description. This is an amazing card that does amazing work</p>
                    </div>
                    <div className='panel-card'>
                        <p>Card 2</p>
                    </div>
                    <div className='panel-card'>
                        <p>Card 3</p>
                    </div>
                    <div className='panel-card'>
                        <p>Card 4</p>
                    </div>
                </div>
        </section>
    );
}

export default Panels;