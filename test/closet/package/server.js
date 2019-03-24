'use strict';

const Hapi = require('hapi');
const Lalalambda = require('../../..');

exports.deployment = async () => {

    const server = Hapi.server();

    await server.register(Lalalambda);

    server.lambda({
        id: 'package-lambda',
        handler: () => ({ success: 'packaged' })
    });

    return server;
};