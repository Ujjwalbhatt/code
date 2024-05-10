import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins
  app.enableCors();

  // Alternatively, you can specify the allowed origin(s)
  // app.enableCors({ origin: 'https://joinarena.webflow.io' });

  await app.listen(3000);
}
bootstrap();