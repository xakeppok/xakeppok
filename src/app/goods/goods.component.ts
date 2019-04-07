import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.sass']
})
export class GoodsComponent implements OnInit {

  constructor(private config: ConfigService) { }
  goodsPage: any = { };
  cart = [];
  public currValue: string;
  ngOnInit() {
    this.goodsPage = this.getGoods();
    this.cart = this.getCart();
    this.config.liveSearch.subscribe((currVal: string) => {
      this.currValue = currVal;
    });
  }
  pushInToCart(index: number) {
    this.goodsPage.goods[index].amount++;
    if (this.goodsPage.goods[index].amount > 1) {
      return;
    }
    this.cart.push(this.goodsPage.goods[index])
  }
  getGoods() {
    return this.config.getConfig().goodsPage;
  }
  getCart(){
    return this.config.getConfig().cart;
  }
}
