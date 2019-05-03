
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'old school italian'},
        {dish_id: 2, name: 'american italian'},
        {dish_id: 3, name: 'texan italian'}
      ]);
    });
};
