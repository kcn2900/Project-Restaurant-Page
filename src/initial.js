export default function startUp() {
    const contentDiv = document.querySelector('#content');
    const container = document.createElement('div');
    const top = document.createElement('div');
    const bottom = document.createElement('div');
    
    top.className = "home-top";
    bottom.className = "home-bottom";

    const topText = document.createElement("p");
    topText.textContent = "Welcome to the Restaurant Page";
    top.appendChild(topText);

    const grid = document.createElement('div');
    grid.className = "home-grid";
    for (let i = 0; i < 6; i++) {
        grid.appendChild(createCard());
    }
    bottom.appendChild(grid);

    container.append(top, bottom);
    container.classList.add("home-container");
    // idea is 2 rows, 1: a basic intro, 2: grid of recipes
    contentDiv.replaceChildren(container);
};

function createCard() {
    const card = document.createElement('div');
    const cardText = document.createElement('p');

    card.appendChild(cardText);
    cardText.textContent = "Testing testing testing";

    return card;
}