export default function homePage() {
    const container = document.querySelector("#content");
    
    const title = document.createElement("h1");
    title.textContent = "Beary's Breakfast Bar";
    container.appendChild(title);
}