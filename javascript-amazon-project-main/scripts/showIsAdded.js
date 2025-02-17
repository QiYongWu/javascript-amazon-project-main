
function showAdded3s(productId,productName){
    const addToCarts = document.querySelectorAll(".added-to-cart");
    addToCarts.forEach((item) => {
    
        if(item.dataset.productId === productId && item.dataset.productName === productName)
        {
            item.style.opacity = 1;
            setTimeout(()=>{
                item.style.opacity = 0;
            },3000);
        }
    })
}

export {showAdded3s}
