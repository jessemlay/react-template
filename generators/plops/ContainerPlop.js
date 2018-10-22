const componentExists = require('../utils/componentExists');

module.exports = plop => {
   plop.setGenerator('container', {
      description: 'Add a container component',
      prompts: [
         {
            type: 'list',
            name: 'type',
            message: 'Select the base component type:',
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
         var componentTemplate; // eslint-disable-line no-var

         switch (data.type) {
            case 'Stateless Function': {
               componentTemplate =
                  'generators/templates/container/stateless.js.hbs';
               break;
            }
            default: {
               componentTemplate =
                  'generators/templates/container/class.js.hbs';
            }
         }

         const actions = [
            {
               type: 'add',
               path: 'src/containers/{{properCase name}}/index.jsx',
               templateFile: componentTemplate,
               abortOnFail: true
            },
            {
               type: 'add',
               path: 'src/containers/{{properCase name}}/tests/index.test.js',
               templateFile: 'generators/templates/container/test.js.hbs',
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
