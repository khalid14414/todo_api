import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';


// connect to db
await mongoose.connect(process.env.MONGO_URI);




// create an express app
const app = express();

// use middlewares
app.use(express.json())
app.use(cors())

//use routes
app.use(todoRouter);
app.use(userRouter);

const Port = 3000;

// listen for
app.listen(Port, () => {
    console.log(`App is Listening ${Port}`)
})