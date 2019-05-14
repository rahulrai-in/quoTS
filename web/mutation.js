"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
class Mutation {
    // constructor() {
    //   var client = new ApolloClient({
    //     uri: 'https://graphql.example.com'
    //   });
    // }
    operation(input, argument) {
        return config_1.Config.graphQl;
    }
}
exports.Mutation = Mutation;
//# sourceMappingURL=mutation.js.map