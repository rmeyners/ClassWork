use animals_db;

create table people (
	id integer(11) auto_increment not null,
    name varchar(20) not null, 
    has_pet boolean not null, 
    pet_name varchar(30),
    pet_age integer(11),
    primary key (id)
);

insert into people(name, has_pet, pet_name, pet_age)
values("Robert",true,"Nucky",1);

insert into people(name, has_pet, pet_name, pet_age)
values("Robert",true,"Cesar",7);

-- insert into people(name, has_pet)
-- values("Robert",true)

select * from people;

delete from people where id = 2;
-- delete from people where name = "Robert"
