import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    generateAIResponce(name: string, businessEmail: string, email: string, phone: string, companyName: string, companySize: string, ventureCapitalFunded: string, publicListedPostIPOCompany: string, projectType: string, tellUsAboutYourRequirement: string, requiredTechnicalExpertise: string): Promise<string>;
}
