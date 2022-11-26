const knex = require("../../knex/config/database");

const selectBetween = knex("users")
  .select("id", "first_name")
  .whereBetween("id", [80, 83]);

console.log(selectBetween.toString());

selectBetween
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
