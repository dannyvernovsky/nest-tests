import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import axios from 'axios';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'AXIOS',
      useValue: axios
    }
  ],
})
export class AppModule { }
