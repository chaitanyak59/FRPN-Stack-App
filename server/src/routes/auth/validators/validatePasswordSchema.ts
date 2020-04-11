import { ValidationSchema } from "../../../global";

const bodyJsonSchema = {
    type: 'object',
    required: ['id', 'password'],
    properties: {
        id: {
            type: 'number',
            minimum: 1,
        },
        password: {
            type: 'string',
            minLength: 6,
        }
    }
};

export const validatePasswordSchema: ValidationSchema = {
    body: bodyJsonSchema
};