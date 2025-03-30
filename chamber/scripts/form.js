const regex = /[^a-z0-9\s-]/gi;
const title = document.querySelector('#title')
const time = document.querySelector('#time');
const date = new Date();

if (date.getMinutes()<10){
    let minutes = `0${date.getMinutes()}`
    if (date.getHours()<10){
        let hours = `0${date.getHours()}`
        time.value = `${hours}:${minutes}`;
    } else {
        time.value = `${date.getHours()}:${minutes}`;
    }
} else {
    if (date.getHours()<10){
        let hours = `0${date.getHours()}`
        time.value = `${hours}:${date.getMinutes()}`;
    } else {
        time.value = `${date.getHours()}:${date.getMinutes()}`;
    }
}

console.log(time.value);

title.addEventListener('input', () =>{
    title.value = title.value.replace(regex, '')
});