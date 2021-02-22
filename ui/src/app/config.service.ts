import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Config {
  modules?: string[];
  apiUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: Config = {};

  constructor(private httpClient: HttpClient) { }

  load(): Promise<null> {
    return new Promise(resolve => {
      this.httpClient.get<Config>('http://localhost:3000/config')
        .subscribe(config => {
          this.config = config;
          resolve(null);
        });
    });
  }
}
