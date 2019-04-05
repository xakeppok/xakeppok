import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.sass']
})
export class GoodsComponent implements OnInit {

  constructor(private config: ConfigService) { }
  goodsPage = { };
  cart = [];
  ngOnInit() {
    this.goodsPage = this.getGoods();
    this.cart = this.getCart();
  }
  pushInToCart(index:number){
    this.cart.push(this.goodsPage.goods[index]);
  }
  getGoods(){
    return this.config.getConfig().goodsPage
  }
  getCart(){
    return this.config.getConfig().cart
  }
}
