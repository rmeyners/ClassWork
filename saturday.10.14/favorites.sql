-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food NOT NULL VARCHAR(50),
  -- Make an numeric column called "score" --
  score INTEGER(10),
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song NOT NULL VARCHAR(100),
  -- Make a string column called "artist" --
  artist VARCHAR(50),
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id int NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  movie NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BIT,
  -- Make an integer column called "score" --
  score INTEGER(10)
  -- Set the primary key of the table to id --
  PRIMARY KEY (id)
);

-- this is how it should actually look!!!!!!!!!!!!!!!!!!!!!

-- DROP DATABASE IF EXISTS favorite_db;
-- -- Creates the "favorite_db" database --
-- CREATE DATABASE favorite_db;

-- USE  favorite_db;

-- CREATE TABLE favorite_foods (
--   food VARCHAR(50) NOT NULL,
--   score INTEGER(10)
-- );

-- CREATE TABLE favorite_songs (
--   song VARCHAR(100)  NOT NULL,
--   artist VARCHAR(50),
--   score INTEGER(10)
-- );

-- CREATE TABLE favorite_movies (
--   id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   movie VARCHAR(50) NOT NULL,
--   five_times BOOLEAN DEFAULT false,
--   score INTEGER(10),
--   PRIMARY KEY (id)
-- );
