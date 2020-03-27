export interface Paginate {
    totalItems: number;
    page: {
        now: number;
        total: number;
        itemsCount: number;
    }
    data: any[]

}