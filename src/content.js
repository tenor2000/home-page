const githubImg = require('../images/github-mark.svg');
const linkedinImg = require('../images/linkedin-svgrepo-com.svg');
const projectDataPath = require('../projectData.json');

export function AboutMeContent(targetDiv) {
    const pictureImg = document.createElement('img');
    pictureImg.classList.add('headshot');

    const textDiv = document.createElement('div');
    const aboutText = document.createElement('p');
    
    textDiv.classList.add('about-text');
    textDiv.innerHTML = '<h3>About Me</h3>';

    const socialsLinks = document.createElement('div');
    socialsLinks.classList.add('links-right');
    
    const githubLink = document.createElement('a');
    githubLink.classList.add('social-button');
    socialsLinks.appendChild(githubLink);

    const linkedinLink = document.createElement('a');
    linkedinLink.classList.add('social-button');
    socialsLinks.appendChild(linkedinLink);

    textDiv.appendChild(aboutText);
    textDiv.appendChild(socialsLinks);
    targetDiv.appendChild(pictureImg);
    targetDiv.appendChild(textDiv);
    
    return {
        addPhoto(imageAddress) {
            pictureImg.src = imageAddress;
        },
        addInfo(text) {
            aboutText.textContent = text;
        },
        addSocials(type, link) {
            if (type==='github') {
                githubLink.tabindex = 0;
                githubLink.href = link;
                githubLink.target = '_blank';
                githubLink.innerHTML = `<img src=${githubImg} alt="GitHub Profile" class="social-icon">`;
            } else if (type==='linkedin') {
                linkedinLink.tabindex = 0;
                linkedinLink.href = link;
                linkedinLink.target = '_blank';
                linkedinLink.innerHTML = `<img src=${linkedinImg} alt="LinkedIn Profile" class="social-icon">`;
            } else {
                console.log('Invalid social type');
            }
        }

    };
}

function ProjectObj(title, language, link, codelink, screenshotLink, description) {
        this.title = title;
        this.language = language;
        this.description = description;
        this.link = link;
        this.screenshotLink = screenshotLink;
        this.codelink = codelink;
        this.info = () => `${title}: ${description}`;
    }

export function PortfolioContent(targetDiv) {
    const portfolioTitle = document.createElement('h2');
    portfolioTitle.innerHTML = 'Portfolio';

    const portfolioDiv = document.createElement('div');
    portfolioDiv.classList.add('portfolio-div');

    targetDiv.appendChild(portfolioTitle);
    targetDiv.appendChild(portfolioDiv);

    const myLibrary = [];
    
    return {
        getData() {
            fetch(projectDataPath)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((data) => {
                data.forEach((item) => {
                  const project = new ProjectObj(
                    item.title,
                    item.language,
                    item.link,
                    item.codelink,
                    item.screenshotLink,
                    item.description,
                  );
                  myLibrary.push(project);
                });
                console.log(myLibrary);
                this.displayProjects();
              })
              .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
              });
          },
          displayProjects() {
              myLibrary.forEach((project) => {
                this.addProject(project);
              })
          }
    }
}

export function ContactContent() {
    return {
        addPhoto() {
            const img = document.createElement('img');} 
    };
}

export function AsideContent(navAside) {
    const navHeader = document.createElement('h4');
    navHeader.innerHTML = 'Navigation';
    navAside.appendChild(navHeader);
    return {
        addNavLink(navlink, text) {
            // navLink is a weblink
            const newLink = document.createElement('a');
            newLink.href = navlink;
            newLink.innerHTML = text;
        }
    }
}