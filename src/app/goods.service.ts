import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private goodsUrl = "/api/users"
  public getGoods(): Observable<Array<any>>{
    return this.httpClient.get<any[]>(this.goodsUrl);
  }
}
