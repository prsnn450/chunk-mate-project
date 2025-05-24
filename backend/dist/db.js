"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.releaseClient = exports.getClient = exports.query = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});
const query = (text, params) => {
    return pool.query(text, params);
};
exports.query = query;
const getClient = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    return client;
});
exports.getClient = getClient;
const releaseClient = (client) => {
    client.release();
};
exports.releaseClient = releaseClient;
exports.default = pool;
