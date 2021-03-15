const Card = ({
    cardHeader,
    cardDescription
}) => {

    return (
        <div className='panel-card'>
            <h1>{cardHeader}</h1>
            <p>{cardDescription}</p>
        </div>
    );
}

export default Card;