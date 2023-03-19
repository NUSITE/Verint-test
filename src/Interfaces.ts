export interface StoreItem {
    itemName: string;
    itemNo: number;
    itemImg: string;
    itemDescription: String;
    itemActualPrice: number;
    itemSuggestedPrice: number;
    itemPercentageDiscount: number;
}

export interface UserDetails {
    fullName: string;
    email: string;
    mobile: string;
    creditCard: number;
    address: string;
}

export interface OrderDetails {
    orderId: number;
    orderedItem: StoreItem | any;
    userDetails: UserDetails | any;
}
