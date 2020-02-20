using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Web.Controllers;

namespace Entry
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            var assemblyWithControllersAndViews = typeof(HomeController).Assembly;
            services.AddControllersWithViews().AddApplicationPart(assemblyWithControllersAndViews);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}"
                );
            });
        }
    }
}
