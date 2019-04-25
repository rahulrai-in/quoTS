namespace api.Infrastructure
{
  public class Quote
  {
    public string Id { get; set; }

    public string Text { get; set; }

    public string Genre { get; set; }

    public string AuthorId { get; set; }

    public Author Author { get; set; }
  }
}