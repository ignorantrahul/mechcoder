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

To use MechCoder, you'll need an API key from OpenAI to access ChatGPT services. Follow these steps to obtain your key:

## Step 1: Create an OpenAI Account

If you don’t already have an OpenAI account, start by signing up at [OpenAI’s website](https://platform.openai.com/signup).

## Step 2: Access the API Key Section

1. Once logged in, go to the **API Keys** section directly by visiting:

   - [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

   Alternatively, click on your profile in the top-right corner of the OpenAI dashboard, then select **API Keys** from the dropdown menu.

## Step 3: Generate a New API Key

1. Click on the **Create new secret key** button.
2. OpenAI will display a unique API key—make sure to copy it, as it won’t be shown again for security reasons.

## Step 4: Secure Your API Key

Your API key provides access to your OpenAI account, so handle it carefully:

- **Do not share** your API key publicly or include it in version-controlled files.
- Store it in the **MechCoder settings** within VSCode.

## Step 5: Add Your API Key to MechCoder

1. Open VSCode, then navigate to **Settings** (File > Preferences > Settings).
2. Search for `MechCoder` and paste your API key into the **API Key** field.
3. You can also select the ChatGPT model version to customize the MechCoder experience.

> **Note**: OpenAI may charge based on the API usage tier you select. Refer to OpenAI's [Pricing](https://openai.com/pricing) page for details.

With your API key in place, you're ready to use all of MechCoder’s powerful AI-driven features!

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
