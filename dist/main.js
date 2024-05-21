"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const allowedOrigins = ['https://www.joinarena.ai', 'https://joinarena.ai'];
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
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
//# sourceMappingURL=main.js.map