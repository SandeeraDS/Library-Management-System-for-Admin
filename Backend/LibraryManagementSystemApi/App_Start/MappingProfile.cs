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
            //domain to dto
            Mapper.CreateMap<Customer, CustomerDto>();
            Mapper.CreateMap<Book, BookDto>();

            //dto to domain
            Mapper.CreateMap<BookDto, Book>().ForMember(b => b.Id, opt => opt.Ignore()); ;
            Mapper.CreateMap<CustomerDto, Customer>().ForMember(c => c.Id, opt => opt.Ignore()); ;
        }

       
    }
}