exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.text("VIN").unique().notNullable();
    tbl.text("make").notNullable();
    tbl.text("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.boolean("clean");
    tbl.boolean("salvage");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
