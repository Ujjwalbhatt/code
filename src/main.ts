import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS with specific origins
  const allowedOrigins = ['https://www.joinarena.ai', 'https://joinarena.ai'];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);  // Allow requests with no origin, like mobile apps or curl requests
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000);
}

bootstrap();
