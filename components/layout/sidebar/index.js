const Sidebar = ({
    id,
    content: { sidebarNavLinks }
}) => {

    return (
        <header id={id} className='sidebar-container'>
            <a href='#sidebar'>
                <div className='sidebar-toggle'>
                    <span className='chevron right site-link'></span>
                </div>
            </a>

            <div className='sidebar-wrapper'>

            </div>
        </header>
    );
}

export default Sidebar;