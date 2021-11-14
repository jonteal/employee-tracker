USE company_db;

INSERT INTO department (name)
VALUE ("English"), -- 1
        ("Anthropology"), -- 2
        ("Art"), -- 3
        ("Music"), --  4
        ("Computer Science"); -- 5

INSERT INTO role (title, salary, department_id)
VALUEs ("English PhD", 100000, 1), -- 1
("English TA", 30000, 1), -- 2
("Anthropology PhD", 70000, 2), -- 3
("Anthropology TA", 30000, 2), -- 4
("Art PhD", 60000, 3), -- 5
("Art TA", 30000, 3), -- 6
("Music PhD", 75000, 4), -- 7
("Music TA", 30000, 4), -- 8
("Computer Science PhD", 120000, 5), -- 9
("Computer Science TA", 60000, 5); -- 10

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("Rubeus", "Hagrid", 9, NULL), -- 1
    ("Severus", "Snape", 1, NULL), -- 2
    ("Tom", "Riddle", 3, NULL), -- 3
    ("Harry", "Potter", 5, NULL), -- 4
    ("Hermione", "Granger", 7, NULL), -- 5
    ("Ron", "Weasley", 8, 5), -- 6
    ("Draco", "Malfoy", 10, 1), -- 7
    ("Albus", "Dumbledore", 6, 4),
    ("Dudley", "Dursley", 2, 2),
    ("Sirius", "Black", 4, 3);
