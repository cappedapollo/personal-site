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
    name: 'VironIT',
    position: 'Senior Software Engineer',
    url: 'https://vironit.com/',
    startDate: '2020-08-05',
    summary: `Develop rich front-end interfaces for online applications and websites for large
              clients in industries including medical, insurance, and technology.`,
    highlights: [
      'Spearheaded the development of an innovative web and mobile application designed for a real estate agency with Next.js, increasing property listings by 40%',
      'Implemented features allowing clients to investigate, select, and schedule visits to real estate properties efficiently, improving the scheduling process',
      'Integrated automated email functionalities with Twilio API to keep customers informed and engaged, resulting in a 35% improvement in customer communication and satisfaction',
      'Collaborated closely with cross-functional teams to ensure seamless integration of backend AI services with GPT APIs and front-end design, boosting project delivery speed by 25%',
      'Led the development and deployment of scalable backend systems using Python and Django.',
      'Implemented AI-driven features using GPT APIs, enhancing product capabilities and user experience.',
      'Developed over 50+ RESTful APIs for seamless integration with front-end systems and third-party services.',
      'Optimized database queries and operations, resulting in a 25% reduction in load times and a 20% decrease in server costs.',
      'Collaborated with front-end teams, increasing project delivery speed by 10%.',
      'Automated deployment pipelines using Docker and Jenkins.',
      'Conducted performance tuning and scalability testing, ensuring systems could handle increased loads by 150%.',
      'Implemented robust logging and monitoring systems using ELK stack, which decreased system downtime by 15%.',
    ],
  },
  {
    name: 'Code & Care',
    position: 'Senior Software Engineer',
    url: 'https://trueprodigy.com',
    startDate: '2016-01-20',
    endDate: '2020-08-02',
    summary: '',
    highlights: [
      'Collaborated with cross-functional teams to develop high-performance web applications using ASP.NET Core in an Azure environment.',
      'Led the modernization of an election management portal by migrating from VB.NET to ASP.NET Core, significantly enhancing system performance and usability.',
      'Rebuilt the front-end UI with Vue.js to better meet user needs and enhance performance, followed by a transition to DevExtreme by DevExpress for improved mobile responsiveness and UI stability.',
      'Implemented cutting-edge UI/UX design principles using Blazor, DevExtreme, and other modern frameworks to enhance usability and accessibility.',
      'Utilized technologies such as HTML, CSS, JavaScript, and Blazor to build responsive and scalable web interfaces, reducing page load times by 20%.',
      'Conducted code reviews and provided mentorship to junior and mid-level developers, fostering a collaborative and growth-oriented team environment, resulting in improved code quality.',
      'Ensured the application met stringent security and compliance standards, contributing to the integrity and reliability of the election process.',
      'Implemented serverless functions and updated Hangfire jobs using ASP.NET Core within the Azure environment to streamline SMS and email communications, reducing server response times by 15%.',
      'Managed databases using T-SQL and employed Docker and Kubernetes for scalable microservices architecture.',
      'Established end-to-end testing protocols using Selenium, XUnit, and NUnit to maintain high quality and minimize bugs, reducing bug occurrence by 15%.',
    ],
  },
  {
    name: 'One Brick Tech',
    position: 'Full Stack Web Developer',
    url: 'https://www.onebricktech.com',
    startDate: '2014-01-23',
    endDate: '2016-12-31',
    summary: '',
    highlights: [
      'Coded websites using HTML, CSS, JavaScript, jQuery and PHP languages',
      'Used Web services (SOAP and RESTful) for transmission of large blocks of XML and JSON, enhancing data transmission efficiency',
      'Used OOP concepts to develop UI components that could be reused across the Web Application, reducing development time by 40%',
      'Adhered to SEO best practices while designing sites and public-facing online deliverables, increasing web traffic by 35%',
      'Built and maintained network infrastructure consisting of Windows, Linux, and virtual products',
      'Implemented stable React components and stand-alone functions to be added to any future pages',
    ],
  },
  {
    name: 'Rivers Agile',
    position: 'Junior Software Engineer',
    url: 'https://riversagile.com/',
    startDate: '2012-11-23',
    endDate: '2013-09-31',
    summary: 'Develop frontend/backend coding for client websites using HTML5, CSS3, jQuery and PHP. Responsive design/development using media queries. Cross-browser and legacy Internet Explorer support.',
    highlights: [
      'Develop frontend/backend coding for client websites using HTML5, CSS3, jQuery and PHP, improving page load speed by 30%',
      'Responsive design/development using media queries. Cross-browser and legacy Internet Explorer support',
      'Produced content pages with CSS3 layout and style markup presentations and also used JS methods and properties',
      'Extensive experience using Bootstrap for layout',
      'Built pixel-perfect and responsive pages from the designs',
      'Updated the website from time to time for special Requirements',
      'Wrote the effective JavaScript codes to improve performance, reducing execution time by 10%',
    ],
  },
];

export default work;
