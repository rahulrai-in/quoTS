"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mutation_1 = require("./mutation");
const query_1 = require("./query");
function exitIfUndefined(value, message) {
    if (typeof value === 'undefined' || value.trim() === '') {
        console.error(message);
        process.exit(1);
    }
}
exports.gqlOperations = {
    ['mutation']: mutation_1.Mutation,
    ['query']: query_1.Query
};
class Options {
    constructor(input, args) {
        this.input = input;
        exitIfUndefined(input, 'Please pass an input string.');
        this.mutation = args.mutation === undefined ? false : args.mutation;
        this.arguments = args.arguments;
    }
}
exports.Options = Options;
//# sourceMappingURL=options.js.map