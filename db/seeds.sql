-- --data department
INSERT INTO department (name)
VALUES
('CONSTRUCTION MANAGEMENT'),
('SIGHT WORK'),
('ACCOUNTING'),
('LOGISTIC'),
('PETS');


-- -- data role
INSERT INTO role (title,salary,department_id)
VALUES
('High skilled labourer', 110000, 2),
('Low skilled labourer', 70000, 2),
('Accountant', 80000, 3),
('Truck driver', 80000, 4),
('Dog', 10, 5),
('Cat', 3, 5),
('Foreman', 130000, 1),
('Junior Foreman', 80000, 1);


-- -- data employee

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
 ('Michael', 'Yun', 1, NULL),
 ('Yeunchung' , 'Ku', 1, 1),
 ('Lucky', 'Chae', 5, 1),
 ('MEOW', 'Jovovich', 6, NULL),
 ('Sam', 'Yallah', 7, 4),
 ('John', 'kwon', 8, 4),
 ('Johnathan','yap', 4, NULL),
 ('Mike',  'Yun', 3, 7);