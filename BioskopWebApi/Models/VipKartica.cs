using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BioskopWebApi.Models
{
    [Table("VipKartica")]
    public class VipKartica
    {
        [Key]
        [Column("ID")]
        [DataType("int")]
        public int ID {get;set;}

        [Column("Ime")]
        [DataType("nvarchar(255)")]
        public string Ime{get; set;}

        [Column("Prezime")]
        [DataType("nvarchar(255)")]  
        public string Prezime{get; set;}

        [Column("JMBG")]
        [DataType("nvarchar(255)")]
        public string JMBG { get; set; }

        [Column("eMail")]
        [DataType("nvarchar(255)")] 
        public string eMail{get; set;}

        [Column("VrstaKartice")]
        [DataType("nvarchar(255)")]  
        public string VrstaKartice{get; set;}
        [Column("IdKartice")]
        [DataType("int")]
        public int IdKartice{get;set;}
        
    }
}