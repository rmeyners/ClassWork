create database programming_db;

use programming_db;

create table programming_languages (
    id integer(11) auto_increment not null, 
    languages varchar(50),
    rating integer(10),
    primary key (id)
);

insert into programming_languages(languages, rating)
values("JavaScript",8);

select * from programming_langauges;
    