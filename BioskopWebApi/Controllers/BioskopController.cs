using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BioskopWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BioskopWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BioskopController : ControllerBase
    {
        public BioskopContext Context{get; set;}
        public BioskopController(BioskopContext context)
        {
            Context=context;
        }
        [Route("PreuzmiSale")]
        [HttpGet]
        public async Task<List<Sala>> PreuzmiSale()/*Znaci da je metoda asinhrona i da se aplikacija ne blokira ako upit traje dugo*/
        {
            return await Context.Sale.ToListAsync();//await stoji da bi ovo bilo asinhrono
            //include znaci da zelimo i tabelu na koju imamo pokazivac da include-ujemo
        }
        [Route("UpisSale")]
        [HttpPost]
        public async Task UpisiSale([FromBody]Sala sala)//Ako zelimo da fja bude void onda joj samo stavimo Task jer async f-ja ne moze da bude void
        {
            Context.Sale.Add(sala);
            await Context.SaveChangesAsync();
        }
        [Route("IzemniSalu")]
        [HttpPut]//Ovo je za izmenu postojeceg objekta
        public async Task IzmeniSalu([FromBody]Sala sala)
        {
            Context.Update<Sala>(sala);

            await Context.SaveChangesAsync();
        }
        [Route("IzbrisiSalu/{id}")]
        [HttpDelete]//Za brisanje objekta iz baze
        public async Task IzbrisiSalu(int id)
        {
            var sala=await Context.Sale.FindAsync(id);
            Context.Remove(sala);
            await Context.SaveChangesAsync();
        }
        [Route("UpisKartice")]
        [HttpPost]
        public async Task UpisKartice([FromBody]VipKartica kartica)//Ako zelimo da fja bude void onda joj samo stavimo Task jer async f-ja ne moze da bude void
        {
            Context.VipKartice.Add(kartica);
            await Context.SaveChangesAsync();
        }
    }
}