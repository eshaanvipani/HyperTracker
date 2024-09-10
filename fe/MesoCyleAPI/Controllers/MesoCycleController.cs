using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[ApiController]
[Route("[controller]")]
public class QuotesController : ControllerBase
{
    private static readonly string[] Quotes = new[]
    {
        "The best way to get started is to quit talking and begin doing.",
        "Don’t let yesterday take up too much of today.",
        "It’s not whether you get knocked down, it’s whether you get up.",
        "Failure will never overtake me if my determination to succeed is strong enough."
    };

    [HttpGet]
    public IEnumerable<string> Get()
    {
        return Quotes;
    }
}
