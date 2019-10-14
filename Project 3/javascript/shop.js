var buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', function(){alert('Added to cart');})
})