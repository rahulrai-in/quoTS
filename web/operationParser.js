"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
const options_1 = require("./options");
function minimistAs(args, opts) {
    return minimist(args, opts);
}
function fromArgv(argv) {
    var parsedArgs = minimistAs(argv, {
        alias: { mutation: 'm', arguments: 'a' }
    });
    return new options_1.Options(parsedArgs._.join(' '), parsedArgs);
}
exports.fromArgv = fromArgv;
//# sourceMappingURL=operationParser.js.map