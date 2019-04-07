import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb(){
    const goods = [
      {img: '/assets/img/img-1.png', name: 'Обои', article: 'Артикул', brand: 'Fromel', price: '1400', img_short: '/assets/img/img-1-short.png', amount: '0'},
      {img: '/assets/img/img-2.png', name: 'Обои', article: 'Артикул', brand: 'Mental', price: '1300', img_short: '/assets/img/img-2-short.png', amount: '0'},
      {img: '/assets/img/img-3.png', name: 'Обои', article: 'Артикул', brand: 'Fromental', price: '1200', img_short: '/assets/img/img-3-short.png', amount: '0'},
      {img: '/assets/img/img-1.png', name: 'Обои', article: 'Артикул', brand: 'Fromental', price: '1500', img_short: '/assets/img/img-1-short.png', amount: '0'},
      {img: '/assets/img/img-2.png', name: 'Обои', article: 'Артикул', brand: 'Fromental', price: '1600', img_short: '/assets/img/img-2-short.png', amount: '0'},
      {img: '/assets/img/img-3.png', name: 'Обои', article: 'Артикул', brand: 'Fromental', price: '1700', img_short: '/assets/img/img-3-short.png', amount: '0'},
      {img: '/assets/img/img-1.png', name: 'Обои', article: 'Артикул', brand: 'Fromental', price: '1800', img_short: '/assets/img/img-1-short.png', amount: '0'},
      {img: '/assets/img/img-2.png', name: 'Обои', article: 'Артикул', brand: 'Fromental', price: '1900', img_short: '/assets/img/img-2-short.png', amount: '0'},
      {img: '/assets/img/img-3.png', name: 'Обои', article: 'Артикул', brand: 'Fromental', price: '1510', img_short: '/assets/img/img-3-short.png', amount: '0'}
   ];
   //const cart = [ ];
    return {goods};
  }
 

  constructor() { }
}
