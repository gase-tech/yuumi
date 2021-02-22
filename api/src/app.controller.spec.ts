import { Test, TestingModule } from '@nestjs/testing';
import { ConfigController } from './app.controller';
import { ConfigService } from './config.service';

describe('AppController', () => {
  let appController: ConfigController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConfigController],
      providers: [ConfigService],
    }).compile();

    appController = app.get<ConfigController>(ConfigController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getConfig()).toBe('Hello World!');
    });
  });
});
