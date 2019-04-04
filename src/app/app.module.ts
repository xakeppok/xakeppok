import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoodsComponent } from './goods/goods.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoodsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
