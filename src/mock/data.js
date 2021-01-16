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
    title: 'Text mining using NLP in Python ( Technology - Python, Machine Learning, NLTK, Tableau )',
    info: 'I\'m a big fan of Open Source libraries and here using NLTK to performing following data analysis:',
    info2: '1. Identified protagonist from a book series and implemented cosine similarity to analyze the difference between two different books’ summary of the same author',
    info3: '2. Created a model which analyzed around 12,000 book summaries with different genres. After making the model train on the provided dataset, it predicts the genre of a new book input to the model',
    url: '',
    repo: 'https://github.com/PARTHSONI95/Text-Mining-Using-NLP-In-Python', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rankingOutput.jpg',
    title: 'Cricket Ranking Scheme ( Technology - Java 8, JUnit, Tableau )',
    info: 'Implemented a ranking system where evaluated an expression P(xi,xj) i.e. the probability that xi would beat xj using binomial distribution and welch t-test probability density functions',
    info2: 'Programmed an output score which will help to predict which cricket team has a high chance of winning the future cup',
    url: '',
    repo: 'https://github.com/PARTHSONI95/RankingSystemAlgorithm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'terra.jpg',
    img2: 'CodeDeploy.png',
    title: 'AWS Web Project ( Technology - Nodejs, AWS, Terraform, Packer, Github, Ubuntu(Linux) )',
    info: 'Developed RESTful web application in Node.js hosted on AWS platform using IaaS, PaaS and SaaS services such as EC2, VPC, ELB, Route53, RDS, S3, DynamoDB, ASG, IAM, SNS, SES, SQS, Cloudwatch automated with the help of Terraform and Packer',
    info2: 'Implemented Continuous Integration - Continuous Delivery (CI/CD) using Github Actions & Amazon CodeDeploy',
    info3: 'Added event-driven notifications using SNS, SES, AWS Lambda (main component), and DynamoDB',
    info4: 'Secured the application endpoints by importing SSL certificate in AWS Certificate Manager',
    info5: 'Configured load distribution on EC2 using AWS ELB along with autoscaling policies triggered by high/low alerts in Cloudwatch',
    url: '',
    repo: 'https://github.com/SoniParth-Fall2020/webapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bigData1.JPG',
    img2: 'bigData4.JPG',
    title: 'New York Taxi Big Data Project ( Technology - Java, Hadoop, Hive, Pig, Mahout, MongoDB, Python, Tableau, Sqoop, Oozie )',
    info: 'Developed Map-reduce jobs in Java for data preprocessing and analytics (for instance:- using Mahout library to find Pearson correlation between tip paid and the number of passengers) including combiners as well as custom partitioners to optimize the complex jobs so that CPU time gets well distributed amongst all. Also imported and exported the data into HDFS using Sqoop',
    info2: 'Used Pig scripts for bloom filtering, transformations (for well-structured format), map side joins plus a few pre-aggregations',
    info3: 'Analyzed data using Hive queries in an optimized way by making use of the bucketing principle',
    info4: 'Organized Hadoop jobs using Oozie Workflow Scheduler and appealing output was presented with the masterpiece Tableau!',
    url: '',
    repo: '', // if no repo, the button will not show up
  }
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};  
