import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy} from "passport-jwt";
import { Payload } from "src/dto/dtd.payload";
import { UsersRepository } from "src/users/users.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor (
		private usersRepository: UsersRepository
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'hello',
		})
	}
	async validate(payload: Payload): Promise<any> {
		const { s_id } = payload;
		const user = await this.usersRepository.getOne(s_id);
		if (!user)
			throw new UnauthorizedException();
		return user;
	}
}