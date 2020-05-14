const bcrypt = require('bcrypt');
const saltRounds = 12;

exports.seed = async function(knex) {
  const hashedPassword = await bcrypt.hash('upsmarting', saltRounds);
  return knex('roles').select().then(roles =>{
      return knex('users').insert([
        {username: 'admin', password: hashedPassword, role_id:roles.find(role => role.role ==='ADMIN').id },
      ]);
  });
    
};
