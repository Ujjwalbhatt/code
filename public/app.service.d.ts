export declare class AppService {
    private genAI;
    private model;
    constructor();
    getHello(): string;
    generateAIResponce(prompt: string): Promise<string>;
}
