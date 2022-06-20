import Project1 from './proj1.PNG'
import Project2 from './proj2.PNG'
import port from './port.jpg'
import Project3 from './netflix.gif'
import Project4 from './task.jpg'
import Project5 from './brba.jpg'
import Project6 from './shopp.jpg'
import olx from './olx.jpg'
import todo from './todo.jpg'
import book from './book.jpg'
import straw from './proj1.gif'
import jstech from "./jstec1.png"
import css from "./cssT.png"
import html from "./htmlT.png"
import react from "./react.png"
import sudoku from "./sudokku.gif"
import bookmyshaw from "./bookmyshaw.gif"
import tailwind from './Tailwind_CSS_Logo.svg.png'
import TYPE from "./type.gif"
import mongo from "./mongo.png"
import express from "./node.png"
import brba from "./brba.gif"
import yoox from "./yoox.gif"
import redux from "./redux.png"
import miniFB from "./miniFb.gif"
import mUI from "./MUI.png"

export const projectsData = [
  {
    projectName: "Netflix Clone",
    projectDescription: "This Netflix clone App build using React with TMDB API. Super cool!",
    imageUrl: Project3,
    projectUrl: "https://react-netflix-clone--55.herokuapp.com/",
    gitHubUrl: "https://github.com/prathyu116/React-Netflix-Clone",
    features: [
      "The data is coming from TMDB API",
      "user can view trending,comedy,action,romantic,movies and netflix originals",
      "user can able to play trailer of the movie",
      "A solo project completed with in 2 days.",
      "responsive ui",
    ],
    techSTack: [html, css, react],
  },
  {
    projectName: "Mini Social Media App",
    projectDescription: "This mini social media app build with MERN stack",
    imageUrl: miniFB,
    projectUrl: "",
    gitHubUrl: "https://github.com/prathyu116/minifb",
    features: [
      "user can view all the posts",
      "user can edit and delete their own posts",
      "like and dislike feature",
      "A solo project completed with in 15 days.",
      "responsive ui",
      `DEMO⭐ https://user-images.githubusercontent.com/67427506/174500602-70d03e02-3333-4a4d-bfd0-c35a240b17ca.mp4`,
    ],
    techSTack: [mongo, express, react, redux, mUI],
  },
  {
    projectName: "Sudoku Game",
    projectDescription: "An Sudokku Game application built with HTML CSS JS by aplying recursion+backtracking method",
    imageUrl: sudoku,
    projectUrl: "https://idyllic-sunshine-c7a72f.netlify.app/",
    gitHubUrl: "https://github.com/prathyu116/sudokkuSolver",
    features: [
      "Allows users to solve a puzzle",
      "user can login",
      "game resume and pause option",
      "error detecting while playing",
      "responsive ui",
    ],
    techSTack: [html, css, jstech],
  },

  {
    projectName: "YOOX  Clone",
    projectDescription: "Cloned of YOOX Ecommerce web application that sell Desiner Clothing Products",
    imageUrl: yoox,
    projectUrl: "https://yoox-clone-react-six.vercel.app",
    gitHubUrl: "https://github.com/Ritesh6997/YOOX_Clone_React",
    features: [
      "Front-end builded with react & Back-end builded using Nodejs+Express ,Mongodb",
      "state is managed using Redux library",
      "A group project completed with in 6 days.",
      "responsive ui",
    ],
    techSTack: [html, react, redux, mongo, express],
  },

  {
    projectName: "Flashtype-app",
    projectDescription: "This typing speed test application test your typing speed                    ",
    imageUrl: TYPE,

    projectUrl: "https://prathyu116.github.io/react-Flash-Type/",
    gitHubUrl: "https://github.com/prathyu116/react-Flash-Type",
    features: [
      "This project build using Reactjs and Tailwind CSS",
      "There is Home page,movie page,category page",
      "Razorpay integration",
      "responsive layout",
      "A solo project completed with in 5 days.",
    ],
    techSTack: [html, css, react],
  },
  {
    projectName: "Bookmyshaw Clone",
    projectDescription: "This is an simple clone of bookmyshaw website build using REACT JS and TAILWIND CSS , with Razorpay integration",
    imageUrl: bookmyshaw,

    projectUrl: "",
    gitHubUrl: "https://github.com/prathyu116/book-my-show-frontEnd",
    features: [
      "This project build using Reactjs and Tailwind CSS",
      "This is a react multipage application.",
      "There is Home page,movie page,category page",
      "Razorpay integration",
      "responsive layout",
      "A solo project completed with in 5 days.",
    ],
    techSTack: [html, css, tailwind, react],
  },

  {
    projectName: "Created clone of strawberrynet.com website ",
    projectDescription: "Which is a cosemetic item selling website build using HTML CSS JS NODEJS EXPRESS",
    imageUrl: straw,

    projectUrl: "",
    gitHubUrl: "https://github.com/prathyu116/StrawberrynetClone",
    features: [
      "Strawberrynet is a cosemetic item selling website build using HTML CSS JS NODEJS EXPRESS",
      "There are two type of users, user and admin",
      "admin can able to add product",
      "Authantication is done using JWT tokens",
      "A Group project completed with in 7 days.",
    ],
    techSTack: [html, jstech, express, mongo],
  },

  {
    projectName: "Breaking-Bad-Cast",
    projectDescription: "This is simple REACT project to showing the breaking bad TV show characters ",
    imageUrl: brba,
    projectUrl: "https://breaking--bad--characters.herokuapp.com/",
    gitHubUrl: "https://github.com/prathyu116/Breaking_Bad_cast",
    features: [
      "This is simple REACT project to showing the breaking bad TV show characters",
      "The data is getting from https://www.breakingbadapi.com/ named website",
      "user can able to search a perticular character by name",
      "responsive layout",

      "A solo project completed with in 5 days.",
    ],
    techSTack: [html, css, react],
  },
  // {
  //     projectName: 'OLX-clone',
  //     projectDescription:
  //        'This olx clone App build using React.This is a react multipage application.(hope published soon)',
  //     imageUrl: olx,

  //     projectUrl: 'https://github.com/prathyu116/React_Olx_Clone',
  //     gitHubUrl: 'https://github.com/prathyu116/React_Olx_Clone',
  // },
  // {
  //     projectName: 'Task Tracker',
  //     projectDescription:
  //         'This react application used to add the task for a day(just like todoApp )',
  //     imageUrl: Project4,

  //     projectUrl: 'https://prathyu116.github.io/react-task-tracker/',
  //     gitHubUrl: 'https://github.com/prathyu116/react-task-tracker',
  // },
  // {
  //     projectName: 'E-commerce application',
  //     projectDescription:
  //         'This is a Ecommerce application using Nodejs+Express and Database MongoBD (hope published soon)',
  //     imageUrl: Project6,

  //     projectUrl: 'https://github.com/prathyu116/Shopping-Cart/tree/main',
  //     gitHubUrl: 'https://github.com/prathyu116/Shopping-Cart/tree/main',
  // },
  // {
  //     projectName: 'Todo-App',
  //     projectDescription:
  //         'This is an simple todo app with basic CRUD opertations.',
  //     imageUrl: todo,

  //     projectUrl: 'https://react-todo--app--44.herokuapp.com/',
  //     gitHubUrl: 'https://github.com/prathyu116/React-Todo--App',
  // },

  // {
  //     projectName: 'Portfolio Website',
  //     projectDescription:
  //         'This my personal portfolio projects made up with React js',
  //     imageUrl: port,

  //     projectUrl: 'https://prathyuprasad-portfolio-55.herokuapp.com/#/',
  //     gitHubUrl: 'https://github.com/prathyu116/Prathyu-Prasad-Portfolio',
  // },
  // {
  //     projectName: 'zomata backend-clone',
  //     projectDescription:
  //         'Designing and building APIs for the master project ie. Zomato Clone with node, express & mongoDB',
  //     imageUrl: zomoto,

  //     projectUrl: 'https://github.com/prathyu116/zomoto-master-project',
  //     gitHubUrl: 'https://github.com/prathyu116/zomoto-master-project',
  // },
];
