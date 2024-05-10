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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    generateAIResponse(name, businessEmail, email, phone, companyName, companySize, ventureCapitalFunded, publicListedPostIPOCompany, projectType, tellUsAboutYourRequirement, requiredTechnicalExpertise) {
        const prompt = `In this meeting, we aim to thoroughly understand the needs and expectations of our client, whose company size is ${companySize}, indicating the scale at which we will be operating. The fact that they are ${ventureCapitalFunded} to venture capital funding suggests a certain level of financial backing and growth aspirations, while being a ${publicListedPostIPOCompany} points towards a significant market presence and operational maturity. The project type, ${projectType}, sets the stage for our discussion, focusing on the specific domain and challenges we are expected to address. The client has expressed their requirements as '${tellUsAboutYourRequirement}', which gives us a clear direction on what outcomes they are anticipating. Lastly, the need for '${requiredTechnicalExpertise}' technical expertise underlines the specialized skills we need to bring to the table to meet the client's expectations successfully. This meeting will be pivotal in aligning our strategies and resources with the client's vision and technical needs.
    Strict Rules for the output:
    1. The output should not contain any special characters.
    2. The output should not contain ** or *.
    3. The output should be strictly under 700 characters concise.
    4. The output should be paragraph not points.
    5. The output should be interesting and engaging.
    6. The output should be grammatically correct.
    7. The output should be free of spelling mistakes.
    8. The output should be free of punctuation errors.
    9. The output should be free of capitalization errors.
    10. The output should be free of repetition.
    11. The output should be free of redundancy.
    12. The output should be free of verbosity.
    13. The output should be free of jargon.
    `;
        return this.appService.generateAIResponse(prompt);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('generate'),
    __param(0, (0, common_1.Query)('Name')),
    __param(1, (0, common_1.Query)('Business')),
    __param(2, (0, common_1.Query)('Email')),
    __param(3, (0, common_1.Query)('Phone')),
    __param(4, (0, common_1.Query)('Company-name')),
    __param(5, (0, common_1.Query)('Company-Size')),
    __param(6, (0, common_1.Query)('venture-capital-funded')),
    __param(7, (0, common_1.Query)('public-listed-post-IPO-company')),
    __param(8, (0, common_1.Query)('Project-Type')),
    __param(9, (0, common_1.Query)('Tell-us-about-your-requirement')),
    __param(10, (0, common_1.Query)('Required-technical-expertise')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "generateAIResponse", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map