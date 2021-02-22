import { Controller, Get } from '@nestjs/common';
import { Config, ConfigService as ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfig(): Config {
    return this.configService.getConfig();
  }
}
