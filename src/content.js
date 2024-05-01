const projectData = require('./projectData.json');

const iconsContext = require.context('../images', true);
const icons = {}
iconsContext.keys().forEach(key => {
    const iconName = key.replace('./', '')
    icons[iconName] = iconsContext(key)
})

const githubIcon = icons['github-mark.svg'];
const linkedinIcon = icons['linkedin-svgrepo-com.svg'];
const openNewTabIcon = icons['open-in-new.svg'];
const phoneIcon = icons['phone.svg'];
const emailIcon = icons['email.svg'];

function isValidEmail(email) {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof email === 'string' && emailRegex.test(email);
}

export function AboutMeContent(targetDiv) {
    if (!(targetDiv instanceof HTMLElement)) {
        throw new Error('Invalid container element provided');
    }
    const portraitDiv = document.createElement('div');
    portraitDiv.classList.add('portrait-div');
    const portraitName = document.createElement('h3');
    const pictureImg = document.createElement('img');
    pictureImg.classList.add('headshot');
    portraitDiv.appendChild(pictureImg);
    portraitDiv.appendChild(portraitName);

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
    targetDiv.appendChild(portraitDiv);
    targetDiv.appendChild(textDiv);
    
    return {
        addPhoto(image, alt) {
            pictureImg.src = image;
            pictureImg.alt = alt;
            portraitName.textContent = alt;
        },
        addInfo(text) {
            aboutText.textContent = text;
        },
        addSocials(type, link) {
            if (type==='github') {
                githubLink.tabindex = 0;
                githubLink.href = link;
                githubLink.target = '_blank';
                githubLink.innerHTML = `<img src=${githubIcon} alt="GitHub Profile" class="social-icon">`;
            } else if (type==='linkedin') {
                linkedinLink.tabindex = 0;
                linkedinLink.href = link;
                linkedinLink.target = '_blank';
                linkedinLink.innerHTML = `<img src=${linkedinIcon} alt="LinkedIn Profile" class="social-icon">`;
            } else {
                console.log('Invalid social type');
            }
        }

    };
}

export function PortfolioContent(targetDiv) {
    if (!(targetDiv instanceof HTMLElement)) {
        throw new Error('Invalid container element provided');
    }
    const portfolioTitle = document.createElement('h2');
    portfolioTitle.innerHTML = 'Portfolio';

    const portfolioDisplay = document.createElement('div');
    portfolioDisplay.classList.add('portfolio-display');

    targetDiv.appendChild(portfolioTitle);
    targetDiv.appendChild(portfolioDisplay);

    const myLibrary = projectData;
    
    return {
        displayProjects: () => {
            for (let i = 0; i < 6; i++) {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                portfolioDisplay.appendChild(projectCard);

                const screenshotDiv = document.createElement('div');
                const screenshot = document.createElement('img');
                screenshot.classList.add('screenshot');
                screenshot.src = myLibrary[i].screenshot;
                screenshot.alt = `Screenshot of ${myLibrary[i].title}`;
                screenshotDiv.appendChild(screenshot);
                projectCard.appendChild(screenshotDiv);

                const projectTitleLine = document.createElement('div');
                const projectTitle = document.createElement('h3');
                projectTitle.innerHTML = myLibrary[i].title;
                projectTitleLine.appendChild(projectTitle);
                projectCard.appendChild(projectTitleLine);

                const linksbox = document.createElement('div');
                linksbox.classList.add('links-right');
                projectTitleLine.appendChild(linksbox);

                const projectDesc = document.createElement('p');
                projectDesc.innerHTML = myLibrary[i].description;
                projectCard.appendChild(projectDesc);

                const projectLink = document.createElement('a');
                projectLink.href = myLibrary[i].codelink;
                projectLink.target = '_blank';
                projectLink.innerHTML = `<img src=${githubIcon} alt="GitHub Code Link" class="social-icon">`;
                linksbox.appendChild(projectLink);

                const projectCodeLink = document.createElement('a');
                projectCodeLink.href = myLibrary[i].link;
                projectCodeLink.target = '_blank';
                projectCodeLink.innerHTML = `<img src=${openNewTabIcon} alt="Project Link" class="social-icon">`;
                linksbox.appendChild(projectCodeLink);
            }
        }
    }
}

export function ContactContent(targetDiv) {
    if (!(targetDiv instanceof HTMLElement)) {
        throw new Error('Invalid container element provided');
    }

    const contactTitle = document.createElement('h2');
    contactTitle.innerHTML = 'Contact Me';
    
    const textDiv = document.createElement('div');
    const messageText = document.createElement('p');
    const addressText = document.createElement('p');
    const phoneText = document.createElement('p');
    const emailText = document.createElement('p');
    const workingImage = document.createElement('img');

    const socialsLinks = document.createElement('div');
    socialsLinks.classList.add('links-left');
    
    const githubLink = document.createElement('a');
    socialsLinks.appendChild(githubLink);

    const linkedinLink = document.createElement('a');
    socialsLinks.appendChild(linkedinLink);

    textDiv.appendChild(contactTitle);
    textDiv.appendChild(messageText);
    textDiv.appendChild(addressText);
    textDiv.appendChild(phoneText);
    textDiv.appendChild(emailText);
    textDiv.appendChild(socialsLinks);
    targetDiv.appendChild(textDiv);
    targetDiv.appendChild(workingImage);

    return {
        addPhoto(image) {
            workingImage.src = image;
            workingImage.alt = 'Working Image';
            workingImage.classList.add('working-image');
        },
        addMessage(text) {
            if (typeof text !== 'string') {
                throw new Error('Message must be a string');
            }
            messageText.innerHTML = text;
        },
        addAddress(address) {
            if (typeof address !== 'string') {
                throw new Error('Address must be a string');
            }
            addressText.innerHTML = address;
        },
        addEmail(email) {
            if (!isValidEmail(email)) {
                throw new Error('Email must be a valid email address');
            }

            emailText.innerHTML = `<img src="${emailIcon}" alt="Email Icon" class="social-icon">
                <a href="mailto:${email}">${email}
                </a>`;
        },
        addPhone(phone) {
            if (!phone) {
                throw new Error('Phone must be a valid phone number');
            }
            phoneText.innerHTML = `<img src="${phoneIcon}" alt="Phone Icon" class="social-icon">
                <a href="tel:${phone}">${phone}
                </a>`;
        },
        addSocials(type, link) {
            if (type==='github') {
                githubLink.tabindex = 0;
                githubLink.href = link;
                githubLink.target = '_blank';
                githubLink.innerHTML = `<img src=${githubIcon} alt="GitHub Profile" class="social-icon">`;
            } else if (type==='linkedin') {
                linkedinLink.tabindex = 0;
                linkedinLink.href = link;
                linkedinLink.target = '_blank';
                linkedinLink.innerHTML = `<img src=${linkedinIcon} alt="LinkedIn Profile" class="social-icon">`;
            } else {
                console.log('Invalid social type');
            }
        }
    
    }
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