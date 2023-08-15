import { Controller, Get, Param, Post, Delete, Patch, Put, Body, Query, UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';

@Controller('Users')
export class UsersController {
	constructor(
		private usersRepository: UsersRepository,
		private authService: AuthService,
		private usersService: UsersService,
	){}

	// @Get()
	// async getAll(): Promise<User[]>{
	// 	return this.UsersService.getAll();
	// }

	// // @Get("search")
	// // search(@Query('year') seachingYear: string) {
	// // 	return `We are searching for a User made after: ${seachingYear}`;
	// // }

	// @Get('/:id')
	// async getOne(@Param('id') UserId: string): Promise<User>{
	// 	return this.UsersService.getOne(UserId);
	// }

	@Post()
	async create(@Body() UserData): Promise<User> {
		console.log("signup");
		return this.usersService.signUp(UserData);
	}

	// @Delete('/:id') 
	// async reUser@Param('id') UserId: string): Promise<number> {
	// 	return this.UsersService.deleteOne(UserId);
	// }

	// @Patch('/:id')
	// async pathc(@Param('id') UserId: string, @Body() updateData: User): Promise<number> {
	// 	return this.UsersService.update(UserId, updateData);
	// }

	// @UseGuards(JwtAuthGuard)
	// @Get('/auth/hello')
	// async jwtCheck(@Body() token) {
	// 	return `good: 
	// 	${token}`;
	// }

}
