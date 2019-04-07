export interface IConfiguration {
    goodsPage: IGoodsList;
    cart: IGoods[];
    footerInfo: IFooterInfo;
}

export interface IGoodsList {
    goods: IGoods[];
}
export interface IGoods {
    img: string;
    name: string;
    article: string;
    brand: string;
    price: string;
    amount: string;
    img_short: string;
}
export interface IFooterInfo {
    h1: string;
    span: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    bottom: string;
}