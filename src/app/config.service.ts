import { Injectable } from '@angular/core';
import { configurtaion } from './configurtaion'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configurtaion;

  constructor() { }
  
  getConfig(){
    return this.config
  }
}
