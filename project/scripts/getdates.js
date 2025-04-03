// select the DOM elements for output
const year = document.querySelector("#year");
const lastmodified = document.querySelector("#lastModified")

// use the date object
const today = new Date();

year.innerHTML = today.getFullYear();
lastmodified.innerHTML = document.lastModified;