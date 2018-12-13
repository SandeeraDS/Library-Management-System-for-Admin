using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace LibraryManagementSystemApi.Models
{
    public class LibraryContext:DbContext
    {
        public LibraryContext() : base("LibraryContext")
        {
            Database.SetInitializer<LibraryContext>(null);
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Book> Books { get; set; }
    }
}