export default function PageLayout(container) {
    if (!(container instanceof HTMLElement)) {
        throw new Error('Invalid container element provided');
    }
    return {
        createHeader(options = {}) {
            const newHeader = document.createElement('header');
            if (options.className) {
                newHeader.classList.add(options.className);
            }
            container.appendChild(newHeader);
            return newHeader
        },
        createFooter(options = {}) {
            const newFooter = document.createElement('footer');
            if (options.className) {
                newFooter.classList.add(options.className);
            }
            container.appendChild(newFooter);
            return newFooter
        },
        createNavigationBar(options = {}) {
            const navBar = document.createElement('nav');
            if (options.className) {
                newNav.classList.add(options.className);
            }
            container.appendChild(navBar);
            return navBar
        },
        createDiv(options = {}) {
            const newDiv = document.createElement('div');
            if (options.className) {
                newDiv.classList.add(options.className);
            }
            container.appendChild(newDiv);
            return newDiv
        },
        clearPage() {
            container.innerHTML = '';
        }
    }
}