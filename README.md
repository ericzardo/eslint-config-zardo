# eslint-config-zardo

A reusable ESLint configuration package for JavaScript and TypeScript projects, designed to enforce coding standards and best practices.

## Installation

To use this configuration in your project, install it as a dev dependency:

```bash
npm install --save-dev eslint-config-zardo
```

or if you are using Yarn:

```bash
yarn add --dev eslint-config-zardo
```

## Usage

### For JavaScript Projects

Create or update your ESLint configuration file (`eslint.config.js`) to use the `eslint-config-zardo` configuration:

```javascript
import eslintConfigZardo from 'eslint-config-zardo/js';

export default eslintConfigZardo;
```

### For TypeScript Projects

For TypeScript, use the TypeScript-specific configuration:

```javascript
import eslintConfigZardo from 'eslint-config-zardo/ts';

export default eslintConfigZardo;
```

## Features

- **JavaScript and JSX Support**: Includes rules for modern JavaScript and React projects.
- **TypeScript Support**: A separate configuration optimized for TypeScript projects.
- **Best Practices**: Enforces strict linting rules to ensure clean and maintainable code.
- **Customization**: Extend or override rules based on your project’s needs.

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.


