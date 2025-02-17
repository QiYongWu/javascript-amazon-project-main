import {showAdded3s} from "../scripts/showIsAdded.js";
import { selectedValues } from "./selectedValue.js";

let cart =  JSON.parse(localStorage.getItem('cart'));
 
if(!cart){
   cart = [
    {
      productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      productName : "Black and Gray Athletic Cotton Socks - 6 Pairs",
      quantity : 1
    }
   ]
}
 function SaveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
    //
}

function ResetCartStorage() {
  localStorage.removeItem('cart');
}



function AddToCart(){
    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
       
      button.addEventListener('click',function(){
        
          let selectedValue = 1; //默认值为1，每次选中几个该类型的商品
          const productName = button.dataset.productName;
          const productId = button.dataset.productId;
          showAdded3s(productId,productName);//显示added
          selectedValues.forEach((item)=>{
            if(item.productId === productId || item.productName === productName){
               selectedValue = Number(item.selectedValue);
            }
          })

        
            let matchingItem;
              cart.forEach((item) => {
                if (productId === item.productId){
                  matchingItem = item;
                }
              });
          
    
            if(matchingItem){
              matchingItem.quantity +=selectedValue;
            } else {
              cart.push({
                productId : productId,
                productName : productName,
                quantity : selectedValue
              });
            }

            SaveToStorage();   //保存cart到localStorage，避免因刷新导致cart丢失
            console.log(cart); //调试
            //ResetCartStorage(); 重置cart

            let cartQuantity = 0;
           
              cart.forEach((item) =>{
              cartQuantity  = Number(cartQuantity) + Number(item.quantity);
           })
                
              const jsCartQuantity = document.querySelector('.js-cart-quantity');
         
              jsCartQuantity.innerHTML = cartQuantity;

      })
    });
  }

export  {cart,SaveToStorage,AddToCart,ResetCartStorage};

