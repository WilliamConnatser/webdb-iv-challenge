exports.up = function (knex, Promise) {
    return knex.schema.createTable('dishes', tbl => {
            tbl.increments();
            tbl.string('name', 128)
                .notNullable()
                .unique();
        })
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128)
                .notNullable()
                .unique();
            tbl.string('directions', 256)
            tbl.integer('dish_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('dishes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        .createTable('dish_recipes', tbl => {
            tbl.increments();
            tbl.integer('dish_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('dishes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 128)
                .notNullable()
                .unique();
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.float('quantity')
                .notNullable()
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('dish_recipes')
        .dropTableIfExists('recipes')
        .dropTableIfExists('dishes')
};