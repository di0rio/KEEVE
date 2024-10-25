using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiKeeve.Migrations
{
    /// <inheritdoc />
    public partial class transmissao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Trasmissão",
                table: "Veiculo",
                newName: "Trasmissao");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Trasmissao",
                table: "Veiculo",
                newName: "Trasmissão");
        }
    }
}
