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
        this.appService.generateAIResponce(`
      Task: Generate an agenda paragraph based on fresh input.

      Requirements:

      1. Create a agenda para outlining the topics to be covered.
      2. Include relevant details such as Name, Business, Company Name, Company Size, Venture Capital Funded, Public Listed Post IPO Company, Public Listed Post IPO Company Project Type Tell us about your requirement, Required Technical Expertise.
      3. Ensure clarity and coherence in the agenda structure.
      4. Use natural language and professional tone.
      5. Avoid duplicating any previous input.

      Additional Information:

      1. The agenda should be suitable for a business meeting or any other relevant context.
      2. Consider incorporating sections for introductions, agenda items, discussion topics, and action items.
      3. Each agenda item should have a clear purpose and desired outcome.

      Next input will contain:-
      Name,
      Business,
      Company Name,
      Company Size,
      Venture Capital Funded,
      Public Listed Post IPO Company,
      Project Type,
      Tell us about your requirement,
      Required Technical Expertise,

      NOTE: Response must be a paragraph
    `);
    }
    getHello() {
        return this.appService.getHello();
    }
    generateAIResponce(name, businessEmail, email, phone, companyName, companySize, ventureCapitalFunded, publicListedPostIPOCompany, projectType, tellUsAboutYourRequirement, requiredTechnicalExpertise) {
        const prompt = `Name: ${name}\n` +
            `Business: ${businessEmail}\n` +
            `Company Name: ${companyName}\n` +
            `Company Size: ${companySize}\n` +
            `Venture Capital Funded: ${ventureCapitalFunded}\n` +
            `Public Listed Post IPO Company: ${publicListedPostIPOCompany}\n` +
            `Project Type: ${projectType}\n` +
            `Tell us about your requirement: ${tellUsAboutYourRequirement}\n` +
            `Required Technical Expertise: ${requiredTechnicalExpertise}
      `;
        console.log(prompt);
        return this.appService.generateAIResponce(prompt);
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
], AppController.prototype, "generateAIResponce", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map