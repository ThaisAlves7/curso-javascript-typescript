-- Update - Atualiza registros
update users set 
first_name = 'Luiz',
last_name = 'Miranda'
where id between 90 and 93;

select * from users where id between 90 and 93;