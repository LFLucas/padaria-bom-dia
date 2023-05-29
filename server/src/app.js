import { openDb, populateDb} from "./dbConfig.js"
import { createTable, getPeriod } from './Controllers/IngredientsController.js'
import express from "express"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

openDb()
createTable()
//populateDb()

app.get("/period", async (req, res)=>{
    console.log("Processing Data")
    let ingredients = await getPeriod(req.query.start, req.query.end)
    res.json(ingredients)
    console.log("Data Sent")
})

app.listen(5050, () => console.log("Api running on port 5050"))