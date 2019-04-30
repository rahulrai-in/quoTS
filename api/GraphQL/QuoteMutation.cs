using System.Linq;
using api.Infrastructure.Models;
using Api.Database;
using GraphQL.Types;
using Microsoft.EntityFrameworkCore;

namespace api.GraphQL
{
    public class QuoteMutation : ObjectGraphType
    {
        public QuoteMutation(ApplicationDbContext db)
        {
            Field<AuthorType>(
                $"create{nameof(Quote)}",
                arguments : new QueryArguments(new QueryArgument<NonNullGraphType<QuoteInputType>> { Name = "quote", Description = "Quote to add to author profile." }),
                resolve : context =>
                {
                    var quote = context.GetArgument<QuoteInput>("quote");
                    var author = db
                        .Authors
                        .Include(a => a.Quotes)
                        .FirstOrDefault(i => i.Id == quote.AuthorId);
                    author.Quotes.Add(new Quote { Category = quote.Category, Text = quote.Text });
                    db.SaveChanges();
                    return author;
                });
        }
    }
}