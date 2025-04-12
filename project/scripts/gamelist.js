const url = './data/games.json';
const info = new URLSearchParams(window.location.search);
const gamelist = document.querySelector("#gamelist")
const filter = document.querySelector("#filter")
const close = document.querySelector('#close')
const modal = document.querySelector("#modal")
const modaltext = document.querySelector('#modaltext')

async function getGameData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    if (info.get('filter') == 'filter'){
        displayList(filtergames(data.games))
    } else {
        displayList(data.games)
    }
};

function filtergames(array){
    let filteredarray = Array()
    for (let i = 0; i < array.length; i++) {
        if (array[i].genres.includes(info.get('genre'))){
            filteredarray.push(array[i])
        }
    }
    return filteredarray
}

const displayList = (games) => {

    for (let i = 0; i < games.length; i++) {
        /*gameList = `${gameList}
            <li class="game">
                <img src="images/${games[i].icon}" alt="${games[i].name}">
                <p>${games[i].name}</p>
                <p>${games[i].genres}</p>
                <button class="">more info</button>
            </li>`*/
        const li = document.createElement('li')
        li.classList.toggle('game');
        const icon = document.createElement('img')
        icon.src = `images/${games[i].icon}`
        icon.alt = `${games[i].name}`
        icon.loading = "lazy"
        const name = document.createElement('p')
        name.textContent = `${games[i].name}`
        const genres = document.createElement('p')
        genres.textContent = `${games[i].genres}`
        const button = document.createElement('button')
        button.textContent = 'more info'
        button.addEventListener("click", () => {
            modal.showModal();
            modaltext.innerHTML = `<img src=images/${games[i].boxart}" alt="${games[i].name}" loading="lazy">
                <ul>
                    <li></li>
                </ul>
                <p>${games[i].description}</p>`
        })
        li.appendChild(icon)
        li.appendChild(name)
        li.appendChild(genres)
        li.appendChild(button)
        gamelist.appendChild(li)
    }
};

getGameData(url)

filter.addEventListener("click", () =>{
    modal.showModal();
    modaltext.innerHTML = `<form method="get" action="index.html">
                <fieldset>
                    <label>genres <select name="genre" required>
                        <option value="" disabled selected>Select a genres...</option>
                        <option value="rpg">rpg</option>
                        <option value="turn-based">turn-based</option>
                        <option value="adventure">adventure</option>
                        <option value="action">action</option>
                    </select></label>
                    <input type="submit" name="filter" title="filter" value="filter">
                </fieldset>
            </form>`
})

close.addEventListener("click", () =>{
    modal.close();
})