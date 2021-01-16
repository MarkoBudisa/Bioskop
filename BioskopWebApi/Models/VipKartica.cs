using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BioskopWebApi.Models
{
    [Table("VipKartica")]//Ovaj atribut oznacava kako zelimo da nam se tabela u bazi podataka zove
    public class VipKartica
    {
        [Key]//Oznacava da je ID primatni kljuc tabele
        [Column("ID")]//Naziv kolone i njen properti ispod
        public int ID {get;set;}//Svaki properti predstavlja jednu kolonu u tabeli u bazi podataka

        [Column("Ime")]
        [MaxLength(255)]//Max duzina u bazi podataka
        [DataType(DataType.Text)]//Tip podatka u bazi podataka   
        public string Ime{get; set;}

        [Column("Prezime")]
        [MaxLength(255)]//Max duzina u bazi podataka
        [DataType(DataType.Text)]//Tip podatka u bazi podataka   
        public string Prezime{get; set;}

        [Column("JMBG")]
        public string JMBG { get; set; }

        [Column("eMail")]
        [MaxLength(255)]//Max duzina u bazi podataka
        [DataType(DataType.Text)]//Tip podatka u bazi podataka   
        public string eMail{get; set;}

        [Column("VrstaKartice")]
        [MaxLength(255)]//Max duzina u bazi podataka
        [DataType(DataType.Text)]//Tip podatka u bazi podataka   
        public string VrstaKartice{get; set;}
        
    }
}