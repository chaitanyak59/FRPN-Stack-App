import { HTTPInjectOptions, HTTPInjectResponse } from "fastify";

interface ApiMock {
    request: HTTPInjectOptions;
    output: {
        pickProp: keyof HTTPInjectResponse;
        // eslint-disable-next-line @typescript-eslint/ban-types
        assertion: number | string | boolean;
    };
    description: string;
}

export const mockRequests: ApiMock[] = [{
    request: {
        method: 'GET',
        url: '/api/posts'
    },
    output: {
        pickProp: 'statusCode',
        assertion: 200
    },
    description: 'Return Todo Items with Status 200'
},{
    request: {
        method: 'GET',
        url: '/api/posts/25'
    },
    output: {
        pickProp: 'statusMessage',
        assertion: 'OK'
    },
    description: 'Test Get Api Route With an arbitary ID'
}];