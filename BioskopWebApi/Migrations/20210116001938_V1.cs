using Microsoft.EntityFrameworkCore.Migrations;

namespace BioskopWebApi.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BioskopskaSala",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NazivFilma = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    DatumProjekcije = table.Column<int>(type: "int", nullable: false),
                    VremeProjekcije = table.Column<int>(type: "int", nullable: false),
                    CenaKarte = table.Column<int>(type: "int", nullable: false),
                    BrojSale = table.Column<int>(type: "int", nullable: false),
                    X = table.Column<int>(type: "int", nullable: false),
                    Y = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BioskopskaSala", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "VipKartica",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    JMBG = table.Column<int>(type: "int", nullable: false),
                    eMail = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    VrstaKartice = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VipKartica", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BioskopskaSala");

            migrationBuilder.DropTable(
                name: "VipKartica");
        }
    }
}
