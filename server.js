import express from "express";
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";

// const cloud_db_url = 'mongodb+srv://apragupta:my-web-dev-pw@wed-dev.asbva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// const local_db_url = 'mongodb://localhost:27017/webdev'

const DB_CONNECTION_URL = process.env.WD_DB_URL
console.log(DB_CONNECTION_URL)
mongoose.connect(DB_CONNECTION_URL)
const app = express();
app.use(express.json());
app.use(cors());


helloController(app);
userController(app);
tuitsController(app);



app.listen(process.env.PORT || 4000);