import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy, VerifiedCallback } from "passport-jwt";
import { Payload } from "src/dto/dtd.payload";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor (private authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: 'hello',
		})
	}

	async validate(payload: Payload, done: VerifiedCallback): Promise<any> {
		console.log("hellol");
		const user = await this.authService.tokenValidateMovie(payload);
		console.log(user);
		if (!user)
		{
			return done(new UnauthorizedException(
				{message: 'user does not exist '}),
				false,
			)
		}
		return done(null, user);
	}
}