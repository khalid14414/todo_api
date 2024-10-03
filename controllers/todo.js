import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res ,next) =>{
  try {
      // Validate user input
      // Write todo to database
      await TodoModel.create(req.body)
      // Respond to request
      res.status(201).json('Todo is added!');
  } catch (error) {
    next(error)
  }
}

export const getTodo=  async (req,res,next) =>{
    try {
        //Fetch todo from the database
        const todos = await TodoModel.find()
        //Return the response
        res.status(200).json(todos);
    } catch (error) {
        next(error)
    }
}

export const updateTodo = (req, res, next)=>{
    res.json('Todo updated');
}


export const deleteTodo =(req ,res ,next)=>{
    res.json('Todo deleted');
}