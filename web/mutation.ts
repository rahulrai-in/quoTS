import { IOperation } from './IOperation';
import { default as ApolloClient } from 'apollo-boost';
import { default as gql } from 'graphql-tag';
import { Config } from './config';

export class Mutation implements IOperation {
  // constructor() {
  //   var client = new ApolloClient({
  //     uri: 'https://graphql.example.com'
  //   });
  // }

  operation(input: string, argument: string) {
    return Config.graphQl;
  }
}
