export default function PageLayout(container) {
    return {
        createHeader() {
            const newHeader = document.createElement('header');
            container.appendChild(newHeader);
            return newHeader
        },
        createFooter() {
            const newFooter = document.createElement('footer');
            container.appendChild(newFooter);
            return newFooter
        },
        createDiv(classText='') {
            const newDiv = document.createElement('div');
            newDiv.classList.add(classText);
            container.appendChild(newDiv);
            return newDiv
        }
    }
}