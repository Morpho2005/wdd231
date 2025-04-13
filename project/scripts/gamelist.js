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
        const li = document.createElement('li')
        li.classList.toggle('game');
        const icon = document.createElement('img')
        icon.src = `images/${games[i].icon}`
        icon.alt = `${games[i].name}`
        icon.loading = "lazy"
        const name = document.createElement('p')
        name.textContent = `${games[i].name}`
        const genres = document.createElement('ul')
        for (a=0; a < games[i].genrelist.length; a++) {
            const genre = document.createElement('li')
            genre.textContent = `${games[i].genrelist[a]}`
            genres.appendChild(genre)
        }
        const button = document.createElement('button')
        button.textContent = 'more info'
        button.addEventListener("click", () => {
            modal.showModal();
            modaltext.innerHTML = ``
            const boxart = document.createElement('img')
            boxart.src = `images/${games[i].boxart}`
            boxart.alt = `${games[i].name}`
            boxart.loading = "lazy"
            modaltext.appendChild(boxart)
            const ul = document.createElement('ul')
            for (a=0; a < games[i].genrelist.length; a++) {
                const genre = document.createElement('li')
                genre.textContent = `${games[i].genrelist[a]}`
                ul.appendChild(genre)
            }
            const description = document.createElement('p')
            description.textContent = `${games[i].description}`
            modaltext.appendChild(boxart)
            modaltext.appendChild(ul)
            modaltext.appendChild(description)
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
                        <option value="2d-sandbox">2d-sandbox</option>
                        <option value="action">action</option>
                        <option value="adventure">adventure</option>
                        <option value="platform">platform</option>
                        <option value="rpg">rpg</option>
                        <option value="simulator">simulator</option>
                        <option value="tcg">tcg</option>
                        <option value="trivia">trivia</option>
                        <option value="turn-based">turn-based</option>
                    </select></label>
                    <input type="submit" name="filter" title="filter" value="filter">
                </fieldset>
            </form>`
})

close.addEventListener("click", () =>{
    modal.close();
})