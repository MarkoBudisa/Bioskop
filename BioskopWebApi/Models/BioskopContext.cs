using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace BioskopWebApi.Models
{
    
    public class BioskopContext:DbContext
    {
        public DbSet<Sala> Sale{get; set;}
        public DbSet<VipKartica> VipKartice{get; set;}
        public BioskopContext(DbContextOptions opcije):base(opcije)
        {
            
        }
    }
}