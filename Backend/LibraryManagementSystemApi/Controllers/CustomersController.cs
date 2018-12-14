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
    public class CustomersController : ApiController
    {
        LibraryContext _context;
        public CustomersController()
        {
            _context = new LibraryContext();
        }


        [HttpGet]
        public IHttpActionResult GetCustomers()
        {
            return Ok(_context.Customers.ToList().Select(Mapper.Map<Customer,CustomerDto>));
        }

        [HttpGet]
        public IHttpActionResult GetCustomer(int id) {

            Customer customer = _context.Customers.FirstOrDefault(x => x.Id == id);

            if (customer == null)
            {
                return NotFound();
            }
            return Ok(Mapper.Map<Customer,CustomerDto>(customer));
        }

        [HttpPost]
        public IHttpActionResult CreateCustomer(CustomerDto customerDto) {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var customer = Mapper.Map<CustomerDto, Customer>(customerDto);
            _context.Customers.Add(customer);
            _context.SaveChanges();

            return Ok();

        }

        [HttpPut]
        public IHttpActionResult UpdateCustomer(int id, CustomerDto customerDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var customerInDb = _context.Customers.SingleOrDefault(b => b.Id == id);
            if (customerInDb == null)
            {
                return NotFound();
            }
            else
            {
                Mapper.Map(customerDto, customerInDb);
                _context.SaveChanges();
                return Ok();
            }


        }

        [HttpDelete]
        public IHttpActionResult DeleteCustomer(int id)
        {
            var customerInDb = _context.Customers.SingleOrDefault(b => b.Id == id);
            if (customerInDb == null)
            {
                return NotFound();
            }
            else
            {
                _context.Customers.Remove(customerInDb);
                _context.SaveChanges();
                return Ok();
            }
        }

    }
}
