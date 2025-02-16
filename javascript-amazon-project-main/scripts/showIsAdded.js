const addToCarts = document.querySelectorAll(".added-to-cart");
function showAdded3s(productId,productName){
    addToCarts.forEach((item) => {
    console.log(item.dataset.productId);
    console.log(item.productId);
        if(item.dataset.productId === productId && item.dataset.productName === productName)
        {
            item.style.opacity = 1;
            setTimeout(()=>{
                item.style.opacity = 0;
            },3000);
        }
    })

}
