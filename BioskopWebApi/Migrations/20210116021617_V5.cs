using Microsoft.EntityFrameworkCore.Migrations;

namespace BioskopWebApi.Migrations
{
    public partial class V5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_VipKartica",
                table: "VipKartica");

            migrationBuilder.RenameColumn(
                name: "BrojKartice",
                table: "VipKartica",
                newName: "JMBG");

            migrationBuilder.AlterColumn<int>(
                name: "JMBG",
                table: "VipKartica",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "ID",
                table: "VipKartica",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VipKartica",
                table: "VipKartica",
                column: "ID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_VipKartica",
                table: "VipKartica");

            migrationBuilder.DropColumn(
                name: "ID",
                table: "VipKartica");

            migrationBuilder.RenameColumn(
                name: "JMBG",
                table: "VipKartica",
                newName: "BrojKartice");

            migrationBuilder.AlterColumn<int>(
                name: "BrojKartice",
                table: "VipKartica",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VipKartica",
                table: "VipKartica",
                column: "BrojKartice");
        }
    }
}
