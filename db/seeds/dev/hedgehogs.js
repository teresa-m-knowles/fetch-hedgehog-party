exports.seed = function(knex, Promise) {
  return knex('hedgehogs').del()
    .then(function () {
      return knex('hedgehogs').insert([
        {id: 1, name: 'Sonic', hoglets: '3', allergies: 'none' },
        {id: 2, name: 'Shark', hoglets: '7', allergies: 'rice' },
        {id: 3, name: 'Sunny', hoglets: '0', allergies: 'spicy foods' }
      ])
      .then(() => console.log('DEV seeding complete!'))
      .catch(error => console.error({ error }));
    });
};
