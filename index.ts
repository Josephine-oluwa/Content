import express, { Application } from "express"
import mongoose from "mongoose"
import cors from "cors"

const url: string = "mongodb://127.0.0.1:27017/mediumDB";

const app: Application = express()
const port: number = 3344

app.use (
    cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
})
);

app.use(express.json())
app.use ("/api/v1", 
// article
)

app.listen(port, () => {
    mongoose
    .connect(url)
    .then(()=> {
        console.log();
        console.log("connect")
    })
    .catch((error) => {
        console.log(error)
    })
})