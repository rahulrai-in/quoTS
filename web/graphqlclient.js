"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IQuoteRepository_1 = require("./IQuoteRepository");
exports.quoteRepository = {
    GetAllQuotes: function () {
        return new Array();
    },
    GetQuotesByAuthor: function (authorId) {
        return new IQuoteRepository_1.AuthorQuotes();
    }
};
//# sourceMappingURL=graphqlclient.js.map