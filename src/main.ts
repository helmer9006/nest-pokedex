import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // para transformar parametros según dto
      transformOptions: {
        // para transformar parametros según dto
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(AppModule.port);
}
bootstrap();
