using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace BioskopWebApi.Models
{
    
    public class BioskopContext:DbContext
    {
        public DbSet<Sala> Sale{get; set;}//Referenca na podatke koji se pokupe iz baze podataka
        public DbSet<VipKartica> VipKartice{get; set;}
        public BioskopContext(DbContextOptions opcije):base(opcije)
        {
            
        }
    }
}