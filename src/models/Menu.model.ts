export interface IMenu{
    name: string,
    active: boolean,
    id: number
}
export const defaultMenu:Array<IMenu> =[
    {
        name: 'Home',
        active: true,
        id: 0
    },
    {
        name: 'About',
        active: false,
        id: 1
    },
    {
        name: 'Skills',
        active: false,
        id: 2
    },
    {
        name: 'Project',
        active: false,
        id: 3
    },
    {
        name: 'Contact',
        active: false,
        id: 4
    },
]