let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchBar = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchBar.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
}

/**cerrae ventanas cuando scroll */
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
    cartItem.classList.remove('active');
}