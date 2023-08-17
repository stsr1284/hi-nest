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
  
    // const {
    //   accessToken,
    //   accessTokenExpiresAt,
    //   refreshToken,
    //   refreshTokenExpiresAt,
    // } = result;
    // const id = await getKakaoProfile();
    // console.log("profile: ", id);
    //   const response = await api.post('http://localhost:3000/auth/signin', { s_id: "react_test" });
    //   const serverToken = JSON.parse(response.request._response).accessToken;
    //   const headers = {
    //     Authorization: `Bearer ${serverToken}`,
    //   };
    //   console.log("headers: ", headers);
    //   const user = await api.post('http://localhost:3000/auth/test', headers);
      
  }
  