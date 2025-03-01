# JavaScript Execution in V8 Engine  

When JavaScript code runs in the V8 engine, it goes through multiple stages to get executed efficiently.  

## 1. Parsing  
The given JavaScript code is first parsed and broken down into smaller components:  

- **Lexical Analysis (Tokenization)**  
  The code is converted into tokens. *(Code → Tokens)*  

- **Syntax Analysis (Parsing)**  
  The tokens are transformed into an **Abstract Syntax Tree (AST)**. *(Tokens → AST)*  

## 2. Interpretation & Execution  
Once the AST is generated, it is processed for execution:  

- The **Ignition Interpreter** takes the AST and converts it into **Bytecode**. *(AST → Bytecode)*  
- The Bytecode is then executed by the V8 engine.  

## 3. Optimization by the Compiler  
While executing the bytecode, V8 continuously looks for frequently used code segments:  

- If a piece of code runs repeatedly, it is identified as **HOT Code**.  
- The **TurboFan Compiler** optimizes this HOT Code by converting it into **highly optimized machine code** for faster execution.  
- However, during optimization, **TurboFan makes assumptions** based on the data types being used. If these assumptions turn out to be incorrect, V8 **deoptimizes** the code and reverts to a slower, more flexible execution.  
- Also a Garbage collector also works behind the scenes named **Orinono** which takes those objects and variables which are not being used in our code.

### Example: Optimization and Deoptimization  

#### ✅ **Optimized Execution**  
1. Suppose we have a simple function:  
   ```js
   function sum(a, b) {
       return a + b;
   }

   sum(2, 3); // Called with numbers → TurboFan assumes 'a' and 'b' will always be numbers.

By following this process, V8 ensures JavaScript code runs as efficiently as possible.  
