export const MENU__LIST = [
    { 
        title: 'Home', 
        path: '/', 
        icon: false,
        tables: []
    },
    { 
        title: 'Products', 
        path: '/products', 
        icon: false,
        tables: []
    },
    { 
        title: 'Developer', 
        path: '/developer', 
        icon: true,
        tables: [
            { table: 'HTML & CSS', path: '/blog/htmlcss' },
            { table: 'JavaScript', path: '/blog/javascript' },
            { table: 'ReactJs & React Native', path: '/blog/react' },
            { table: 'NodeJs', path: '/blog/nodejs' },
        ]
    },
    { 
        title: 'Blog', 
        path: '/blog', 
        icon: true,
        tables: [
            { table: 'HTML & CSS', path: '/blog/htmlcss' },
            { table: 'JavaScript', path: '/blog/javascript' },
            { table: 'ReactJs & React Native', path: '/blog/react' },
            { table: 'NodeJs', path: '/blog/nodejs' },
        ]
    },
]