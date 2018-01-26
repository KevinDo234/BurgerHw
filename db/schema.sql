Drop Database if exists burger_db;

Create Database burger_db;

Use burger_db;

Create table burgers(
	id int not null auto_increment,
    burger_name varchar(100) not null,
    devoured bool default false,
    primary key (id)
);
