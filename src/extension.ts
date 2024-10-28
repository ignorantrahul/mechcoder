import * as vscode from 'vscode';
import { callChatGPT } from './providers/chatgptApi';

export function activate(context: vscode.ExtensionContext) {
    // Code Generation Command
    let generateCodeCommand = vscode.commands.registerCommand('mechcoder.generateCode', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const prompt = await vscode.window.showInputBox({ placeHolder: 'Describe the code you need...' });
            if (prompt) {
                const generatedCode = await callChatGPT(`Generate code for: ${prompt}`);
                editor.edit(editBuilder => {
                    editBuilder.insert(editor.selection.active, generatedCode);
                });
            }
        }
    });

    // Error Correction Command
    let correctErrorsCommand = vscode.commands.registerCommand('mechcoder.correctErrors', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const code = editor.document.getText(editor.selection);
            const correctedCode = await callChatGPT(`Correct errors in the following code:\n\n${code}`);
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, correctedCode);
            });
        }
    });

    // Refactoring Command
    let refactorCodeCommand = vscode.commands.registerCommand('mechcoder.refactorCode', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const code = editor.document.getText(editor.selection);
            const refactoredCode = await callChatGPT(`Refactor the following code to make it cleaner and more efficient:\n\n${code}`);
            editor.edit(editBuilder => {
                editBuilder.replace(editor.selection, refactoredCode);
            });
        }
    });

    context.subscriptions.push(generateCodeCommand, correctErrorsCommand, refactorCodeCommand);
}

export function deactivate() {}
