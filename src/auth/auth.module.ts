import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/movies/entities/movie.entity';
import { MoviesService } from 'src/movies/movies.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    TypeOrmModule.forFeature([Movie]),
    JwtModule.register({
      global: true,
      secret: 'hello',
      signOptions: { expiresIn: '60s'},
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, MoviesService, JwtStrategy]
  // exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
