const knex = require("../config/database");

const select = knex("users")
  .select("id", "first_name")
  .orderBy("id", "asc")
  .limit(5)
  .offset(10);

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
