/*
select * from users
where 
created_at > '2020-12-15 23:52:59'
and first_name = 'Luiz' 
and password_hash = 'a_hash';
*/

const knex = require("../../knex/config/database");
const select = knex("users")
  .select("id", "first_name")
  .where("id", "<", 20)
  .andWhere("first_name", "=", "Freya")
  .orWhere("id", "=", 1);

select
  .then((data) => {
    for (const user of data) {
      console.log(user);
    }
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    knex.destroy();
  });
