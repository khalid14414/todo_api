import Joi from "joi";

export const addTodoValidator =Joi.object({
    title:Joi.string().required()
});

export const updateTodoValidator = Joi.object({
    title:Joi.string(),
    completed: Joi.boolean()
})