import { IOperation } from './IOperation';

export var query: IOperation = {
  operation: (input: string, argument: string) => {
    return 'query result';
  }
};
