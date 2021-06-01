export let projects = 
[
  {
    id: 1,
    name: "Flashcard-o-matic",
    description: "An online learning tool designed to help students study course content with flashcards.",
    github_url: "https://github.com/meleciosilva/flashcard-o-matic",
    live_url: "https://flashcard-o-matic-peach.vercel.app",
    project_image: "images/project-images/flashcards.png",
    technology: [
      '<p>Built with <strong>React</strong> and <strong>Bootstrap</strong> to develop an interactive user interface and experience</p>',
      '<p>Implemented<strong> React Hooks</strong> and <strong>React Router</strong> to manage API calls for data and component routing, respectively</p>',
      '<p><strong>Express</strong> to build server and routes</p>'
    ],
  },
  {
    id: 2,
    name: "We Love Movies",
    description: "A movie theater platform designed to help users navigate movies and showing theaters.",
    github_url: "https://github.com/meleciosilva/we-love-movies",
    live_url: "",
    project_image: "images/project-images/movies.png",
    technology: [
      '<p><strong>Express</strong> to build server and routes</p>',
      '<p>Set up database with <strong>PostgreSQL</strong> to store information</p>',
      '<p>Built <strong>CRUD</strong> functionality with middleware functions for movies, reviews, and theaters</p>',
      '<p>Implemented <strong>Knex</strong> library to build SQL queries</p>'
    ],
  },
  {
    id: 3,
    name: "Event Manager",
    description: "An Express RESTful API built with a series of routes to manage users and access or manipulate data for events.",
    github_url: "https://github.com/meleciosilva/event-management",
    live_url: "",
    project_image: "images/project-images/coding.jpg",
    technology: [
      '<p>Set up database with <strong>MongoDB</strong> to store information</p>',
      '<p>Implemented <strong>Mongoose</strong> library to model and manage application data</p>',
      '<p>Implemented user authentication and authentication with <strong>JSON web token</strong></p>'
    ],
  },
  {
    id: 4,
    name: "VA Breweries",
    description: "A directory of breweries, cideries, and craft beer bottle shops located in Virginia.",
    github_url: "https://github.com/meleciosilva/va-breweries",
    live_url: "https://va-breweries.vercel.app/",
    project_image: "images/project-images/breweries.png",
    technology: [
      '<p>Built with <strong>Bootstrap</strong> to create layout, styling, and responsive design</p>',
      '<p>Implemented <strong>Axios</strong> to send HTTP requests to the Open Brewery Database</p>',
      '<p>Used <strong>DOM manipulation</strong> to customize event listeners and rendering</p>'
    ],
  },
  {
    id: 5,
    name: "Decoder Ring",
    description: "A set of ciphers used to encode and decode messages (Caesar's Shift, Polybius Square, and Substitution).",
    github_url: "https://github.com/meleciosilva/project-decoder-ring",
    live_url: "https://meleciosilva.github.io/project-decoder-ring",
    project_image: "images/project-images/decoder.png",
    technology: [
      '<p>Built using <strong>JavaScript</strong></p>',
      '<p>Implemented unit tests using <strong>Mocha</strong> and <strong>Chai</strong> to ensure functionality and minimize bug development</p>',
      '<p>Created several helper functions to modulate code and improve readability</p>'
    ],
  },
  {
    id: 6,
    name: "Pomodoro",
    description: "An online timer designed to be used in alternating intervals of focus and rest time to enhance productivity.",
    github_url: "https://github.com/meleciosilva/pomodoro-timer",
    live_url: "https://project-pomodoro-timer-qualified-1-eight.vercel.app/",
    project_image: "images/project-images/pomodoro.png",
    technology: [
      '<p>Built with <strong>React</strong> to develop user interface and experience</p>',
      '<p>Implemented <strong>conditional rendering</strong> to display appropriate components according to current session (play, pause, stop, etc.)</p>'
    ],
  },
]