import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for development
  await app.listen(process.env.PORT ?? 5000);
  console.log("-------------------------------------");
  console.log(`Application is running on http://localhost:${process.env.PORT}`);
}
bootstrap();
