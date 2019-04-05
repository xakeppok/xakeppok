import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private config: ConfigService) { }
    cart = []
  ngOnInit() {
    this.cart = this.getCart();
  }
  deleteCart(index:number){
    this.cart.splice(index, 1);
  }
  
  cartSum(index:number){
    return this.cart[index].amount * this.cart[index].price
  }
  cartAmontMinus(index:number){
    if(this.cart[index].amount > 1){
      return this.cart[index].amount--
    }
    else{return}
  }
  cartAmontPlus(index:number){
    return this.cart[index].amount++
  }
  cartAmount(index:number){
    return this.cart[index].amount
  }
   getCart(){
    return this.config.getConfig().cart
  }
}
