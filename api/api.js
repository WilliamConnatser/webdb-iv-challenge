const db = require('../data/dbConfig');

const getDishes = _ => {
    return db('dishes');
}

const addDish = (dish) => {
    return db('dishes')
        .insert(dish, 'id');
}

const getDish = (id) => {
    return db('dishes')
        .where({id})
        .first();
}

const getRecipes = () => {
    return db('recipes');
}

const addRecipe = (recipe) => {
    return db('recipes')
        .insert(recipe, 'id');
}

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}