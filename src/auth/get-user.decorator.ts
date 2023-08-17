import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { User } from "src/users/entities/user.entity";

export const GetUser = createParamDecorator((data, ctx: ExecutionContext): User => {
	const req = ctx.switchToHttp().getRequest();
	console.log("GetUser: ", req);
	return req.user;
})