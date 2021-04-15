// dependencies
import Link from 'next/link';

const Sidebar = ({
    id,
    content: { sidebarNavLinks }
}) => {

    return (
        <header id={id} className='sidebar-container'>
            <a id='sidebar-menu-toggle' href='#sidebar-menu' aria-label='open sidebar menu'>
                <div className='sidebar-toggle'>
                    <span class='screen-reader'>open sidebar menu</span>
                    <span className='chevron right site-link'></span>
                </div>
            </a>

            <nav id='sidebar-menu' className='sidebar-nav-wrapper' aria-label='sidebar-menu'>
                <a className='sidebar-close' href='#' id='sidebar-menu-close' aria-label='close sidebar menu'>
                    <span className='screen-reader'>close sidebar menu</span>
                    <span className='sidebar-close-icon' aria-hidden='true'>&times;</span>
                </a>
                <ul className='sidebar-links-wrapper'>
                    {
                        sidebarNavLinks.map( linkObject => {
                            const { mainLinkTitle, mainLinkDestination } = linkObject.mainLink;
                            return (
                                <li className='sidebar-link-item site-link'>
                                    <Link href={mainLinkDestination}>
                                        <a>{mainLinkTitle}</a>
                                    </Link>
                                </li>
                            );
                        } )
                    }
                </ul>
            </nav>
            <a href='#' className='sidebar-backdrop' tabIndex='-1' hidden></a>
        </header>
    );
}

export default Sidebar;