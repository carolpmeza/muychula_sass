const addToCartButton = document.querySelectorAll('.addToCart');

addToCartButton.forEach((addToCart) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});


function addToCartClicked(event){
    const button = event.target;
    conseole.log('😘: addToCartClicked -> button', button);
}

