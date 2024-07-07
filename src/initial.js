export default function startUp() {
    const contentDiv = document.querySelector('#content');
    const grid = document.createElement('div');

    grid.textContent = "Hello!";

    contentDiv.replaceChildren(grid);
};