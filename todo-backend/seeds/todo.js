exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([{
          title: 'Learn Node.js',
          description: 'V8 chrome engine',
          priority: 1,
          created_at: new Date()
        },
        {
          title: 'Learn React',
          description: 'Frontend library',
          priority: 2,
          created_at: new Date()
        },
        {
          title: 'Learn Ionic',
          description: 'App development',
          priority: 3,
          created_at: new Date()
        }
      ]);
    });
};