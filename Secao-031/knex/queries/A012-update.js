const knex = require("../config/database");

const select = knex("users").where("id", "=", 29);
// const updateSql = knex("users").update({
//   first_name: 'Luiz',
//   last_name: 'Miranda'
// }).where('id', '=', 29);

const updateSql = knex("users").where("id", "=", 29);
updateSql.update({ first_name: "Luiz", last_name: "Miranda" });

console.log(select.toString());
console.log(updateSql.toString());

updateSql
  .then((data) => {
    console.log(data);

    select
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  })
  .catch((e) => {
    console.log(e.message);
  })

  .finally(() => {
    knex.destroy();
  });
