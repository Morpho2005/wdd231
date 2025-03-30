const goldbutton = document.querySelector('#gold');
const silverbutton = document.querySelector('#silver');
const bronzebutton = document.querySelector('#bronze');
const npbutton = document.querySelector('#np');
const modal = document.querySelector('#modal');
const modaltext = document.querySelector('#modaltext');
const close = document.querySelector('#close');

close.addEventListener("click", () => {
    modal.close();
})

npbutton.addEventListener("click", () => {
    modaltext.innerHTML = `<ul>
    <li>free</li>
    <li>listed on site in directory</li>
    <li>get notified on upcomming events</li>
    </ul>`
    modal.showModal();
})

bronzebutton.addEventListener("click", () => {
    modaltext.innerHTML = `<ul>
    <li>$4.99/month</li>
    <li>listed on site in directory</li>
    <li>get notified on upcomming events</li>
    <li>can vote on upcomming events</li>
    </ul>`
    modal.showModal();
})

silverbutton.addEventListener("click", () => {
    modaltext.innerHTML = `<ul>
    <li>$7.99/month</li>
    <li>listed on site in directory</li>
    <li>get notified on upcomming events</li>
    <li>can vote on upcomming events</li>
    <li>have stronger votes than bronze</li>
    <li>get ad spaces on home page</li>
    </ul>`
    modal.showModal();
})

goldbutton.addEventListener("click", () => {
    modaltext.innerHTML = `<ul>
    <li>$15.99/month</li>
    <li>listed on site in directory</li>
    <li>get notified on upcomming events</li>
    <li>can vote on upcomming events</li>
    <li>have stronger votes than silver</li>
    <li>get ad spaces on home page</li>
    <li>can have own events listed on home page</li>
    </ul>`
    modal.showModal();
})
