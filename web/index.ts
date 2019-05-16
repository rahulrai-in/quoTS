import * as OperationParser from './operationParser';
import { gqlOperations } from './options';

var opts = OperationParser.fromArgv(process.argv.slice(2));
console.log('Input:', opts.input);
console.log('Is Mutation:', opts.mutation);
console.log('Args:', opts.arguments);
var executeOperation = async () =>
  opts.mutation
    ? await gqlOperations['mutation'].operation(opts.input, opts.arguments)
    : await gqlOperations['query'].operation(opts.input, opts.arguments);
executeOperation().then(result => console.log('OUTPUT:', result));
