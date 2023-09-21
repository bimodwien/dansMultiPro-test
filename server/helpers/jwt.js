'use strict'
const jsonWebToken = require('jsonwebtoken');

function signToken(payload) {
    const token = jsonWebToken.sign(payload, 'secret');
    return token;
}

function verifyToken(token) {
    const decoded = jsonWebToken.verify(token, 'secret');
    return decoded;
};

module.exports = { signToken, verifyToken }