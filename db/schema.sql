### Schema

CREATE DATABASE study_app_db;
USE study_app_db;

CREATE TABLE flashcards
(
	id int NOT NULL AUTO_INCREMENT,
	question varchar(1000) NOT NULL,
	answer varchar(1200) NOT NULL,
	english BOOLEAN DEFAULT false,
	math BOOLEAN DEFAULT false,
	history BOOLEAN DEFAULT false,
	science BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);