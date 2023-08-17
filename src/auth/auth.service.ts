import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Payload } from 'src/dto/dtd.payload';
import { AuthCredentialsDto } from './dto/auth.authcredentialdto';
import { User } from 'src/users/entities/user.entity';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class AuthService {
	constructor(
		private jwtService: JwtService,
		private userRepository: UsersRepository,
		) {}

	async signUp(authcredentialsdto: AuthCredentialsDto): Promise<User> {
		return this.userRepository.createUser(authcredentialsdto);
	}

	async signIn(authcredentialsdto: AuthCredentialsDto): Promise<{ accessToken: string }> {
		const { s_id }  = authcredentialsdto;
		const user = await this.userRepository.getOne(s_id);
		if (!user) {
			console.log("signIn: go signUp!!");
			this.signUp(authcredentialsdto);
		}
			const payload = { s_id };
			const accessToken = await this.jwtService.sign(payload);
			return { accessToken };
	}


	async tokenValidateMovie(payload: Payload): Promise<User | undefined> {
		return await this.userRepository.getOne(payload.s_id);
	}
}
