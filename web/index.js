"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const OperationParser = require("./operationParser");
const options_1 = require("./options");
var opts = OperationParser.fromArgv(process.argv.slice(2));
console.log('Input:', opts.input);
console.log('Is Mutation:', opts.mutation);
console.log('Args:', opts.arguments);
var executeOperation = () => __awaiter(this, void 0, void 0, function* () {
    return opts.mutation
        ? yield options_1.gqlOperations['mutation'].operation(opts.input, opts.arguments)
        : yield options_1.gqlOperations['query'].operation(opts.input, opts.arguments);
});
executeOperation().then(result => console.log('OUTPUT:', result));
// "start:debug:brk": "node --nolazy --inspect-brk=9229 index.js query AuthorQuery($id:ID) {author(id:$id) {name quotes {text category}}} -a {\"\"\"id\"\"\":1}"
//# sourceMappingURL=index.js.map