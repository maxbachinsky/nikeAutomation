var x=localStorage.getItem("sizesArray");
sizeSelector=x[Math.floor(Math.random()*(x.length))];
document.querySelector('[aria-label="US '+sizeSelector+'"]').click();
document.querySelector('.addToCartBtn').click();
