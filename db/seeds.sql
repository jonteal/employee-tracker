USE company_db;

INSERT INTO department (name)
VALUE ("Sales"), -- 1
        ("Finance"), -- 2
        ("Engineering"), -- 3
        ("Marketing"), --  4
        ("Web Development"); -- 5

INSERT INTO role (title, salary, department_id)
VALUEs ("Sales Manager", 100000, 1), -- 1
("Sales Representative", 40000, 1), -- 2
("CFO", 120000, 2), -- 3
("Accountant", 70000, 2), -- 4
("Lead Engineer", 110000, 3), -- 5
("Junior Engineer", 70000, 3), -- 6
("Director of Marketing", 80000, 4), -- 7
("Marketing Assistant", 50000, 4), -- 8
("Senior Developer", 120000, 5), -- 9
("Junior Developer", 60000, 5); -- 10

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
