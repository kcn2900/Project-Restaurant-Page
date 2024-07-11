import food from './images/food-template.jpg';

export default function menuPage() {
    const contentDiv = document.querySelector('#content');
    const grid = document.createElement('div');
    let imgIndex = 0;

    grid.className = "menu-grid";
    grid.append(createTop(), attachImg(imgIndex++), createMiddle(), attachImg(imgIndex++),
     createBottom(), attachImg(imgIndex++))

    contentDiv.replaceChildren(grid);
};

function createTop() {
    const top = document.createElement('div');
    const header = document.createElement('h1');

    top.append(header);
    header.textContent = "Appetizers"    
    top.className = 'menu-top';
    
    createDeck(top, 8);

    return top;
}

function createMiddle() {
    const middle = document.createElement('div');
    const header = document.createElement('h1');

    middle.append(header);
    header.textContent = "Entrées"    
    middle.className = 'menu-middle';
    createDeck(middle, 8);

    return middle;
}

function createBottom() {
    const bottom = document.createElement('div');
    const header = document.createElement('h1');

    bottom.append(header);
    header.textContent = "Deserts & Drinks"    
    bottom.className = 'menu-bottom';
    createDeck(bottom, 8);

    return bottom;
}

function createDeck(element, n) {
    for (let i = 0; i < n; i++) {
        element.append(createCard());
        element.children[i+1].classList.add(`card`);
    }
}

function createCard() {
    const card = document.createElement('div');
    const cardText = document.createElement('div');

    card.appendChild(cardText);
    cardText.textContent = "Testing testing testing";

    return card;
}

function attachImg(imgIndex) {
    const foodTemp = new Image();
    foodTemp.className = "menu-img";
    foodTemp.src = food;

    const credits = document.createElement("p");
    credits.innerHTML = "Photo by <u>Lily Banse</u> on <u>Unsplash</u>";
    credits.classList.add("menu-credit");

    const imgContainer = document.createElement('div');
    imgContainer.className = 'menu-img-container';
    imgContainer.id = `c${imgIndex}`;
    imgContainer.append(foodTemp, credits);

    imgIndex++;

    return imgContainer;
}