using System.Collections.Generic;

namespace api.Infrastructure.Models
{
  public class Author
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public List<Quote> Quotes { get; set; }
  }
}