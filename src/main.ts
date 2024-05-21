import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins
  app.enableCors();

  // Alternatively, you can specify the allowed origin(s)
  app.enableCors({
    origin: (origin, callback) => {
      // Check whether the origin is one of the allowed origins
      if (!origin || /^https:\/\/(\w+\.)*joinarena\.ai$/.test(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true // Reflect the credentials setting if necessary
  });

  await app.listen(3000);
}
bootstrap();              