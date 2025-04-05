const json = './data/locations.json';
const discover = document.querySelector('#discover');

async function getCardData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    discover.innerHTML = displayCards(data.locations)
};

const displayCards = (locations) => {
    let cardList = ``;

    for (let i = 0; i < locations.length; i++) {
        cardList = `${cardList}
            <section class="location">
                <h2>${locations[i].name}</h2>
                <figure><img src="images/${locations[i].image}" alt="${locations[i].name}"></figure>
                <p>${locations[i].description}</p>
                <address>${locations[i].address}</address>
                <button>learn more</button>
            </section>`
    }
    return cardList
};

getCardData(json);

/*
<section>
<h2></h2>
<figure></figure>
<address></address>
<p></p>
<button>learn more</button>
</section>*/