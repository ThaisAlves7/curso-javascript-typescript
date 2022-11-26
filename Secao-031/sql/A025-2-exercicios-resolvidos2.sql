-- 1) Insira 5 usuários

INSERT INTO users (first_name, last_name, email, password_hash, salary) 
VALUES 	
	('Hope', 'Mikaelson', 'hope.mikaelson@js.com', 'hope123', round(rand() * 10000, 2)),
	('Freya', 'Mikaelson', 'freya.mikaelson@js.com', 'freya123', round(rand() * 10000, 2)),
	('Niklaus', 'Mikaelson', 'niklaus.mikaelson@js.com','klaus123', round(rand() * 10000, 2)),
	('Rebeka', 'Mikaelson', 'rebeka.mikaelson@js.com', 'beka123', round(rand() * 10000, 2)),
	('Hayley', 'Mikaelson', 'hayley.mikaelson@js.com','hayley123', round(rand() * 10000, 2)),
	('Kol', 'Mikaelson', 'kol.mikaelson@js.com', 'kol123', round(rand() * 10000, 2));

-- 2) Insira 5 perfís para os usuários inseridos
-- Verificar id dos ultimos inseridos
SELECT * FROM users order by id DESC;

-- Inserindo apartir do ID
INSERT INTO profiles (bio, description, user_id) SELECT concat('Personagem ', first_name), 
concat('Descrição ', ' ', first_name), id FROM users WHERE id BETWEEN 111 AND 116;

-- Consultando as inserções
SELECT * FROM profiles ORDER BY id DESC;

-- 3) Insira permissões (roles) para os usuários inseridos
-- Consultando antes da inserção das permissões
SELECT id, (SELECT id FROM roles ORDER BY rand() LIMIT 1) AS qualquer FROM users 
WHERE id BETWEEN 111 AND 116;

-- Inserindo após confirmar a consulta
INSERT INTO users_roles (user_id, role_id) select id, 
(select id from roles ORDER BY rand() LIMIT 1) AS qualquer FROM users
WHERE id BETWEEN 111 AND 116;

-- 4) Selecione os últimos 5 usuários por ordem decrescente
SELECT * FROM users ORDER BY id DESC LIMIT 6;

-- 5) Atualize o último usuário inserido
UPDATE users SET first_name = 'Kol - Atualizado' WHERE id = 116;
SELECT * FROM users ORDER BY id DESC LIMIT 6;

-- 6) Remova uma permissão de algum usuário
-- 82/ 3 - 4
DELETE FROM users_roles WHERE user_id = 82 AND role_id = 4;

-- 7) Remova um usuário que tem a permissão "PUT"
SELECT * FROM users_roles AS ur INNER JOIN roles r ON ur.role_id = r.id WHERE ur.role_id = 4;

DELETE FROM users_roles WHERE user_id = 17 AND role_id = 4;

-- 8) Selecione usuários com perfís e permissões (obrigatório)
SELECT u.id AS uid, u.first_name, r.name, p.bio 
FROM users u
INNER JOIN users_roles ur ON u.id = ur.user_id 
INNER JOIN roles r ON ur.role_id = r.id
INNER JOIN profiles p ON p.user_id = u.id;

-- 9) Selecione usuários com perfís e permissões (opcional)
SELECT u.id AS uid, u.first_name, r.name, p.bio 
FROM users u
INNER JOIN users_roles ur ON u.id = ur.user_id 
INNER JOIN roles r ON ur.role_id = r.id
INNER JOIN profiles p ON p.user_id = u.id;

-- 10) Selecione usuários com perfís e permissões ordenando por salário
SELECT u.id AS uid, u.first_name, r.name, p.bio, u.salary 
FROM users u
LEFT JOIN users_roles ur ON u.id = ur.user_id 
LEFT JOIN roles r ON ur.role_id = r.id
LEFT JOIN profiles p ON p.user_id = u.id
ORDER BY u.salary ASC;
