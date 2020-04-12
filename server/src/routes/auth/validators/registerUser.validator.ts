import { ValidationSchema } from "../../../global";

const paramsJsonSchema = {
    type: 'object',
    required: ['emailID'],
    properties: {
        emailID: { 
            type: 'string',
            format: 'email' 
        },
    }
};

export const registerUserSchema: ValidationSchema = {
    params: paramsJsonSchema
};