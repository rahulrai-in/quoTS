using System.Linq;
using api.Infrastructure.Models;
using Api.Database;
using GraphQL.Types;
using Microsoft.EntityFrameworkCore;

namespace api.GraphQL
{
    public class AuthorQuery : ObjectGraphType
    {
        public AuthorQuery(ApplicationDbContext db)
        {
            Field<AuthorType>(
                nameof(Author),
                arguments : new QueryArguments(new QueryArgument<IdGraphType> { Name = "id", Description = "The Id of the Author." }),
                resolve : context =>
                {
                    var id = context.GetArgument<int>("id");
                    var author = db
                        .Authors
                        .Include(a => a.Quotes)
                        .FirstOrDefault(i => i.Id == id);
                    return author;
                });

            Field<ListGraphType<AuthorType>>(
                $"{nameof(Author)}s",
                resolve : context =>
                {
                    var authors = db.Authors.Include(a => a.Quotes);
                    return authors;
                });
        }
    }
}