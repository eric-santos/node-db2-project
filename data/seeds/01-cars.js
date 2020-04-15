exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "fasdfkj",
          make: "honda",
          model: "civic",
          mileage: 15000,
        },
      ]);
    });
};
