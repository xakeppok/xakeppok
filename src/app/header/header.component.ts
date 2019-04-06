import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  visibility: boolean = true
  constructor(private config: ConfigService) { }
    cart = []
  ngOnInit() {
    this.cart = this.getCart();
  }
  toogle(){
    this.visibility = !this.visibility;
  }
  deleteCart(index:number){
    this.cart.splice(index, 1);
  }
   orderSum(){
    let sum:number = 0
    for(let i = 0; i < this.cart.length; i++){
      if(this.cart[i].amount > 0){
        sum += +this.cartSum(i)
      }
    }
    return sum
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
