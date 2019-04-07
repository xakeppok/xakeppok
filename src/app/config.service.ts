import { Injectable } from '@angular/core';
import { configurtaion } from './configurtaion';
import { IConfiguration } from './interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public zalupa: boolean = true;
  private config: IConfiguration = configurtaion;
  public liveSearch: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getConfig(): IConfiguration {
    return this.config;
  }
}
