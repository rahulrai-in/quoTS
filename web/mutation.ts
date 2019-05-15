import { IOperation } from './IOperation';
import { default as ApolloClient, FetchResult } from 'apollo-boost';
import { default as gql } from 'graphql-tag';
import { Config } from './config';
import 'cross-fetch/polyfill';

export var Mutation: IOperation = {
  async operation(input: string, argument: string): Promise<string> {
    let query = async (): Promise<FetchResult<any>> => {
      let client = new ApolloClient({ uri: Config.graphQl });
      return await client.mutate({
        mutation: gql(input),
        variables: JSON.parse(argument)
      });
    };

    let result = await query();
    return JSON.stringify(result.data);
  }
};
