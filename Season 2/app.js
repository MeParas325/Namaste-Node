const express = require('express')

const app = express()

// app.get("/abc", (req, res) => {
//     res.send("abc response");
// })


// app.get("/ab?c", (req, res) => {
//     res.send("abc response");
// })

// app.get("/ab+c", (req, res) => {
//     res.send("abc response");
// })

// app.get("/ab*cd", (req, res) => {
//     res.send("abc response");
// })

// app.get("/a(bc)?d", (req, res) => {
//     res.send("abc response");
// })

// app.use("/test", (req, res) => {
//     res.send("test")
// })

// case 1
// app.use("/user", (req, res) => [
//     res.send("user")
// ])

// case 2
// app.use(
//     "/user",
//     (req, res) => {
//         console.log("Handling the route user 1")
//         res.send("Response 1")
//     },
//     (req, res) => {
//         console.log("Handling the route user 2")
//         res.send("Response 2")
//     }
// )

// case 3 - infinite loading because client will wait for the response from the server
// app.use(
//     "/user",
//     (req, res) => {
//         console.log("Handling the route user 1")
//         // res.send("Response 1")
//     },
//     (req, res) => {
//         console.log("Handling the route user 2")
//         res.send("Response 2")
//     }
// )

// case 3 - it will go to the next route
// app.use(
//     // endpoint
//     "/user",
//     // route 1
//     (req, res, next) => {
//         console.log("Handling the route user 1")
//         // res.send("Response 1")
//         next()
//     },
//     // route 2
//     (req, res) => {
//         console.log("Handling the route user 2")
//         res.send("Response 2")
//     }
// )

// case 4 - it will throw an error because we are sending the res again
// app.use(
//     // endpoint
//     "/user",
//     // route 1
//     (req, res, next) => {
//         console.log("Handling the route user 1")
//         res.send("Response 1")
//         next()
//     },
//     // route 2
//     (req, res) => {
//         console.log("Handling the route user 2")
//         res.send("Response 2")
//     }
// )

// case 5 - it will throw an error because we are sending the res again
// app.use(
//     // endpoint
//     "/user",
//     // route 1
//     (req, res, next) => {
//         console.log("Handling the route user 1")
//         next()
//         res.send("Response 1")
//     },
//     // route 2
//     (req, res) => {
//         console.log("Handling the route user 2")
//         res.send("Response 2")
//     }
// )

// case 5 - it will not go to the next because u have send the response earlier before calling next
// app.use(
//     // endpoint
//     "/user",
//     // route 1
//     (req, res, next) => {
//         console.log("Handling the route user 1")
//         next()
//     },
//     // route 2
//     (req, res, next) => {
//         console.log("Handling the route user 2")
//         res.send("Response 2")
//         console.log("After response 2 it will not go to the next")
//         next()
//     }
// )

// case 6 - it will throw an error user is not defined
// app.use(
//     // endpoint
//     "/user",
//     // route 1
//     (req, res, next) => {
//         console.log("Handling the route user 1")
//         next()
//     },
//     // route 2
//     (req, res, next) => {
//         console.log("Handling the route user 2")
//         next()
//     }
// )

// case 7 - you can pass routes inside an array or u can pass only some routes inside an array
// app.use(
//     // endpoint
//     "/user",
//     // route 1
//     [
//     (req, res, next) => {
//         console.log("Handling the route user 1")
//         next()
//     },
//     // route 2
//     (req, res, next) => {
//         console.log("Handling the route user 2")
//         res.send("response 2")
//     }
// ]
// )
// syntax - app.use(route, rh1, [rh2, rh3], rh4)

// this is also the way to write route handlers
// app.use("/user", (req, res, next) => {
//     console.log("Handling the route user 1")
//     next()
// })

// app.use("/user", (req, res) => {
//     console.log("Handling the route user 2")
//     res.send("Response 2")
// })

// Get /users => whenever a request come to the express server it checks all the app.xxx("matching results") functions and go to the every route handler or middleware and then it the request go to the final function which send the response for that request and that function is known as request handler
// whenever you make a api call it goes through the middle ware chain and at the end it goes to the request handler
app.use("/", (req, res, next) => {
    console.log("Home")
    next()
})

app.use(
    // endpoint
    "/user",
    // route 1
    [
    (req, res, next) => {
        console.log("Handling the route user 1")
        next()
    },
    // route 2
    (req, res, next) => {
        console.log("Handling the route user 2")
        res.send("response 2")
    }
]
)

app.listen(3001, () => {
    console.log("Server is listening at 3001 port.")
})