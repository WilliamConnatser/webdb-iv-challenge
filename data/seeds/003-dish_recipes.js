
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish_recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dish_recipes').insert([
        {dish_id: 1, recipe_id: 1},
        {dish_id: 2, recipe_id: 2},
        {dish_id: 3, recipe_id: 2}
      ]);
    });
};
