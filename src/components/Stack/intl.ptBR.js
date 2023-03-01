import { SKILLS } from '../../constants/skills';
import { STACK } from '../../constants/stack';

const { OTHER_SKILLS, FRONTEND, BACKEND } = SKILLS;

const stack_ptBR = {
  title: 'Stack',
  return: 'return [',
  closeArray: ']',
  closeObj: '}',
  [OTHER_SKILLS]: {
    title: 'knowledges( developer ) {',
    [STACK[OTHER_SKILLS].DOCKER]: 'Docker',
    [STACK[OTHER_SKILLS].GIT]: 'git',
    [STACK[OTHER_SKILLS].CIRCLE_CI]: 'Circle CI',
    [STACK[OTHER_SKILLS].VS_CODE]: 'VSCode',
    [STACK[OTHER_SKILLS].VIM]: 'Vim',
    [STACK[OTHER_SKILLS].UBUNTU]: 'Ubunut Linux',
    [STACK[OTHER_SKILLS].TDD]: 'TDD (Testing Driven Development)',
    [STACK[OTHER_SKILLS].SCRUM]: 'Scrum',
    [STACK[OTHER_SKILLS].KANBAN]: 'Kanban',
  
  },
  [BACKEND]: {
    title: 'knowledges( backend ) {',
    [STACK[BACKEND].JAVA]: 'Java',
    [STACK[BACKEND].POSTGRES]: 'PostgreSQL',
    [STACK[BACKEND].MONGO_DB]: 'MongoDB',
    [STACK[BACKEND].GRAPHQL]: 'GraphQL',
    [STACK[BACKEND].REST_API]: 'Rest Api',
    [STACK[BACKEND].OOP]: 'Programacao Orientada a Objetos',
    [STACK[BACKEND].MVC]: 'MVC (Model View Controller)',
    [STACK[BACKEND].ORM]: 'ORM (Object Relational Mapper)',
    [STACK[BACKEND].FUNCTIONAL_PROGRAMING]: 'Functional Programing',
    [STACK[BACKEND].ELIXIR]: 'Elixir',
    [STACK[BACKEND].ABSINTHE]: 'Absinthe',
    [STACK[BACKEND].ECTO]: 'Ecto',
    [STACK[BACKEND].PHOENIX]: 'Phoenix',
  },
  [FRONTEND]: {
    title: 'knowledges( frontend ) {',
    [STACK[FRONTEND].ES2015]: 'ES2015++',
    [STACK[FRONTEND].HTML]: 'html5',
    [STACK[FRONTEND].CSS]: 'css3',
    [STACK[FRONTEND].TYPE_SCRIPT]: 'Typescript',
    [STACK[FRONTEND].REACT]: 'ReactJs',
    [STACK[FRONTEND].JEST]: 'Jest',
    [STACK[FRONTEND].NPM]: 'npm',
    [STACK[FRONTEND].YARN]: 'Yarn',
    [STACK[FRONTEND].MATERIAL_DESIGN]: 'Material Design',
    [STACK[FRONTEND].TESTING_LIBRARY]: 'Testing Library',
  },
};

export { stack_ptBR };
