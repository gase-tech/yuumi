import { ConfigService } from './config.service';

// tslint:disable-next-line:typedef
export function ConfigLoader(configService: ConfigService) {
  return () => configService.load();
}
