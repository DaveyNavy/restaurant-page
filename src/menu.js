import bee from "./images/bee.svg";
import { clear, createHeader, createItem } from "./utility.js";

export default function menu() {
    clear();

    const container = document.querySelector("#content");
    
    
    const leftBee = document.createElement("img");
    leftBee.setAttribute("src", bee);
    leftBee.classList.add("left-bee");

    const rightBee = document.createElement("img");
    rightBee.setAttribute("src", bee);
    rightBee.setAttribute("style", "transform: rotate(90deg)");
    rightBee.classList.add("right-bee");

    createHeader("Menu", null, leftBee, rightBee);

    function createMenuItem(element) {
        const itemTitle = document.createElement("h2");
        itemTitle.textContent = element.name;
        
        const itemDescription = document.createElement("p");
        itemDescription.textContent = element.description;
        itemDescription.classList.add("padding-left");
    
        const itemCost = document.createElement("h3");
        itemCost.textContent = element.cost;
        itemCost.classList.add("padding-left");
    
        const itemImage = document.createElement("div");
        itemImage.classList.add("menu-item-image");
    
        createItem(null, itemTitle, itemDescription, itemCost, itemImage);
    }

    createHeader("Beverages", ["short-header", "first"]);

    const beverages = [
        {
            name: "Honey Tea",
            description: "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
            cost: "$2"
        },
        {
            name: "Beary Tea",
            description: "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
            cost: "$3"
        },
    ]

    beverages.forEach(element => createMenuItem(element))
    
    createHeader("Sides", ["short-header"]);

    const sides = [
        {
            name: "Toast and Jam",
            description: "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
            cost: "$1"
        },
        {
            name: "Fresh Fruit",
            description: "A small bowl of fresh fruit, whatever we find at the market for the day.",
            cost: "$3"
        },
    ]

    sides.forEach(element => createMenuItem(element));

    createHeader("Main Dishes", ["short-header"]);
    
    const mainDishes = [
        {
            name: "Pancakes",
            description: "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
            cost: "$4"
        },
        {
            name: "French Toast",
            description: "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
            cost: "$5"
        },
        {
            name: "Beary Veggie Sandwich",
            description: "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
            cost: "$8"
        },
        {
            name: "BLT",
            description: "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
            cost: "$6"
        },
        {
            name: "Bagel and Lox",
            description: "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
            cost: "$8"
        },
        {
            name: "Honeycomb",
            description: "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
            cost: "$6"
        },
        {
            name: "Beary Bowl",
            description: "Get a big ole bowl of our berries! Side of honey is $1 extra.",
            cost: "$7"
        },
        {
            name: "The Beary Best Porridge",
            description: "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.",
            cost: "$5"
        },
    ]

    mainDishes.forEach(element => createMenuItem(element));
}