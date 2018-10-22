const componentExists = require('../utils/componentExists');

module.exports = plop => {
   plop.setGenerator('component', {
      description: 'Add an unconnected component',
      prompts: [
         {
            type: 'list',
            name: 'type',
            message: 'Select the type of component',
            default: 'Stateless Function',
            choices: () => [
               'Stateless Function',
               'React.PureComponent',
               'React.Component'
            ]
         },
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
         },
         {
            type: 'confirm',
            name: 'wantMessages',
            default: true,
            message:
               'Do you want i18n messages (i.e. will this component use text)?'
         }
      ],
      actions: data => {
         // Generate index.js and index.test.js
         let componentTemplate;

         switch (data.type) {
            case 'Stateless Function': {
               componentTemplate =
                  './generators/templates/component/stateless.hbs';
               break;
            }
            default: {
               componentTemplate = './generators/templates/component/class.hbs';
            }
         }

         const actions = [
            {
               type: 'add',
               path: './src/components/{{properCase name}}/index.jsx',
               templateFile: componentTemplate,
               abortOnFail: true
            },
            {
               type: 'add',
               path: './src/components/{{properCase name}}/tests/index.test.js',
               templateFile: './generators/templates/component/test.hbs',
               abortOnFail: true
            }
         ];

         actions.push({
            type: 'prettify',
            path: '/components/'
         });

         return actions;
      }
   });
};
