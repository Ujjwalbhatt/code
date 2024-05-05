import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('generate')
  generateAIResponse(
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
    const prompt = `In this meeting, we aim to thoroughly understand the needs and expectations of our client, whose company size is ${companySize}, indicating the scale at which we will be operating. The fact that they are ${ventureCapitalFunded} to venture capital funding suggests a certain level of financial backing and growth aspirations, while being a ${publicListedPostIPOCompany} points towards a significant market presence and operational maturity. The project type, ${projectType}, sets the stage for our discussion, focusing on the specific domain and challenges we are expected to address. The client has expressed their requirements as '${tellUsAboutYourRequirement}', which gives us a clear direction on what outcomes they are anticipating. Lastly, the need for '${requiredTechnicalExpertise}' technical expertise underlines the specialized skills we need to bring to the table to meet the client's expectations successfully. This meeting will be pivotal in aligning our strategies and resources with the client's vision and technical needs.
    Strict Rules for the output:
    1. The output should not contain any special characters.
    2. The output should not contain ** or *.
    3. The output should be strictly under 300 characters concise.
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


    console.log(prompt);
    return this.appService.generateAIResponse(prompt);
  }
}