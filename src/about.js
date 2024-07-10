import myImage from './images/ice.jpg';

export default function aboutPage() {
    const contentDiv = document.querySelector('#content');
    const grid = document.createElement('div');
    const top = document.createElement('div');
    const bottom = document.createElement('div');

    top.className = "about-top";
    attachTop(top);
    grid.append(top);

    bottom.classList.add("about-bottom");
    grid.append(bottom);

    grid.className = "about-grid";

    contentDiv.replaceChildren(grid);
};

function attachTop(element) {
    const img = new Image();
    img.src = myImage
    img.classList.add("about-img")

    const credits = document.createElement("p");
    credits.innerHTML = "Photo by <u>Torsten Dederichs</u> on <u>Unsplash</u>";
    credits.classList.add("contact-credit");

    const introText = document.createElement("p");
    introText.textContent = "Restaurant Name";
    introText.classList.add("about-intro");

    element.append(img, introText, credits);
}

function attachBottom(element) {
    element.append(bottom);

}