const express = require('express');
const app = express();
const { validationMiddleware } = require('./middlewares/validation-middleware');


app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to the express app</h1>")
})

app.use(validationMiddleware)

app.post("/movie", (req, res) => {
    console.log(req.body);
    res.status(200).json({
        "Message": "Movie Added",
        "Status": 200
    })
})


app.listen(3500, () => {
    console.log("App is running at port 3500");
})