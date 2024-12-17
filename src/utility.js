export function clear() {
    const container = document.querySelector("#content");
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

export function createHeader(titleText, classes, ...rest) {
    const container = document.querySelector("#content");

    const heading = document.createElement("div");
    container.appendChild(heading);
    heading.classList.add("heading-container");

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("heading");

    if (classes != null ) {
        classes.forEach(i => {
            heading.classList.add(i);
            titleContainer.classList.add(i);
        });
    }

    const title = document.createElement("h1");
    title.textContent = titleText;
    titleContainer.appendChild(title);
    heading.appendChild(titleContainer);

    
    if (rest.length > 0) {
        Array.from(rest).forEach(element => {
            heading.appendChild(element);
        })
    }
}


export function createItem(classes, ...rest) {
    const container = document.querySelector("#content");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const item = document.createElement("div");
    item.classList.add("item");

    if (classes != null ) {
        classes.forEach(i => {
            itemContainer.classList.add(i);
            if (i != "margin-bottom")  item.classList.add(i);
        });
    }

    container.appendChild(itemContainer);
    itemContainer.appendChild(item);

    if (rest.length > 0) {
        Array.from(rest).forEach(element => {
            item.appendChild(element);
        })
    }
}