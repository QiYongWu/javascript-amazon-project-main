//document.querySelector(".product-quantity-container select")

//初始化
const quantitySelections = document.querySelectorAll("#product-quantity-selections");
 quantitySelections.forEach((item)=>{
    
    productId = item.dataset.productId;
    productName = item.dataset.productName;
    let selectedValue = item.value;
    let element = {
        productId : productId,
        productName : productName,
        selectedValue : selectedValue
    }
    selectedValues.push(element);
});


//更新数值
quantitySelections.forEach((select) =>{ 
    select.addEventListener('change', function() {
        let productId = select.dataset.productId;
        let productName = select.dataset.productName;
      selectedValues.forEach((item) => {
  
      if(item.productId === productId)
       {
        let selectedValue = this.value;
        item.selectedValue = selectedValue;
          }
       })
       
     })
 })
 //动态更新
    
    
