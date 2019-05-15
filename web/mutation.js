"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
const graphql_tag_1 = require("graphql-tag");
const config_1 = require("./config");
require("cross-fetch/polyfill");
exports.Mutation = {
    operation(input, argument) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = () => __awaiter(this, void 0, void 0, function* () {
                let client = new apollo_boost_1.default({ uri: config_1.Config.graphQl });
                return yield client.mutate({
                    mutation: graphql_tag_1.default(input),
                    variables: JSON.parse(argument)
                });
            });
            let result = yield query();
            return JSON.stringify(result.data);
        });
    }
};
//# sourceMappingURL=mutation.js.map