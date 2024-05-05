import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
config();

@Injectable()
export class AppService {
  private genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  private model: GenerativeModel;
  constructor() {
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
  }
  getHello(): string {
    console.log(process.env.GEMINI_API_KEY);
    return 'Hello World!';
  }

  async generateAIResponse(prompt: string): Promise<string> {
    console.log(prompt);
    const result = await this.model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  }
}