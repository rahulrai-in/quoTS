export interface IOperation {
  operation(input: string, argument: string): Promise<string>;
}
