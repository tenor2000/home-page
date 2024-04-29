import './style.css';
import PageLayout from './layout.js';
import { AboutMeContent, PortfolioContent, ContactContent, AsideContent } from './content.js';

// Information Content
const bioText = 'I am an awesome coder';
const myGithubProfile = 'https://github.com/tenor2000';
const myLinkedinProfile = 'https://www.linkedin.com/in/gregory-jung/';

// End Information Content

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const webpage = PageLayout(container)

//About Me section
const firstDiv = webpage.createDiv('about-me');
const aboutMe = AboutMeContent(firstDiv);
const headshot = ''; // find an image file src
aboutMe.addPhoto(headshot);

aboutMe.addInfo(bioText)

aboutMe.addSocials('github', myGithubProfile);
aboutMe.addSocials('linkedin', myLinkedinProfile);

// Portfolio section
const secondDiv = webpage.createDiv('portfolio');
const myPortfolio = PortfolioContent(secondDiv);
myPortfolio.getData();



// WIP Project cards go here
// Read data fron JSON
// // Connect to json

// }

// Contact section
const thirdDiv = webpage.createDiv('contact');
const myContact = contactContent(thirdDiv);