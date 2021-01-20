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
        public async Task<List<Sala>> PreuzmiSale()
        {
            return await Context.Sale.ToListAsync();

        }
        [Route("UpisSale")]
        [HttpPost]
        public async Task UpisiSale([FromBody]Sala sala)
        {
            Context.Sale.Add(sala);
            await Context.SaveChangesAsync();
        }
        [Route("IzemniSalu")]
        [HttpPut]
        public async Task IzmeniSalu([FromBody]Sala sala)
        {
            Context.Update<Sala>(sala);

            await Context.SaveChangesAsync();
        }
        [Route("IzbrisiSalu/{id}")]
        [HttpDelete]
        public async Task IzbrisiSalu(int id)
        {
            var sala=await Context.Sale.FindAsync(id);
            Context.Remove(sala);
            await Context.SaveChangesAsync();
        }
        [Route("UpisKartice")]
        [HttpPost]
        public async Task UpisKartice([FromBody]VipKartica kartica)
        {
            Context.VipKartice.Add(kartica);
            await Context.SaveChangesAsync();
        }
        [Route("PreuzmiKartice")]
        [HttpGet]
        public async Task<List<VipKartica>> PreuzmiKartice()
        {
            return await Context.VipKartice.ToListAsync();
        }
    }
}