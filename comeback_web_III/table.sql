CREATE TABLE take_notes (
	id serial PRIMARY KEY,
	sujet VARCHAR(1000) NOT NULL,
	descr VARCHAR(1000) NOT NULL,
    notes VARCHAR(2000) NOT NULL
);