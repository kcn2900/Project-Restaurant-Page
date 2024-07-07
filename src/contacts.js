import mountain from './images/ice-mountain.jpg';

export default function contactPage() {
    const contentDiv = document.querySelector('#content');
    const contact = document.createElement('div');
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    
    const background = new Image()
    background.src = mountain;
    background.classList.add("contact-img");


    const credits = document.createElement("p");
    credits.innerHTML = "Photo by <u>Time Stief</u> on <u>Unsplash</u>";
    credits.classList.add("contact-credit");

    row1.append(background, credits)
    row1.className = "contact-row1";

    row2.className = "contact-row2";
    row2.append(createForm());

    contact.className = "contact-div";
    contact.append(row1, row2);
    contentDiv.replaceChildren(contact);
};

function createForm() {
    const form = document.createElement("form");

    const nameIn = document.createElement("input");
    nameIn.setAttribute("placeholder", "Name");
    nameIn.setAttribute("type", "text");

    const emailIn = document.createElement("input");
    emailIn.setAttribute("placeholder", "Email")
    emailIn.setAttribute("type", "email");

    const textIn = document.createElement("textarea");
    textIn.setAttribute("placeholder", "Comments");

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";

    form.classList.add("contact-form");
    form.append(nameIn, emailIn, textIn, submitBtn);

    return form;
}