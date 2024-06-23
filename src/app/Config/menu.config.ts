export type menuItem = {
    isLink: boolean;
    name: string;
    icon: string;
};

export type menuItemConfig = {
    TOP: menuItem[];
    BOTTOM: menuItem[];
}

export const MENU_ITEMS : menuItemConfig= {
    TOP:[{
        isLink: true,
        name:'Overview',
        icon:'fa-solid fa-list-check'
    },
    {
        isLink: false,
        name:'Messages',
        icon:'fa-regular fa-envelope'
    },
    {
        isLink: false,
        name:'Search',
        icon:'fa-solid fa-magnifying-glass'
    },
    {
        isLink: false,
        name:'Filter',
        icon:'fa-solid fa-chart-simple'   
    },
    {
        isLink: true,
        name:'History',
        icon:'fa-solid fa-clock-rotate-left'
    },
    {
        isLink: false,
        name:'My Account',
        icon:'fa-solid fa-user'
    }],

    BOTTOM: [{
        isLink: true,
        name:'Get Help',
        icon:'fa-regular fa-comments'
    },
    {
        isLink: true,
        name:'Sign Out',
        icon:'fa-solid fa-arrow-right-from-bracket'
    }]
};