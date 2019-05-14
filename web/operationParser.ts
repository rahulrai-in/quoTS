import * as minimist from 'minimist';

import { Options, Arguments } from './options';

function minimistAs<T>(
  args?: string[],
  opts?: minimist.Opts
): T & minimist.ParsedArgs {
  return <T & minimist.ParsedArgs>minimist(args, opts);
}

export function fromArgv(argv: string[]): Options {
  var parsedArgs = minimistAs<Arguments>(argv, {
    alias: { mutation: 'm', arguments: 'a' }
  });

  return new Options(parsedArgs._.join(' '), parsedArgs);
}
