const componentExists = require('../utils/componentExists');

module.exports = plop => {
   plop.setGenerator('entity', {
      description: 'Add an Entity with CRUD displays',
      prompts: [
         {
            type: 'input',
            name: 'name',
            message: 'What should it be called?',
            validate: value => {
               if (/.+/.test(value)) {
                  return componentExists(value)
                     ? 'A component or container with this name already exists'
                     : true;
               }

               return 'The name is required';
            }
         }
      ],
      actions: data => {
         const actions = [
            {
               type: 'add',
               path: './src/containers/{{properCase name}}/index.jsx',
               templateFile: './generators/templates/entity/index.hbs',
               abortOnFail: true
            },
            {
               type: 'add',
               path:
                  './src/containers/{{properCase name}}/{{properCase name}}List.jsx',
               templateFile: './generators/templates/entity/list.hbs',
               abortOnFail: true
            },
            {
               type: 'add',
               path:
                  './src/containers/{{properCase name}}/{{properCase name}}Create.jsx',
               templateFile: './generators/templates/entity/create.hbs',
               abortOnFail: true
            },
            {
               type: 'add',
               path:
                  './src/containers/{{properCase name}}/{{properCase name}}Edit.jsx',
               templateFile: './generators/templates/entity/edit.hbs',
               abortOnFail: true
            },
            {
               type: 'add',
               path:
                  './src/containers/{{properCase name}}/{{properCase name}}Show.jsx',
               templateFile: './generators/templates/entity/show.hbs',
               abortOnFail: true
            },
            {
               type: 'add',
               path:
                  './src/containers/{{properCase name}}/{{properCase name}}Title.jsx',
               templateFile: './generators/templates/entity/title.hbs',
               abortOnFail: true
            }
         ];

         actions.push({
            type: 'prettify',
            path: 'src/containers/'
         });

         return actions;
      }
   });
};
