/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Centreville Tech LLC',
    position: 'Senior Software Engineer',
    url: 'https://centrevilletech.com/about-us/',
    startDate: '2018-08-05',
    summary: `Develop rich front-end interfaces for online applications and websites for large
              clients in industries including medical, insurance, and technology.`,
    highlights: [
      'Intuitive, feedback driven feature implementation in React, Vue/Redux, VueX/Typescript',
      'Built out React/Vue.js SPA to leverage its declarative style, facilitate a modular, component-based design pattern, manage state locally, minimize re-renders, and accelerate front end development process through reusability of components',
      'Implemented Redux to manage a large state, leverage predictable state updates through use of dispatchers and reducers, and avoid unnecessary prop drilling to improve maintainability and scalability of front-end codebase',
      'Implemented React Native by leveraging its “out-of-the-box” compiler to architect a responsive, scalable, and cross-platform mobile application',
      'Built out PWA(Progressive Web App) for B2C portal of Consumer eStore.',
    ],
  },
  {
    name: 'True Prodigy Tech Solution',
    position: 'Senior Software Engineer',
    url: 'https://trueprodigy.com',
    startDate: '2016-01-20',
    endDate: '2018-07-02',
    summary: '',
    highlights: [
      'Quickly learned new skills including React.js/React Native/Typescript and applied them to daily tasks, improving efficiency and productivity.',
      'Made an architecture design by using Redux and Redux-Saga for state management',
      'Delivered user-friendly interfaces (responsive and pixel-perfect pages) to the end users',
      'Developed statically typed routing API for React frontend • Directed conversion of React application to TypeScript',
      'Implemented React Hooks to accelerate front end rebuild by reducing code while maintaining backwards compatibility',
      'Wrote readable and bug free code by using Typescript which improved the project performance.',
      'Used various testing frameworks including JEST, Mocha, Cypress to build more stable project',
    ],
  },
  {
    name: 'One Brick Tech',
    position: 'Full Stack Web Developer',
    url: 'https://www.onebricktech.com',
    startDate: '2012-01-23',
    endDate: '2014-01-31',
    summary: '',
    highlights: [
      'Coded websites using HTML, CSS, JavaScript, jQuery and PHP languages',
      'Used Web services (SOAP and RESTful) for transmission of large blocks of XML and JSON',
      'Used OOP concepts to develop UI components that could be reused across the Web Application',
      'Adhered to SEO best practices while designing sites and public-facing online deliverables',
      'Built and maintained network infrastructure consisting of Windows, Linux and virtual products',
      'Implemented stable React components and stand-alone functions to be added to any future pages',
    ],
  },
  {
    name: 'Rivers Agile',
    position: 'Junior Software Engineer',
    url: 'https://riversagile.com/',
    startDate: '2008-10-23',
    endDate: '2011-09-31',
    summary: 'Develop frontend/backend coding for client websites using HTML5, CSS3, jQuery and PHP. Responsive design/development using media queries. Cross-browser and legacy Internet Explorer support.',
    highlights: [
      'Produced content pages with CSS3 layout and style markup presentations and also used JS methods and properties',
      'Extensive experience using Bootstrap for layout',
      'Built pixel-perfect and responsive pages from the designs',
      'Updated the website from time to time for special Requirements',
      'Wrote the effective JavaScript codes to improve performance',
    ],
  },
];

export default work;
