# MechCoder - Your AI-powered Coding Assistant

MechCoder is a powerful VSCode extension that seamlessly integrates OpenAI's ChatGPT API into your coding environment. From code generation and intelligent suggestions to error correction and refactoring, MechCoder is designed to enhance productivity and coding quality in your development workflow.

![MechCoder Banner](./assets/mechcoder-banner.png)

## Key Features 🚀

- **Code Generation**: Quickly generate code snippets based on prompts.
- **Error Correction**: Identify and correct coding errors effortlessly.
- **Refactoring**: Optimize and clean up code for improved readability and performance.
- **Suggestions**: Real-time coding suggestions and completion support.
- **Model Options**: Choose between different ChatGPT model versions for tailored responses.

## Installation 📥

To install MechCoder in your VSCode environment, follow these steps:

1. **Download the `.vsix` file**  
   [Download the latest version](https://github.com/ignorantrahul/mechcoder/releases)

2. **Install the Extension**  
   Open your terminal and run:

   ```bash
   code --install-extension mechcoder-<version>.vsix
   ```

3. **Configure API Key and Model Version**  
   Go to **Settings** in VSCode, search for `MechCoder`, and add:
   - **API Key**: Your OpenAI API key
   - **Model Version**: Select either `gpt-4` or `gpt-3.5-turbo`

## Getting Started 🌱

1. **Activate Commands**  
   Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and search for:

   - `MechCoder: Generate Code`
   - `MechCoder: Correct Errors`
   - `MechCoder: Refactor Code`

2. **Use Keyboard Shortcuts**  
   You can also assign custom keyboard shortcuts to streamline your coding process.

3. **Explore Settings**  
   MechCoder provides configurable settings to adjust the API key, model, and other parameters.

## Commands 📜

| Command                     | Description                            |
| --------------------------- | -------------------------------------- |
| `MechCoder: Generate Code`  | Generate code snippets based on input  |
| `MechCoder: Correct Errors` | Automatically correct coding errors    |
| `MechCoder: Refactor Code`  | Suggest improvements and optimizations |

## Requirements 📋

- **VSCode** version 1.60.0 or higher
- **Node.js** and **npm** installed
- **OpenAI API Key**

## Contributing 🤝

We welcome contributions! To contribute:

1. Fork the repository and create a new branch.
2. Make your changes and run tests.
3. Submit a pull request for review.

## License 📄

This project is licensed under the [MIT License](LICENSE.md). You are free to use, modify, and distribute this extension.

## Support and Feedback 💬

If you encounter any issues, please check the [GitHub Issues](https://github.com/ignorantrahul/mechcoder/issues) page or reach out through our [support page](https://github.com/ignorantrahul/mechcoder).

---

With **MechCoder**, coding assistance is always a command away! Happy coding! 👨‍💻👩‍💻
