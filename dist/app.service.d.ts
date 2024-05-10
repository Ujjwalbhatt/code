export declare class AppService {
    private openai;
    constructor();
    getHello(): string;
    generateAIResponse(prompt: string): Promise<string>;
}
