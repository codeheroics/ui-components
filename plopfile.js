const colorTokens = require('./src/design-tokens/colors/colors.json');

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create an icon component',
    prompts: [
      {
        type: 'input',
        name: 'name'
      },
      {
        type: 'input',
        name: 'path'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/atoms/svg/icons/{{pascalCase name}}.tsx',
        templateFile: 'config/generator/icons/IconComponentTemplate.tsx.hbs',
        force: true
      },
      {
        type: 'append',
        path: 'src/atoms/svg/index.ts',
        unique: true,
        pattern: /(\/\*-- EXPORT ICON COMPONENTS --\*\/)/gi,
        template:
          "export { default as {{pascalCase name}} } from './icons/{{pascalCase name}}';"
      }
    ]
  });

  plop.setGenerator('colorStylesheet', {
    description: 'Create color css stylesheet',
    prompts: [
      {
        type: 'input',
        name: 'language'
      }
    ],
    actions: [
      {
        type: 'add',
        data: {
          colorTokens
        },
        path: './src/colors/colors.{{language}}',
        templateFile:
          'config/generator/colors/templates/colors.{{language}}.hbs',
        force: true
      }
    ]
  });
};
