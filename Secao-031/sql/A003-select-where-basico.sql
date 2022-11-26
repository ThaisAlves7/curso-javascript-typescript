-- where filtra registros
-- operadores de comparação = < <= > >= <> !=
-- operadores lógicos and e or
select * from users
where 
created_at > '2020-12-15 23:52:59'
and first_name = 'Luiz' 
and password_hash = 'a_hash';

/* 
  Alterado de '<' para '>' por conta da diferença 
  de anos entre o curso e agora 
  [Atualmente 26-11-2022 00:00:00 <literalmente>]
*/