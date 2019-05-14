"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OperationParser = require("./operationParser");
const options_1 = require("./options");
var opts = OperationParser.fromArgv(process.argv.slice(2));
console.log('Input:', opts.input);
console.log('Is Mutation:', opts.mutation);
console.log('Args:', opts.arguments);
console.log('OUTPUT:  ', opts.mutation
    ? options_1.encoders['mutation'].operation(opts.input, opts.arguments)
    : options_1.encoders['query'].operation(opts.input, opts.arguments));
//# sourceMappingURL=index.js.map