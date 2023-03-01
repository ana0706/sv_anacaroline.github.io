import { SKILLS } from './skills';

const STACK = Object.freeze({
  [SKILLS.OTHER_SKILLS]: Object.freeze({
    DOCKER: 'DOCKER',
    GIT: 'GIT',
    CIRCLE_CI: 'CIRCLE_CI',
    VS_CODE: 'VS_CODE',
    UBUNTU: 'UBUNTU',
    TDD: 'TDD',
    SCRUM: 'SCRUM',
    KANBAN: 'KANBAN'
  }),
  [SKILLS.BACKEND]: Object.freeze({
    JAVA: 'JAVA',
    POSTGRES: 'POSTGRES',
    MONGO_DB: 'MONGO_DB',
    GRAPHQL: 'GRAPHQL',
    REST_API: 'REST_API',
    MVC: 'MVC',
    ORM: 'ORM',
    OOP: 'OOP',
    FUNCTIONAL_PROGRAMING: 'FUNCTIONAL_PROGRAMING',
    ELIXIR: 'ELIXIR',
    ABSINTHE: 'ABSINTHE',
    ECTO: 'ECTO',
    PHOENIX: 'PHOENIX',
    
  }),
  [SKILLS.FRONTEND]: Object.freeze({
    ES2015: 'ES2015',
    HTML: 'HTML',
    CSS: 'CSS',
    TYPE_SCRIPT: 'TYPE_SCRIPT',
    REACT: 'REACT',
    JEST: 'JEST',
    TESTING_LIBRARY: 'TESTING_LIBRARY',
    NPM: 'NPM',
    YARN: 'YARN',
    MATERIAL_DESIGN: 'MATERIAL_DESIGN',
  }),
});

export { STACK };
