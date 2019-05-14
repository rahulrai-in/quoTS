import * as OperationParser from './operationParser';
import { encoders } from './options';

var opts = OperationParser.fromArgv(process.argv.slice(2));

console.log('Input:', opts.input);
console.log('Is Mutation:', opts.mutation);
console.log('Args:', opts.arguments);
console.log(
  'OUTPUT:  ',
  opts.mutation
    ? encoders['mutation'].operation(opts.input, opts.arguments)
    : encoders['query'].operation(opts.input, opts.arguments)
);
