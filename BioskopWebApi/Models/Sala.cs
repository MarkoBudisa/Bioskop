using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BioskopWebApi.Models
{
    [Table("BioskopskaSala")]
    public class Sala
    {
        [Key]
        [Column("ID")]
        [DataType("int")]
        public int ID {get;set;}

        [Column("NazivFilma")]
        [DataType("nvarchar(255)")] 
        public string NazivFilma{get; set;}

        [Column("DatumProjekcije")]
        [DataType("nvarchar(255)")]
        public string DatumProjekcije { get; set; }

        [Column("VremeProjekcije")]
        [DataType("nvarchar(255)")]
        public string  VremeProjekcije { get; set; }

        [Column("CenaKarte")]
        [DataType("int")]
        public int CenaKarte { get; set; }

        [Column("BrojSale")]
        [DataType("int")]
        public int BrojSale { get; set; }

        [Column("X")]
        [DataType("int")]
        public int X { get; set; }

        [Column("Y")]
        [DataType("int")]
        public int Y { get; set; }

        [Column("NizSedista")]
        [DataType("nvarchar(255)")]   
        public string NizSedista{get; set;}
        
    }
}