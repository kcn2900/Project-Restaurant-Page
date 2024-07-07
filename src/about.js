export default function aboutPage() {
    const contentDiv = document.querySelector('#content');
    const grid = document.createElement('div');

    grid.textContent = "About Page!";

    contentDiv.replaceChildren(grid);
};