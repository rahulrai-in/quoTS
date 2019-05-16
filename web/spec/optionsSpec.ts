require('source-map-support').install();

import * as Options from '../options';
import { Mutation } from '../mutation';

describe('Options', () => {
  it('can be loaded', () => {
    expect(Options).toBeDefined();
  });

  it('requires not null input', () => {
    let args: Options.Arguments = { arguments: 'testVal', mutation: false };
    expect(() => new Options.Options('', args)).toThrowError(
      ' is not valid input.'
    );
  });

  it('can invoke mutations', async () => {
    spyOn(Mutation, 'operation').and.callFake(
      async (input, argument) => await 'invoked'
    );
    var value = await Options.gqlOperations['mutation'].operation(
      'testInput',
      'testArg'
    );
    expect(value).toBe('invoked');
  });
});
