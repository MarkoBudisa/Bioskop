using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BioskopWebApi.Models
{
    [Table("BioskopskaSala")]//Ovaj atribut oznacava kako zelimo da nam se tabela u bazi podataka zove
    public class Sala
    {
        [Key]//Oznacava da je ID primatni kljuc tabele
        [Column("ID")]//Naziv kolone i njen properti ispod
        public int ID {get;set;}//Svaki properti predstavlja jednu kolonu u tabeli u bazi podataka

        [Column("NazivFilma")]
        [MaxLength(255)]//Max duzina u bazi podataka
        [DataType(DataType.Text)]//Tip podatka u bazi podataka   
        public string NazivFilma{get; set;}

        [Column("DatumProjekcije")]
        public string DatumProjekcije { get; set; }

        [Column("VremeProjekcije")]
        public string  VremeProjekcije { get; set; }

        [Column("CenaKarte")]
        public int CenaKarte { get; set; }

        [Column("BrojSale")]
        public int BrojSale { get; set; }

        [Column("X")]
        public int X { get; set; }

        [Column("Y")]
        public int Y { get; set; }
        
    }
}