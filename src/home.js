import bee from "./images/bee.svg";
import { clear, createHeader, createItem } from "./utility.js";

export default function homePage() {
    clear();

    const container = document.querySelector("#content");


    const leftBee = document.createElement("img");
    leftBee.setAttribute("src", bee);
    leftBee.classList.add("left-bee");

    const rightBee = document.createElement("img");
    rightBee.setAttribute("src", bee);
    rightBee.setAttribute("style", "transform: rotate(90deg)");
    rightBee.classList.add("right-bee");

    createHeader("Beary's Breakfast Bar", null, leftBee, rightBee);


    const testimonialParagraph = document.createElement("p");
    testimonialParagraph.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    
    const testimonialAuthor = document.createElement("h2");
    testimonialAuthor.textContent = "Goldilocks";

    createItem(null, testimonialParagraph, testimonialAuthor);


    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";
    
    const hoursParagraph = document.createElement("div");
    const hoursArray = ["Sunday: 8am - 8pm",  "Monday: 6am - 6pm", "Tuesday: 6am - 6pm", "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", 
                        "Saturday: 8am - 10pm"];
    hoursArray.forEach(element => {
        const p = document.createElement("p");
        p.textContent = element;
        p.setAttribute("style", "text-align: center")
        hoursParagraph.appendChild(p);
    });
    createItem(null, hoursTitle, hoursParagraph);


    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = "123 Forest Drive, Forestville, Maine";
    locationParagraph.setAttribute("style", "text-align: center");

    createItem(["small"], locationTitle, locationParagraph);
}