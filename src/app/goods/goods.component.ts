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
  ngOnInit() {
    this.goodsPage = this.getGoods();
  }
  getGoods(){
    return this.config.getConfig().goodsPage
  }
}
