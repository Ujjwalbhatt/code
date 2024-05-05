export declare class AppService {
    private genAI;
    private model;
    constructor();
    getHello(): string;
    generateAIResponse(prompt: string): Promise<string>;
}
