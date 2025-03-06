const crypto = require("crypto")

process.env.UV_THREADPOOL_SIZE = 2

console.log('UV_THREADPOOL_SIZE:', process.env.UV_THREADPOOL_SIZE);

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("1. crypto pbkdf2")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("2. crypto pbkdf2")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("3. crypto pbkdf2")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("4. crypto pbkdf2")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("5. crypto pbkdf2")
})