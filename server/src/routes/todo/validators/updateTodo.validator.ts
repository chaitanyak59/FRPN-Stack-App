import { ValidationSchema } from "../../../global";

const bodyJsonSchema = {
    type: 'object',
    required: ['id', 'name', 'description'],
    properties: {
        name: {
            type: 'string',
            minLength: 5,
        },
        id: {
            type: 'number',
            minimum: 1,
        },
        description: {
            type: 'string',
            minLength: 5,
        }
    }
};

export const updateTodoItemSchema: ValidationSchema = {
    body: bodyJsonSchema
};