const knex = require("../config/database");

const selectWhereIn = knex("users")
  .select("id", "first_name")
  .whereIn("id", [10, 15, 20, 25]);

console.log(selectWhereIn.toString());

selectWhereIn
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
