module.exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("reviews")
    .del()
    .then(() => knex("movies_theaters").truncate())
    .then(() => knex("critics").truncate())
    .then(() => knex("movies").truncate())
    .then(() => knex("theaters").truncate());
};
