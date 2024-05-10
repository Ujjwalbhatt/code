"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
const openai_1 = require("openai");
(0, dotenv_1.config)();
let AppService = class AppService {
    constructor() {
        this.openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }
    getHello() {
        console.log(process.env.OPENAI_API_KEY);
        return 'Hello World!';
    }
    async generateAIResponse(prompt) {
        console.log(prompt);
        const completion = await this.openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: prompt },
            ],
            model: 'gpt-4-turbo-2024-04-09',
            max_tokens: 150,
        });
        const response = completion.choices[0].message.content;
        return response;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
//# sourceMappingURL=app.service.js.map