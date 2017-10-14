DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

USE  favorite_db;

CREATE TABLE favorite_foods (
  food VARCHAR(50) NOT NULL,
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  song VARCHAR(100)  NOT NULL,
  artist VARCHAR(50),
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  movie VARCHAR(50) NOT NULL,
  five_times BOOLEAN DEFAULT false,
  score INTEGER(10),
  PRIMARY KEY (id)
);


