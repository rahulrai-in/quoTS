import { Mutation } from './mutation';
import { query } from './query';

function exitIfUndefined(value: any, message: string) {
  if (typeof value === 'undefined' || value.trim() === '') {
    console.error(message);
    process.exit(1);
  }
}

export const encoders = {
  ['mutation']: new Mutation(),
  ['query']: query
};

export interface Arguments {
  readonly mutation: boolean;
  readonly arguments: string;
}

export class Options implements Arguments {
  readonly mutation: boolean;
  readonly arguments: string;

  constructor(public readonly input: string, args: Arguments) {
    exitIfUndefined(input, `Please pass an input string.`);

    this.mutation = args.mutation === undefined ? false : args.mutation;
    this.arguments = args.arguments;
  }
}
