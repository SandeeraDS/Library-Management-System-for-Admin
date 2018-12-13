using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LibraryManagementSystemApi.Models
{
    public class Book
    {
        public int Id { get; set; }
        [Required]
        [StringLength(255)]
        public string BookNumber { get; set; }
        [StringLength(255)]
        public string BookName { get; set; }
        [StringLength(255)]
        public string BookPubName { get; set; }
        [StringLength(255)]
        public string BookPrice { get; set; }
        [StringLength(255)]
        public string Author { get; set; }
        [StringLength(255)]
        public string BookBuyYear { get; set; }
        [Required]
        public bool BookAvailability { get; set; }
    }
}