import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { AuthCredentialsDto } from "src/auth/dto/auth.authcredentialdto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
	constructor(
		private userRepositroy: UsersRepository
	) {}
	

	async signUp(authcredentialdto: AuthCredentialsDto): Promise<User> {
		return this.userRepositroy.createUser(authcredentialdto);
	}
}