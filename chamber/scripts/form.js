const regex = /[^a-z0-9\s-]/gi;
const title = document.querySelector('#title')
const time = document.querySelector('#time');

time.value = `${new Date().getHours()}:${new Date().getMinutes()}`;

console.log(time.value);

title.addEventListener('input', () =>{
    title.value = title.value.replace(regex, '')
});