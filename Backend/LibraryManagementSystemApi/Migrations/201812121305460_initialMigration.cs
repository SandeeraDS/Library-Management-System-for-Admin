namespace LibraryManagementSystemApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BookNumber = c.String(),
                        BookName = c.String(),
                        BookPubName = c.String(),
                        BookPrice = c.String(),
                        BookBuyYear = c.String(),
                        BookAvailability = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CustomerRegistartionNumber = c.String(),
                        Name = c.String(),
                        Email = c.String(),
                        TelephoneNumber = c.String(),
                        DateOfBirth = c.DateTime(nullable: false),
                        RegisteredDate = c.DateTime(nullable: false),
                        Address = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Customers");
            DropTable("dbo.Books");
        }
    }
}
