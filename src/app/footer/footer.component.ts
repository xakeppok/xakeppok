import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(private config: ConfigService) { }
  footerInfo = {};
  ngOnInit() {
    this.footerInfo = this.getFooter();
  }
  getFooter(){
    return this.config.getConfig().footerInfo
  }
}
