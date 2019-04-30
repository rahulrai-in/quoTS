namespace api.GraphQL
{
    public class QuoteInput
    {
        public int AuthorId { get; set; }
        public string Category { get; set; }
        public string Text { get; set; }
    }
}