# Modules in Node.js

In Node.js, each file is treated as a **module**. Modules allow you to organize your code into reusable and maintainable pieces. Here’s how modules work in Node.js:

---

## Key Concepts

### 1. Importing Modules
- You can import one module into another using the `require` keyword.
- When you require a module, the code inside that module is executed.
- However, you **cannot directly access** the variables, methods, or functions of the imported module unless they are explicitly exported.

### 2. Encapsulation
- Modules in Node.js protect their variables and functions from leaking into other modules by default.
- If you want to access variables or functions from a required module, you must explicitly **export** them from that module.

---

## Types of Modules in Node.js

There are two types of modules in Node.js:

### 1. **CommonJS**
- **Syntax**:
  - Export: `module.exports`
  - Import: `require`
- **Default**: Used by Node.js by default.
- **Nature**: Older way of handling modules.
- **Behavior**: Synchronous (modules are loaded one at a time).
- **Mode**: Non-strict mode by default.

#### Example:
```javascript
// Exporting a module
module.exports = {
    myFunction: () => console.log("Hello from CommonJS!")
};

// Importing a module
const myModule = require('./myModule');
myModule.myFunction(); // Output: Hello from CommonJS!

### 2. **ModuleJS**
- **Syntax**:
  - Export: `export`
  - Import: `import`
- **Default**: Used by modern frameworks like React, Angular etc.
- **Nature**: Newer way of handling modules.
- **Behavior**: Asynchronous (supports dynamic imports).
- **Mode**: Strict mode by default.

#### Example:
```javascript
// Exporting a module
export const myFunction = () => console.log("Hello from ES Modules!");

// Importing a module
import { myFunction } from './myModule.js';
myFunction(); // Output: Hello from ES Modules!

