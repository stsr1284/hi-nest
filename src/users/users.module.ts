import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
	TypeOrmModule.forFeature([User]),
	AuthModule,
],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, AuthService],
  exports: [UsersRepository],
})
export class UsersModule {}