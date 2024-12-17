import bee from "./images/bee.svg";
import { clear } from "./utility.js"

export default function homePage() {
    clear();
    
    const container = document.querySelector("#content");
    
    const heading = document.createElement("div");
    container.appendChild(heading);
    heading.classList.add("heading-container");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("heading");

    const title = document.createElement("h1");
    title.textContent = "Beary's Breakfast Bar";
    titleContainer.appendChild(title);
    heading.appendChild(titleContainer);

    const leftBee = document.createElement("img");
    leftBee.setAttribute("src", bee);
    leftBee.classList.add("left-bee");
    heading.appendChild(leftBee);

    const rightBee = document.createElement("img");
    rightBee.setAttribute("src", bee);
    rightBee.setAttribute("style", "transform: rotate(90deg)");
    rightBee.classList.add("right-bee");
    heading.appendChild(rightBee);




    const testimonialContainer = document.createElement("div");
    testimonialContainer.classList.add("item-container");
    
    const testimonial = document.createElement("p");
    const testimonialParagraph = document.createElement("div");
    testimonial.classList.add("item");
    testimonialParagraph.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    const testimonialAuthor = document.createElement("h2");
    testimonialAuthor.textContent = "Goldilocks";
    testimonialAuthor.classList.add("testimonial-author");

    container.appendChild(testimonialContainer);
    testimonialContainer.appendChild(testimonial);
    testimonial.appendChild(testimonialParagraph);
    testimonial.appendChild(testimonialAuthor);


    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("item-container");

    const hours = document.createElement("div");
    hours.classList.add("item");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours";
    
    const hoursParagraph = document.createElement("div");

    const hoursArray = ["Sunday: 8am - 8pm",  "Monday: 6am - 6pm", "Tuesday: 6am - 6pm", "Wednesday: 6am - 6pm", "Thursday: 6am - 10pm", "Friday: 6am - 10pm", 
                        "Saturday: 8am - 10pm"];
    hoursArray.forEach(element => {
        const p = document.createElement("p");
        p.textContent = element;
        hoursParagraph.appendChild(p);
    });

    container.appendChild(hoursContainer);
    hoursContainer.appendChild(hours);
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursParagraph);

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("item-container", "small", "margin-bottom");

    const location = document.createElement("div");
    location.classList.add("item", "small");

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = "123 Forest Drive, Forestville, Maine";

    container.appendChild(locationContainer);
    locationContainer.appendChild(location);
    location.appendChild(locationTitle);
    location.appendChild(locationParagraph);
}