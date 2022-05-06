export const MENU__LIST = [
    { 
        title: 'Home', 
        path: '/', 
        icon: false 
    },
    { 
        title: 'Products', 
        path: '/products', 
        icon: false 
    },
    { 
        title: 'Developer', 
        path: '/developer', 
        icon: true,
        version: [
            { title: 'Version 1', path: '/developer/version1' },
            { title: 'Version 2', path: '/developer/version2' },
            { title: 'Version 3', path: '/developer/version3' },
            { title: 'Version 4', path: '/developer/version4' },
        ]
    },
    { 
        title: 'Blog', 
        path: '/blog', 
        icon: true,
        version: [
            { title: 'Version 1', path: '/developer/version1' },
            { title: 'Version 2', path: '/developer/version2' },
            { title: 'Version 3', path: '/developer/version3' },
            { title: 'Version 4', path: '/developer/version4' },
        ]
    },
]