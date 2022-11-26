const knex = require("../config/database");

const insert = knex("roles").insert([
  { name: "POST" },
  { name: "PUT" },
  { name: "DELETE" },
]);

console.log(insert.toString());

insert
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e.message);
  })

  .finally(() => {
    knex.destroy();
  });
