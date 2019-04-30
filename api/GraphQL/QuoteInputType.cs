using api.Infrastructure.Models;
using GraphQL.Types;

namespace api.GraphQL
{
  public class QuoteInputType : InputObjectGraphType<QuoteInput>
  {
    public QuoteInputType()
    {
      Name = $"{nameof(QuoteInput)}";
      Field(x => x.AuthorId).Description("Author id.");
      Field(x => x.Text).Description("Quote text.");
      Field(x => x.Category).Description("Quote category.");
    }
  }
}