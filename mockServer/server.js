const jsonServer = require('json-server');
const chalk = require('chalk');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);
server.listen(4000, () => {
   console.log(
      'JSON Server is running on ' +
         chalk.blue.underline.bold('http://localhost:4000')
   );
});
