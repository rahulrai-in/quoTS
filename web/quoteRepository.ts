import { IQuoteRepository } from './IQuoteRepository';

export var quoteRepository: IQuoteRepository = {
  ExecuteQuery: function(): any {
    return 'testq';
  },
  ExecuteCommand: function(command: string): any {
    return 'testc';
  }
};
