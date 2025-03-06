# Understanding libuv Thread Pool

libuv has a built-in thread pool that is used for handling tasks that require asynchronous execution. This is useful for operations like:

- File system handling
- Cryptography
- DNS lookups

### How it Works
When a task like file handling, cryptography, or DNS lookup needs execution, it is sent to **libuv**, which then assigns it to the thread pool. Each task gets executed in a separate thread.

### Thread Pool Size
By default, the thread pool in libuv has **4 threads**. However, you can modify this size based on your requirements.

#### How to Modify Thread Pool Size
You can change the thread pool size by setting the `UV_THREADPOOL_SIZE` environment variable before running your application. For example:

```sh
export UV_THREADPOOL_SIZE=8   # Sets the thread pool size to 8
node your_script.js            # Runs your Node.js script with the new thread pool size
```

On Windows (Command Prompt):
```cmd
set UV_THREADPOOL_SIZE=8
node your_script.js
```

Alternatively, you can set the thread pool size dynamically within your Node.js script:

```js
process.env.UV_THREADPOOL_SIZE = 8; // Sets the thread pool size to 8

const crypto = require('crypto');

console.log('Starting a heavy task...');
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
  console.log('Task completed!');
});
```

### Execution Order
The execution order of tasks in the thread pool is **not fixed**. It may vary each time you run the code since threads work independently and complete at different times.

This behavior helps in efficient execution by utilizing multiple threads for handling heavy tasks asynchronously.

