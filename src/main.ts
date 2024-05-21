import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (origin, callback) => {
      console.log("Incoming origin:", origin); // Debug log to see the incoming origin
      if (!origin || /^https:\/\/(\w+\.)*joinarena.ai$/.test(origin)) {
        console.log("Allowed by CORS"); // Debug log when origin is allowed
        callback(null, true);
      } else {
        console.log("Blocked by CORS"); // Debug log when origin is blocked
        callback(new Error('Not allowed by CORS'), false);
      }
    },
    credentials: true
  });

  await app.listen(3000);
}

bootstrap();
