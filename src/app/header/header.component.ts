import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'
import { IGoods } from '../interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public visibility: boolean = true;
  public currentValue: string = '';
  public cart: IGoods[] = [];
  public goods: IGoods[] = [];
  constructor(private _config: ConfigService) { }

  ngOnInit() {
    this.cart = this.getCart();
    this.goods = this._config.getConfig().goodsPage.goods;
  }
  toogle() {
    this.visibility = !this.visibility;
  }
  liveSearch(value: string): void {
    this.currentValue = value;
    this._config.liveSearch.next(value);
  }
  deleteCart(index: number) {
    this.cart.splice(index, 1);
  }
  orderSum() {
    let sum: number = 0;
    for (let i = 0; i < this.cart.length; i++) {
      if (Number(this.cart[i].amount) > 0) {
        sum += +this.cartSum(i)
      }
    }
    return sum;
  }
  cartSum(index: number) {
    return Number(this.cart[index].amount) * Number(this.cart[index].price);
  }
  cartAmontMinus(index: number) {
    if (Number(this.cart[index].amount) > 1) {
      return Number(this.cart[index].amount) - 1;
    }
    // else { return; }
  }
  cartAmontPlus(index: number) {
    return Number(this.cart[index].amount) + 1;
  }
  cartAmount(index: number) {
    return this.cart[index].amount;
  }
  getCart() {
    return this._config.getConfig().cart;
  }
}
