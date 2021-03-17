const Card = ({
    cardHeader,
    cardDescription
}) => {

    return (
        <div className='flex-panel-card'>
            <h1>{cardHeader}</h1>
            <p>{cardDescription}</p>
        </div>
    );
}

export default Card;