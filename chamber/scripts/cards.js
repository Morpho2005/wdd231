const url = './data/members.json';
const cards = document.querySelector('#cards');
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

async function getCardData(URL, bool) {
    const response = await fetch(URL);
    const data = await response.json();
    cards.innerHTML = displayCards(data.companies, bool)
};

const displayCards = (companies, bool) => {
    let cardList = ``;

    for (let i = 0; i < companies.length; i++) {
        if (bool) {
            cardList = `${cardList}
            <figure class="company">
                <img src="${companies[i].icon}" alt="${companies[i].name}">
                <p>${companies[i].address}</p>
                <p>${companies[i].phone}</p>
                <a href=${companies[i].website}>${companies[i].website}</a>
            </figure>`
        } else {
            cardList = `${cardList}
            <figure class="company">
                <p>${companies[i].name}</p>
                <p>${companies[i].address}</p>
                <p>${companies[i].phone}</p>
                <a href=${companies[i].website}>${companies[i].website}</a>
            </figure>`
        }
        
    }
    return cardList
};

getCardData(url, true);

gridbutton.addEventListener("click", () => {
	// example using arrow function
	cards.classList.add("grid");
	cards.classList.remove("list");
    getCardData(url, true);
});

listbutton.addEventListener("click", () => {
	// example using arrow function
	cards.classList.remove("grid");
	cards.classList.add("list");
    getCardData(url, false);
});