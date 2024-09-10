var builder = WebApplication.CreateBuilder(args);
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

List<dynamic> mesoCycles = new List<dynamic>();


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:3000")
                                .AllowAnyHeader() // Allows any header
                                 .AllowAnyMethod(); // Allows any method (GET, POST, etc.)
                      });
});

var app = builder.Build();



app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);



app.MapPost("/MesoCycleAPI", (dynamic request) =>
{
    // Add the incoming data to the list
    mesoCycles.Add(request);
    return Results.Ok(new { message = "MesoCycle added successfully!", data = mesoCycles });
});

app.Run();