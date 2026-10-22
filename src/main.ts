import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Security & Performance Middlewares
  app.use(helmet());
  app.use(compression());
  app.enableCors();

  // 2. Global API Prefix
  app.setGlobalPrefix('api');

  // 3. Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // 4. Swagger API Documentation Setup
  const config = new DocumentBuilder()
    .setTitle('NestJS Starter API')
    .setDescription('Production-ready API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 Server running on: http://localhost:${port}/api`);
  console.log(`📚 Swagger Docs on:   http://localhost:${port}/docs`);
}
bootstrap();