import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local.auth.gruard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  handleLogin(@Request() res) {
    return res.user;
  }
}
