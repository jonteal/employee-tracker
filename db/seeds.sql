USE company_db;

INSERT INTO department (name)
VALUE ("English"), -- 1
        ("Anthropology"), -- 2
        ("Art"), -- 3
        ("Music"), --  4
        ("Computer Science"); -- 5

INSERT INTO role (title, salary, department_id)
VALUEs ("Englishman", 100000, 1), -- 1
("English TA", 30000, 1), -- 2
("Anthropologist", 70000, 2), -- 3
("Anthropology TA", 30000, 2), -- 4
("Artist", 60000, 3), -- 5
("Art TA", 30000, 3), -- 6
("Musician", 75000, 4), -- 7
("Music TA", 30000, 4), -- 8
("Lead Engineer", 120000, 5), -- 9
("Junior Engineer", 60000, 5); -- 10

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("Rob", "Stark", 9, NULL), -- 1
    ("Jon", "Snow", 1, NULL), -- 2
    ("Theon", "Greyjoy", 3, NULL), -- 3
    ("Harry", "Potter", 5, NULL), -- 4
    ("Hermione", "Granger", 7, NULL), -- 5
    ("Ron", "Weasley", 8, 5), -- 6
    ("Draco", "Malfoy", 10, 1), -- 7
    ("Arya", "Stark", 6, 4),
    ("Joffrey", "Lannister", 2, 2),
    ("Jackson", "Barker", 4, 3);
