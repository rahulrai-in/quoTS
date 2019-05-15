require('source-map-support').install();

import * as OperationParser from '../operationParser';

const SimpleTestString = 'Input Command';
const MutationFlag = '-m';
const ArgumentParameterName = '-a';
const ArgumentParameterValue = 'Argument';

describe('OperationParser', () => {
  it('can be loaded', () => {
    expect(OperationParser).toBeDefined();
  });

  it('can pass input to Options', () => {
    expect(OperationParser.fromArgv([SimpleTestString]).input).toBe(
      SimpleTestString
    );
  });

  it('can pass argument to Options', () => {
    expect(
      OperationParser.fromArgv([
        SimpleTestString,
        ArgumentParameterName,
        ArgumentParameterValue
      ]).arguments
    ).toBe(ArgumentParameterValue);
  });

  it('can pass mutation flag to Options', () => {
    expect(
      OperationParser.fromArgv([SimpleTestString, MutationFlag]).mutation
    ).toBe(true);
  });
});
