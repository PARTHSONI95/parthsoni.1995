import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Parth Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my tiny-world', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Parth',
  subtitle: 'I\'m a Software Developer.',
  cta: 'Know me more...',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "A Dream chaser who came to Boston in 2019 pursuing 'Masters in Information Systems' from Northeastern University. I feel privilege to step up as 'Software Developer' in Tata Consultancy Services for about three years. Recently, I bagged an awesome internship in Red Hat which helped me to gain expertise in various domains.",
  paragraphTwo: 'Still lot to learn and grow - currently looking for Full-time opportunities where I can use my experience and keep the seed growing inside me.',
  paragraphThree: 'Have a look at my projects in fields covering Mobile, Web, Data science, AWS and Big Data development',
  resume: 'resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'text_mining_python.PNG',
    title: 'Text mining using Natural Language Processing(NLP) in Python',
    info: 'I\'m a big fan of Open Source libraries and here using NLTK to performing following data analysis:',
    info2: '1. Identified protagonist from a book series and implemented cosine similarity to analyze the difference between two different books’ summary of the same author',
    info3: '2. Created a model which analyzed around 12,000 book summaries with different genres. After making the model train on the provided dataset, it predicts the genre of a new book input to the model',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'soni.pa@northeastern.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/parthajaysoni/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/PARTHSONI95',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
