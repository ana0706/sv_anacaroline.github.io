import { SKILLS } from './skills';
import { STACK } from './stack';
import { ME } from './me';
import { LTDA } from './ltda';

const { FRONTEND, BACKEND, OTHER_SKILLS } = SKILLS;

const LINKS = Object.freeze({
  [LTDA.SELF]: Object.freeze({
    [LTDA.VNATOR]: 'https://www.vnator.com',
    
  }),
  [ME.SELF]: Object.freeze({
    [ME.EMAIL]: 'mailto:sv_anacaroline@live.com',
    [ME.GIT_HUB]: 'https://github.com/ana0706',
    [ME.INSTAGRAM]: 'https://www.instagram.com/ana.caroline.v/',
    [ME.LINKEDIN]:
      'https://www.linkedin.com/in/svanacaroline/',
  }),
  [OTHER_SKILLS]: Object.freeze({
    [STACK[OTHER_SKILLS].DOCKER]: 'https://www.docker.com/',
    [STACK[OTHER_SKILLS].GIT]: 'https://git-scm.com/',
    [STACK[OTHER_SKILLS].CIRCLE_CI]: 'https://circleci.com/',
    [STACK[OTHER_SKILLS].VS_CODE]: 'https://code.visualstudio.com/',
    [STACK[OTHER_SKILLS].EMACS]: 'https://www.gnu.org/software/emacs/',
    [STACK[OTHER_SKILLS].TDD]:
      'https://en.wikipedia.org/wiki/Test-driven_development',
  }),
  [BACKEND]: Object.freeze({
    
    [STACK[BACKEND].JAVA]: 'https://www.java.com/',
    [STACK[BACKEND].POSTGRES]: 'https://www.postgresql.org/',
    [STACK[BACKEND].MONGO_DB]: 'https://www.mongodb.com/',
    [STACK[BACKEND].GRAPHQL]: 'https://graphql.org/',
    [STACK[BACKEND].MVC]: 'https://wikipedia.org/wiki/MVC',
    [STACK[BACKEND].OOP]:
      'https://en.wikipedia.org/wiki/Object-oriented_programming',
    [STACK[BACKEND].FUNCTIONAL_PROGRAMING]:
      'https://en.wikipedia.org/wiki/Functional_programming',
    [STACK[BACKEND].ELIXIR]: 'https://elixir-lang.org/',
    [STACK[BACKEND].ABSINTHE]: 'https://absinthe-graphql.org/',
    [STACK[BACKEND].ECTO]: 'https://hexdocs.pm/ecto/Ecto.html',
    [STACK[BACKEND].PHOENIX]: 'https://www.phoenixframework.org/',
  }),
  [FRONTEND]: Object.freeze({
    [STACK[FRONTEND].ES2015]:
      'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
    [STACK[FRONTEND].HTML]: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    [STACK[FRONTEND].TYPE_SCRIPT]: 'https://www.typescriptlang.org/',
    [STACK[FRONTEND].REACT]: 'https://pt-br.reactjs.org/',
    [STACK[FRONTEND].JEST]: 'https://jestjs.io/',
    [STACK[FRONTEND].NPM]: 'https://www.npmjs.com/',
    [STACK[FRONTEND].YARN]: 'https://yarnpkg.com',
    [STACK[FRONTEND].MATERIAL_DESIGN]: 'https://mui.com',
    [STACK[FRONTEND].TESTING_LIBRARY]: 'https://testing-library.com/',
  }),
});

export { LINKS };
