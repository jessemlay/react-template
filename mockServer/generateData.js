const faker = require('faker');

function generateData() {
   const data = {
      example: []
   };

   // Create 1000 users
   for (let i = 0; i < 1000; i++) {
      data.example.push({
         id: i,
         name: faker.name.findName(),
         username: faker.internet.userName(),
         email: faker.internet.email()
      });
   }

   return data;
}
module.exports = generateData;
