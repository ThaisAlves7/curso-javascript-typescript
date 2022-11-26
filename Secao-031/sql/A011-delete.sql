-- Delete apaga registros da tabela
select * FROM users where id = 109;
-- DELETE FROM users where id = 109;

-- Aviso: use SELECT para garantir que está
-- apagando os valores corretos
select * from users where id BETWEEN 100 and 108;
-- DELETE FROM users where id BETWEEN 100 and 108;

