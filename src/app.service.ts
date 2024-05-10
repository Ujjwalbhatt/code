import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config();

@Injectable()
export class AppService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  getHello(): string {
    console.log(process.env.OPENAI_API_KEY);
    return 'Hello World!';
  }

  async generateAIResponse(prompt: string): Promise<string> {
    console.log(prompt);
    const completion = await this.openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-4-turbo',
      max_tokens: 150,
    });
    const response = completion.choices[0].message.content;
    return response;
  }
}

