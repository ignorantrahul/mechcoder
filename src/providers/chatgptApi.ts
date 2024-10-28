import * as vscode from 'vscode';
import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/completions';

export async function callChatGPT(prompt: string): Promise<string> {
    const apiKey = vscode.workspace.getConfiguration('mechcoder').get<string>('apiKey');
    const modelVersion = vscode.workspace.getConfiguration('mechcoder').get<string>('modelVersion') || 'gpt-3.5-turbo';

    if (!apiKey) {
        vscode.window.showErrorMessage("API key for MechCoder is not set. Please configure it in the settings.");
        return 'Error: API key not set.';
    }

    try {
        const response = await axios.post(
            OPENAI_API_URL,
            {
                model: modelVersion,
                prompt: prompt,
                max_tokens: 200,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        vscode.window.showErrorMessage("Failed to retrieve response from OpenAI.");
        return 'Error in generating response';
    }
}
