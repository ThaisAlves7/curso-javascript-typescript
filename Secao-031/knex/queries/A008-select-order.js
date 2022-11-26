const knex = require("../config/database");

const select = knex("users")
  .select("id", "first_name")
  .where("first_name", 'like', '___')
  .orWhere('first_name', 'like', '%na')
  .orderBy('id', 'asc')

console.log(select.toString());

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
