import { ValidationSchema } from "../../../global";

const bodyJsonSchema = {
    type: 'object',
    required: ['name', 'description'],
    properties: {
        name: {
            type: 'string',
            minLength: 5,
        },
        description: {
            type: 'string',
            minLength: 5,
        }
    }
};

export const createTodoSchema: ValidationSchema = {
    body: bodyJsonSchema
};