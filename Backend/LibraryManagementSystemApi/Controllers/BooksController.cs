using AutoMapper;
using LibraryManagementSystemApi.Dtos;
using LibraryManagementSystemApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LibraryManagementSystemApi.Controllers
{
    public class BooksController : ApiController
    {

        LibraryContext _context;
        public BooksController()
        {
            _context = new LibraryContext();
        }


        [HttpGet]
        public IHttpActionResult GetBooks()
        {
            return Ok(_context.Books.ToList().Select(Mapper.Map<Book,BookDto>));
        }

        [HttpGet]
        public IHttpActionResult GetBook(int id)
        {

            Book book = _context.Books.FirstOrDefault(x => x.Id == id);

            if (book == null)
            {
                return NotFound();
            }
            return Ok(Mapper.Map<Book,BookDto>(book));
        }

        [HttpPost]
        public IHttpActionResult CreateBook(BookDto bookDto)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var book = Mapper.Map<BookDto, Book>(bookDto);


            _context.Books.Add(book);
            _context.SaveChanges();

            return Ok(book);

        }



    }
}
