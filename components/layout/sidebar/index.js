// dependencies
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const handleIdPath = ( pathString ) => {
    const idIndex = pathString.indexOf('#');
    if ( idIndex === -1 ) return '#';

    return pathString.slice( idIndex );
}

const Sidebar = ({
    id,
    content: { sidebarNavLinks }
}) => {

    /* HOOKS */
    const router = useRouter();
    const path = router.asPath;
    const [ idPath, setIdPath ] = useState( handleIdPath(path) ); 

    const handleRouteChange = ( url ) => {
        setIdPath( handleIdPath( url ) );
    }

    useEffect(() => {
        router.events.on('hashChangeStart', handleRouteChange)
        return () => {
          router.events.off('hashChangeStart', handleRouteChange)
        }
      }, [] );

    return (
        <header id={id} className='sidebar-container'>
            <a id='sidebar-menu-toggle' href='#sidebar-menu' aria-label='open sidebar menu'>
                <div className='sidebar-toggle'>
                    <span className='screen-reader'>open sidebar menu</span>
                    <span className='chevron right site-link'></span>
                </div>
            </a>

            <nav id='sidebar-menu' className='sidebar-nav-wrapper' aria-label='sidebar-menu'>
                <a className='sidebar-close' href={idPath} id='sidebar-menu-close' aria-label='close sidebar menu'>
                    <span className='screen-reader'>close sidebar menu</span>
                    <span className='sidebar-close-icon' aria-hidden='true'>&times;</span>
                </a>
                <ul className='sidebar-links-wrapper'>
                    {
                        sidebarNavLinks.map( linkObject => {
                            const { mainLinkTitle, mainLinkDestination } = linkObject.mainLink;
                            return (
                                <li key={mainLinkTitle} className='sidebar-link-item site-link'>
                                    <Link href={mainLinkDestination}>
                                        <a>{mainLinkTitle}</a>
                                    </Link>
                                </li>
                            );
                        } )
                    }
                </ul>
            </nav>
            <a href={idPath} className='sidebar-backdrop' tabIndex='-1' hidden></a>
        </header>
    );
}

export default Sidebar;