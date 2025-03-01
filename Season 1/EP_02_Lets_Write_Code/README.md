# Node.js: V8 Engine and LibUV Library

Node.js is built on two core components:
- **V8 Engine**: Executes JavaScript code.
- **LibUV Library**: Handles asynchronous I/O operations and provides the event loop.

---

## Global Objects in Browser vs Node.js

### In the Browser
- The **global object** is `window`.
- In the browser, `this` refers to the `window` object.
- The `window` object is **not part of the V8 Engine**; it is provided by the browser environment.
- Keywords like `window`, `this`, `self`, and `frames` all point to the same `window` object.

#### Example:
```javascript
console.log(this === window); // true (in the browser)
console.log(self === window); // true (in the browser)
```

### In Node.js

- The **global object** is `global`.
- In Node.js, `this` refers to an empty object `{}` at the top level.
- The `global` object is **not part of the V8 Engine**; it is provided by the Node.js runtime.
- The `global` object provides access to features like `setTimeout`, `setInterval`, and other Node.js-specific functionalities.
- **V8 Engine** does not understand `global` by default. It only understands ECMAScript standards. The `global` object is part of the **LibUV library**, and V8 understands it only when Node.js provides access to it.

#### Example:
```javascript
console.log(this === {}); // true (in Node.js, at the top level)
console.log(global === this); // false (in Node.js)
console.log(global.setTimeout); // [Function: setTimeout]
```

### globalThis

- `globalThis` is a universal way to access the **global object** regardless of the environment (Browser, Node.js, Web Workers, etc.).
- It points to the global object of the environment where the JavaScript code is running.

#### Example:
```javascript
// In the Browser
console.log(globalThis === window); // true

// In Node.js
console.log(globalThis === global); // true
```

---

## Summary

### Browser:
- **Global object**: `window`.
- `this` refers to `window`.
- `window` is provided by the browser, not V8.

### Node.js:
- **Global object**: `global`.
- `this` refers to `{}` at the top level.
- `global` is provided by Node.js (LibUV), not V8.

### `globalThis`:
- A universal way to access the global object in any environment.

