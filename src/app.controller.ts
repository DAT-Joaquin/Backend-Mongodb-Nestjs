import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local.auth.gruard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    private authService: AuthService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  handleLogin(@Request() res) {
    return this.authService.login(res.user);
  }
}
