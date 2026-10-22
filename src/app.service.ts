import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: 'success',
      message: 'Welcome to NestJS Starter API',
      maintainer: 'Eslam Hadaya',
      timestamp: new Date().toISOString(),
    };
  }
}