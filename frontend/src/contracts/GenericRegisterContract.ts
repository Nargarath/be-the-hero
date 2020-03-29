export interface GenericRegisterContract {
    componentId: string,
    link: {
        to: string,
        text: string
    },
    title: string,
    description: string,
    children?: any;

}