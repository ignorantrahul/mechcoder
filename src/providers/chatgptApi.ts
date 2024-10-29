// MechCoder/src/providers/chatgptApi.ts

import * as vscode from 'vscode';
import OpenAI from 'openai';

let openai: OpenAI | null = null;

function initializeOpenAIClient(): OpenAI | null {
    const apiKey = vscode.workspace.getConfiguration('mechcoder').get<string>('apiKey');
    if (!apiKey) {
        vscode.window.showErrorMessage('API key for OpenAI is not set. Please go to settings and add your API key.');
        return null;
    }

    openai = new OpenAI({ apiKey });
    return openai;
}

export async function callChatGPT(prompt: string): Promise<string> {
    if (!openai) {
        openai = initializeOpenAIClient();
    }

    const model = vscode.workspace.getConfiguration('mechcoder').get<string>('model') || 'gpt-3.5-turbo';

    if (!openai) {
        return ''; // Return early if the client is not initialized
    }

    try {
        const response = await openai.chat.completions.create({
            model,
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 100,
            temperature: 0.7,
        });

        // Ensure response and choices are defined
        return response?.choices?.[0]?.message?.content?.trim() || '';
    } catch (error) {
        vscode.window.showErrorMessage(`Error calling OpenAI API: ${error}`);
        return '';
    }
}
