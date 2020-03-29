import { ValidationSchema } from "../../../global";

const paramsJsonSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
    }
};

export const getTodoByIdSchema: ValidationSchema = {
    params: paramsJsonSchema
};