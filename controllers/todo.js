import { TodoModel } from "../models/todo.js";
import { addTodoValidator, updateTodoValidator } from "../validators/todo.js";



export const addTodo = async (req, res, next) => {
    try {
        // console.log(req.query)
        //console.log(req.file)
        // Validate user input
        const { error, value } = addTodoValidator.validate({
            ...req.body,
            icon: req.file.filename
        })
        if (error) {
            return res.status(422).json(error)
        }
        // Write todo to database
        await TodoModel.create(value)
        // Respond to request
        res.status(201).json('Todo is added!');
    } catch (error) {
        next(error)
    }
}

export const getTodo = async (req, res, next) => {
    try {
        const { filter = '{}', limit = 10, skip = 0 } = req.query;
        //Fetch todo from the database
        const todos = await TodoModel
            .find(JSON.parse(filter))
            .limit(limit)
            .skip(skip);
        //Return the response
        res.status(200).json(todos);
    } catch (error) {
        next(error)
    }
}

export const updateTodo = (req, res, next) => {
    res.json('Todo updated');
}


export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted');
}