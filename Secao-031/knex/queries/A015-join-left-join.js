const knex = require("../config/database");

const select = knex("users as u")
  .select("u.id as uid", "p.id as pid", "p.bio", "u.first_name")
  .leftJoin("profiles as p", "u.id", "p.user_id")
  .where("u.first_name", "like", "%a")
  .orderBy("u.first_name", "desc");

console.log(select.toString());

select
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })

  .finally(() => {
    knex.destroy();
  });
