const url = './data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    cards.innerHTML = displayCards(data.companies)
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const displayCards = (companies) => {
    let cardList = ``;
    let cardnum = 0
    const len = companies.length
    for (let i = 0; i < len; i++) {
        const membernumber = Number(getRandomInt(0,companies.length-1))
        if (companies[membernumber].membership > 1 && cardnum<3){
            cardnum++;
            cardList = `${cardList}
            <figure class="membercard">
                <h3>${companies[membernumber].name}</h3>
                <img src="${companies[membernumber].icon}" alt="${companies[membernumber].name}">
                <p>membership level: ${companies[membernumber].membership}</p>
                <p>${companies[membernumber].address}</p>
                <p>${companies[membernumber].phone}</p>
                <a href=${companies[membernumber].website}>${companies[membernumber].website}</a>
            </figure>`
        }
        companies.splice(membernumber, 1)
    }
    return cardList
};

getMemberData(url);