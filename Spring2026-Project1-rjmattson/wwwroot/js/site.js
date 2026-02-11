// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let count = 0;
const button = document.getElementById("theButton");
const display = document.getElementById("Likes");

button.addEventListener('click', () => {
    count++;
    display.innerText = count + " Likes";
});