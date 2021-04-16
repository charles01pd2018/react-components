const SIDEBAR_CONTENT_SHARED = {
    sidebarNavLinks: [
        {
            mainLink: {
                mainLinkTitle: 'Home',
                mainLinkDestination: '/' 
            },
            subLinks: []
        },
        {
            mainLink: {
                mainLinkTitle: 'Design',
                mainLinkDestination: '/design' 
            },
            subLinks: []
        },
    ]
};

export const HomeLayoutContent = {
    headerContent: {
        headerNavLinks: [
            {
                mainLink: {
                    mainLinkTitle: 'Hero',
                    mainLinkDestination: '#wave-hero' 
                },
                subLinks: []
            },
            {
                mainLink: {
                    mainLinkTitle: 'Carousel',
                    mainLinkDestination: '#carousel' 
                },
                subLinks: []
            },
            {
                mainLink: {
                    mainLinkTitle: 'Image Gallery',
                    mainLinkDestination: '#image-gallery' 
                },
                subLinks: []
            },
            {
                mainLink: {
                    mainLinkTitle: 'Grid Section',
                    mainLinkDestination: '#grid-section' 
                },
                subLinks: []
            },
            {
                mainLink: {
                    mainLinkTitle: 'Grid Panel',
                    mainLinkDestination: '#grid-panel' 
                },
                subLinks: [] 
            },
            {
                mainLink: {
                    mainLinkTitle: 'Flex Panel',
                    mainLinkDestination: '#flex-panel' 
                },
                subLinks: [] 
            },
        ]
    },
    sidebarContent: SIDEBAR_CONTENT_SHARED,
    footerContent: {
        footerNavLinks: [
            {
                categoryDescription: 'Amazing Features',
                categoryLinks: [
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    }
                ]
            },
            {
                categoryDescription: 'Will Not Bamboozle',
                categoryLinks: [
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    }
                ]
            },
            {
                categoryDescription: 'Will Blow Your Mind',
                categoryLinks: [
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    },
                    {
                        linkTitle: 'cool stuff', 
                        linkDestination: '' 
                    }
                ]
            },
        ],
        footerSocialIcons: [
            {
                socialIconType: 'twitter icon',
                socialIconPath: '/static/social/twitter.svg',
                socialIconDestination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
                socialIconType: 'linkedin icon',
                socialIconPath: '/static/social/linkedin.svg',
                socialIconDestination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
        ],
        footerDescription: 'has the exclusive rights to these jawnz *insert copyright symbol*'
    },
};

export const DesignLayoutContent = {
    headerContent: {
        headerNavLinks: []
    },
    sidebarContent: SIDEBAR_CONTENT_SHARED,
    footerContent: {
        footerSocialIcons: [
            {
                socialIconType: 'twitter icon',
                socialIconPath: '/static/social/twitter.svg',
                socialIconDestination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
                socialIconType: 'linkedin icon',
                socialIconPath: '/static/social/linkedin.svg',
                socialIconDestination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
        ],
        footerDescription: 'has the exclusive rights to these jawnz *insert copyright symbol*'
    },
};

export const GroofsLayoutContent = {
    headerContent: {
        headerNavLinks: []
    },
    sidebarContent: SIDEBAR_CONTENT_SHARED,
    footerContent: {
        footerSocialIcons: [
            {
                socialIconType: 'twitter icon',
                socialIconPath: '/static/social/twitter.svg',
                socialIconDestination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
            {
                socialIconType: 'linkedin icon',
                socialIconPath: '/static/social/linkedin.svg',
                socialIconDestination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            },
        ],
        footerDescription: 'has the exclusive rights to these jawnz *insert copyright symbol*'
    },
};