import { Injectable } from '@nestjs/common';

export interface Config {
  apiUrl?: string;
  modules?: string[];
}

@Injectable()
export class ConfigService {
  getConfig(): Config {
    return {
      apiUrl: 'http://api-test.com',
      modules: ['immino'],
    };
  }
}
