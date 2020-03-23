import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/asteroids')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAsteroids(){
    return await this.appService.getAsteroids();
  }
}
