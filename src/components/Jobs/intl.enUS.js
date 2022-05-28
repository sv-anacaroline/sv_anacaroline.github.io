import { LTDA } from '../../constants/ltda';

const jobs_enUS = {
  title: 'Work experience',
  [LTDA.PEDE_PRONTO]: {
    company: 'PEDE PRONTO',
    employ: 'Software Engineer Senior',
    date: 'Starting June 2020 until May 2022',
    description:
      'Analysis, Architecture and Development of the PedePronto application. I worked on the development and maintenance of the solution and participated of migration from monolitic architecture to micro-services, development of web client B2C (Business to Business) with React, Typescript and GraphQL. Full stack developer of OnBoarding service B2B (Business to Business) for new clients like in React, Typescript, RestFull and Python backend service.',
  },
  [LTDA.VNATOR]: {
    company: 'VNATOR',
    employ: 'Software Archtect',
    date: 'Started November 2018 to today',
    description:
      'Analysis, architecture and implementation of an ecommerce platform for dingles, using the AWS cloud, with lambda service in NodeJS, exposing a Graphql API using Apollo Server, Aurora RDS PostgreSQL, CloudFormation for management and control, Cognito, AWS S3 for dynamic storage of platform contents, SPA React development, AWS EventBridge for event flow management, development of lambda layers for dependencies and ORM (Object Relation Model).',
  },
  [LTDA.CINQ]: {
    company: 'CINQ',
    employ: 'Senior Software Engineer',
    date: 'First Semester of 2020',
    description:
      'Frontend Developer and Tech leader to Ticket Shop Product in Endered.',
  },
  [LTDA.IESDE]: {
    company: 'IESDE',
    employ: 'Senior Software Engineer',
    date: 'Start at September of 2019, finish in June of 2020',
    description:
      'Architect in monolith migration project for multi-tenancy based microservices. With services in step functions with AWS lambda, streaming management with Kineses and uthentication/Authorization control with AWS cognito and identity provider. React client with Typescript and state control in Redux and NodeJs backend.',
  },
  [LTDA.AGROTIS]: {
    company: 'Agrotis',
    employ: 'Software Architectt',
    date: 'Between Septermber of 2016 at Juny of 2019',
    description:
      'Development of tools and automation process, with analysis, architecture and development of framework application to microservices and multi-tenancy plataform, I worked with several languages such as Erlang, Python, NodeJs, Java, even shellScript when there was a need to manage server routines or integration tools.',
  },
  [LTDA.POLVO]: {
    company: 'Polvo Digital',
    employ: 'Frontend Lead Developer',
    date: 'Start in 2015 and finihs in Juny of 2016',
    description:
      'Frontend lead developer, responsible to development and maintain frontend applications and Design system implementation.',
  },
  [LTDA.FREELANCER]: {
    company: 'Freelancer Developer',
    employ: 'Web Developer',
    date: 'Since 2011',
    description:
      'Frontend develoment with React, Javascript Node and Jquery. Backend development with Java (spring), Haskell and NodeJS.',
  },
};

export { jobs_enUS };
