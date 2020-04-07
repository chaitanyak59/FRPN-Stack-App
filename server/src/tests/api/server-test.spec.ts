import { assert } from 'chai';
import { getServerMocks } from "../../main";
import { FastifyServer } from '../../global';
import { mockRequests } from '../_mocks_/mock-api';

const app = getServerMocks();

after(function (done: Mocha.Done) {
    app.server.close(done);
});

describe("Api Automation Tests", function () {
    let server: FastifyServer;

    before((done) => {
        server = app.server;
        done();
    });

    for (const mockReq of mockRequests) {
        it(`${mockReq.description}`, async function () {
            await server.ready();
            const response = await server.inject(mockReq.request);
            const { pickProp, assertion } = mockReq.output;
            assert.strictEqual(response[pickProp], assertion);
            assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8');
        });
    }
});
