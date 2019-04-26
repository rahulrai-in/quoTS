using api.Infrastructure.Models;
using GraphQL.Types;

namespace api.GraphQL
{
    public class AuthorType : ObjectGraphType<Author>
    {
        public AuthorType()
        {
            Name = nameof(Author);

            Field(x => x.Id, type : typeof(IdGraphType)).Description("Author Id.");
            Field(x => x.Name).Description("The name of the author.");
            Field(x => x.Quotes, type : typeof(ListGraphType<QuoteType>)).Description("Author's quotes.");
        }
    }
}