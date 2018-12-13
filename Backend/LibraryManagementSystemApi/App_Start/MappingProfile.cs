using AutoMapper;
using LibraryManagementSystemApi.Dtos;
using LibraryManagementSystemApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryManagementSystemApi.App_Start
{
    public class MappingProfile:Profile
    {

        public MappingProfile()
        {
            Mapper.CreateMap<Customer, CustomerDto>();
            Mapper.CreateMap<CustomerDto, Customer>();

            Mapper.CreateMap<Book, BookDto>();
            Mapper.CreateMap<BookDto, Book>();
        }

       
    }
}