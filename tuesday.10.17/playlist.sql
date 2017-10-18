drop database if exists playlist_db;

create database playlist_db;

use playlist_db;

create table personalized_playlist (
    id integer(11) auto_increment not null,
    title varchar(50),
    artist varchar(50),
    genre varchar(50),
    primary key(id)
);

insert into personalized_playlist(title, artist, genre)
values("Spice Girl","Amine","Hip-Hop");

insert into personalized_playlist(title, artist, genre)
values("Neighbors","J Cole","Hip-Hop");

insert into personalized_playlist(title, artist, genre)
values("Wangster","50 Cent","Hip-Hop");

insert into personalized_playlist(title, artist, genre)
values("Real Thing","Torey Lanez","Hip-Hop");

select * from personalized_playlist;
