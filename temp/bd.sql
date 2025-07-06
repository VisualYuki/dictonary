create table words(
	id  primary key auto_increment,
	word varchar(255) NOT NULL
);

CREATE TABLE translation(
	word_id INT NOT NULL,
	translation VARCHAR(255) NOT NULL,
	foreign key (word_id) references words (id)
);

