import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
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

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('generate')
  generateAIResponce(
    @Query('Name') name: string,
    @Query('Business') businessEmail: string,
    @Query('Email') email: string,
    @Query('Phone') phone: string,
    @Query('Company-name') companyName: string,
    @Query('Company-Size') companySize: string,
    @Query('venture-capital-funded') ventureCapitalFunded: string,
    @Query('public-listed-post-IPO-company') publicListedPostIPOCompany: string,
    @Query('Project-Type') projectType: string,
    @Query('Tell-us-about-your-requirement') tellUsAboutYourRequirement: string,
    @Query('Required-technical-expertise') requiredTechnicalExpertise: string,
  ): Promise<string> {
    const prompt =
      `Name: ${name}\n` +
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
}
