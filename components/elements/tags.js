const Tags = ({
    tags // array
}) => {

    return (
        <ul className='tags-wrapper'>
            {
                tags.map( tag => (
                    <li key={tag} className='tag-item'>
                        <p key={tag} className='text-xs'>{tag}</p>
                    </li>
                ))
            }
        </ul>
    );
}

export default Tags;