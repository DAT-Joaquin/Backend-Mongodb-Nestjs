import { Controller, Get, Render } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @Render('home')
  handleHomePage() {
    // return this.appService.getHello();
    console.log(this.configService.get('PORT'));
    const message = this.appService.getHello();
    return { message };
  }
}
