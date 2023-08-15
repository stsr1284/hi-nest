import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class JwtAuthGuard implements CanActivate{
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean>{
      const request = context.switchToHttp().getRequest<Request>();
      const token = this.extractTokenFromHeader(request);
      if (!token)
      {
        throw new UnauthorizedException();
      }
      return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
      const authorizationHeader = request.headers;
      const [type, token] = request?.headers['authorization']?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  
  }
  