export interface IQuoteRepository {
  ExecuteQuery(): any;
  ExecuteCommand(command: string): any;
}
