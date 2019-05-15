import { IOperation } from './IOperation';
import { default as ApolloClient, ApolloQueryResult } from 'apollo-boost';
import { default as gql } from 'graphql-tag';
import { Config } from './config';
import 'cross-fetch/polyfill';

export var Query: IOperation = {
  async operation(input: string, argument: string): Promise<string> {
    let query = async (): Promise<ApolloQueryResult<any>> => {
      let client = new ApolloClient({ uri: Config.graphQl });
      return await client.query({
        query: gql(input),
        variables: JSON.parse(argument)
      });
    };

    let result = await query();
    return JSON.stringify(result.data);
  }
};
