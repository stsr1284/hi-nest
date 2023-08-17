import { Controller, UseGuards, Body, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

import { AuthCredentialsDto } from './dto/auth.authcredentialdto';
import { User } from 'src/users/entities/user.entity';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
	) {}

	@Post('/signup')
	signUp(@Body() authcredentialsdto:AuthCredentialsDto): Promise<User> {
		return this.authService.signUp(authcredentialsdto);
	}

	@Post('/signin')
	signIn(@Body() authcredentialsdto:AuthCredentialsDto): Promise<{ accessToken: string}> {
		return this.authService.signIn(authcredentialsdto);
	}

	@Post('/test')
	@UseGuards(AuthGuard())
	isAuthenticated(@GetUser() user: User){
	  console.log("hello", user);
	}
}
