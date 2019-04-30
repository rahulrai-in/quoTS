using api.Infrastructure.Models;
using GraphQL.Types;

namespace api.GraphQL
{
    public class QuoteType : ObjectGraphType<Quote>
    {
        public QuoteType()
        {
            Name = nameof(Quote);
            Field(x => x.Id, type : typeof(IdGraphType)).Description("The Id of the quote.");
            Field(x => x.Text).Description("The quote.");
            Field(x => x.Category).Description("Quote category.");
        }
    }
}