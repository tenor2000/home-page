import './style.css';
import PageLayout from './layout.js';
import { AboutMeContent, PortfolioContent, ContactContent, AsideContent } from './content.js';

// Information Content
const bioText = 'I am an awesome coder';
const myGithubProfile = 'https://github.com/tenor2000';
const myLinkedinProfile = 'https://www.linkedin.com/in/gregory-jung/';
const myEmail = 'gregorypjung@gmail.com';
const myPhone = '856-889-6104';
const myAddress = '193 North Avenue <br> Fanwood, NJ 07023';
const messageText = 'Feel free to contact me if you think my work can be mutually beneficial!';
const headshot = require('../images/headshot.jpeg');
const workphoto = require('../images/workphoto.jpg');



// End Information Content

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const webpage = PageLayout(container)

// About Me section
const firstDiv = webpage.createDiv({className: 'about-me'});
const aboutMe = AboutMeContent(firstDiv);

aboutMe.addPhoto(headshot, 'Gregory Jung')
aboutMe.addInfo(bioText)
aboutMe.addSocials('github', myGithubProfile);
aboutMe.addSocials('linkedin', myLinkedinProfile);

// Portfolio section
const secondDiv = webpage.createDiv({className: 'portfolio'});
const myPortfolio = PortfolioContent(secondDiv);
myPortfolio.displayProjects();



// WIP Project cards go here
// Read data fron JSON
// // Connect to json

// }

// Contact section
const thirdDiv = webpage.createDiv({className: 'contact'});
const myContact = ContactContent(thirdDiv);
myContact.addMessage(messageText);
myContact.addAddress(myAddress);
myContact.addEmail(myEmail);
myContact.addPhone(myPhone);
myContact.addSocials('github', myGithubProfile);
myContact.addSocials('linkedin', myLinkedinProfile);
myContact.addPhoto(workphoto);