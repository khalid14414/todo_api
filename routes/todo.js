import { Router } from "express";
import { addTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo.js";

import { localUpload,remoteUpload } from "../middlewares/upload.js";

// Create a router
const todoRouter = Router();

// Define router
todoRouter.post('/todos', remoteUpload.single('icon'), addTodo);

todoRouter.get('/todos', getTodo);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id', deleteTodo);

// Export the router
export default todoRouter;