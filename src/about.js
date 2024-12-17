import bee from "./images/bee.svg";
import { clear, createHeader, createItem } from "./utility.js";

export default function aboutPage() {
    clear();

    const container = document.querySelector("#content");
    
    
    const leftBee = document.createElement("img");
    leftBee.setAttribute("src", bee);
    leftBee.classList.add("left-bee");

    const rightBee = document.createElement("img");
    rightBee.setAttribute("src", bee);
    rightBee.setAttribute("style", "transform: rotate(90deg)");
    rightBee.classList.add("right-bee");

    createHeader("About", null, leftBee, rightBee);

    function createContactInfo(person) {
        const name = document.createElement("h2");
        name.textContent = person.name;

        const container = document.createElement("div");

        const title = document.createElement("p");
        title.textContent = person.title;

        const number = document.createElement("p");
        number.textContent = person.number;

        const email = document.createElement("p");
        email.textContent = person.email;

        container.appendChild(title);
        container.appendChild(number);
        container.appendChild(email);
        container.classList.add("padding-left");


        createItem(["medium"], name, container);
    }

    const employees = [
        {
            name: "Mama Bear",
            title: "Chef",
            number: "555-555-555",
            email: "totallyRealEmail@notFake.com",
        },
        {
            name: "Papa Bear",
            title: "Manager",
            number: "555-555-555",
            email: "perfectlyRealEmail@notFake.com",
        },
        {
            name: "Baby Bear",
            title: "Waiter",
            number: "555-555-55",
            email: "totallyRealEmail@notFake.com",
        },
    ]

    employees.forEach(person => createContactInfo(person));
}