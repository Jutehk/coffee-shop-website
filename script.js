let navbar = document.querySelector('.navbar'); 

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}


let searchForm = document.querySelector('.search-form'); 

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');

 
}

let cartItem = document.querySelector('.cart-items-container'); 

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


document.getElementById('learnMoreBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default link behavior
    var learnMoreContent = document.getElementById('learnMoreContent');
    if (learnMoreContent.style.display === 'none' || learnMoreContent.style.display === '') {
        learnMoreContent.style.display = 'block';
        this.textContent = 'Show less'; // Optionally change the button text
    } else {
        learnMoreContent.style.display = 'none';
        this.textContent = 'Learn more';
    }
});
