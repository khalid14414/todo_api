import { Router } from "express";
import { addTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo.js";

// Create a router
const todoRouter = Router();

// Define router
todoRouter.post('/todos',addTodo);

todoRouter.get('/todos' ,getTodo);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id',deleteTodo);

// Export the router
export default todoRouter;