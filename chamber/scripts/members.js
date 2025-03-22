const url = './data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    cards.innerHTML = displayCards(data.companies)
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const displayCards = (companies) => {
    let cardList = ``;

    for (let i = 0; i < 3;) {
        const membernumber = getRandomInt(0,companies.length)
        const member = companies[membernumber]
        companies.splice(membernumber, 1)
        if (member.membership > 1){
            i++
            
            cardList = `${cardList}
            <figure class="company">
                <h3>${companies[i].name}</h3>
                <img src="${companies[i].icon}" alt="${companies[i].name}">
                <p>${companies[i].address}</p>
                <p>${companies[i].phone}</p>
                <a href=${companies[i].website}>${companies[i].website}</a>
            </figure>`
        }
    }
    return cardList
};