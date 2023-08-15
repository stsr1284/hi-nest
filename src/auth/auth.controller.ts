import { Controller, UseGuards, Get, Body, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
	) {}

	@Post('/signin')
	signIn(@Body() userId: string): Promise<{ accessToken: string }> {
		return this.authService.getAccessToken(userId);
	}

	@Get('/authenticate')
	@UseGuards(AuthGuard)
	isAuthenticated(){
	  console.log("hello");
	}
}
