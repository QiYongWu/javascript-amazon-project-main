import {cart} from '../data/cart.js'
import {products} from '../data/products.js'
import { GetRightMoney } from './money.js';
import { deliveryDates } from '../data/deliveryDate.js';
import { ResetCartStorage } from '../data/cart.js';
import { SaveToStorage } from '../data/cart.js';
let checkoutHTML ='';



    cart.forEach( (cartItem) => {

        const cartProduct = products.find(product => 
        product.id === cartItem.productId && product.name === cartItem.productName
        );

        

    /* products.forEach((product) => {
            if(product.id === productId && product.Name === productName){
                cartProduct = product;
                return;
            }
        })  */ //无法终止

    let cartItemHTML = 
        `
        <div class="cart-item-container"
        data-cart-product-id = ${cartItem.productId}
        data-cart-product-name = ${cartItem.productName}>
                    <div class="delivery-date"> <!--发货日期-->
                    Delivery date: ${deliveryDates[0].delivery_date}
                    </div>

                    <div class="cart-item-details-grid">
                    <img class="product-image"
                        src="${cartProduct.image}">

                    <div class="cart-item-details">
                        <div class="product-name">
                        ${cartProduct.name}
                        </div>
                        <div class="product-price">
                        $${GetRightMoney(cartProduct.priceCents)}
                        </div>
                        <div class="product-quantity">
                        <span>
                            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary">
                            Update
                        </span>
                        <span class="delete-quantity-link link-primary"
                        data-cart-product-id = ${cartItem.productId}
                        data-cart-product-name = ${cartItem.productName}>
                            Delete
                        </span>
                        </div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                        Choose a delivery option:
                        </div>
                        <div class="delivery-option">
                        <input type="radio" checked
                            class="delivery-option-input"
                            name="delivery-option-1">
                        <div>
                            <div class="delivery-option-date">
                            Tuesday, June 21
                            </div>
                            <div class="delivery-option-price">
                            FREE Shipping
                            </div>
                        </div>
                        </div>
                        <div class="delivery-option">
                        <input type="radio"
                            class="delivery-option-input"
                            name="delivery-option-1">
                        <div>
                            <div class="delivery-option-date">
                            Wednesday, June 15
                            </div>
                            <div class="delivery-option-price">
                            $4.99 - Shipping
                            </div>
                        </div>
                        </div>
                        <div class="delivery-option">
                        <input type="radio"
                            class="delivery-option-input"
                            name="delivery-option-1">
                        <div>
                            <div class="delivery-option-date">
                            Monday, June 13
                            </div>
                            <div class="delivery-option-price">
                            $9.99 - Shipping
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        `
        checkoutHTML +=cartItemHTML;
    })




const orderSummary = document.querySelector(".order-summary");
orderSummary.innerHTML = checkoutHTML;

const resetCart = document.querySelector(".reset-cart-button");
    resetCart.addEventListener('click',() =>{
        ResetCartStorage();
        RemoveAllProductsInCheckout();

    })


function RemoveAllProductsInCheckout(){
    const cartItemContainer = document.querySelectorAll(".cart-item-container");
    cartItemContainer.forEach((item) =>{
        item.remove();
    })
}


//delete
const cartDeletions = document.querySelectorAll(".delete-quantity-link");
cartDeletions.forEach((cartDeletion) =>{
    cartDeletion.addEventListener('click',() =>{
        //console.log('deleted'); 完成
        const cartItemContainers = document.querySelectorAll(".cart-item-container");
        //console.log(cart);
        cartItemContainers.forEach(( cartItemContainer) => {
           /*完成
            console.log(cartDeletion.dataset.cartProductId);
            console.log(cartItemContainer.dataset.cartProductId);
            console.log('\n');
            console.log(cartDeletion.dataset.cartProductName);
            console.log(cartItemContainer.dataset.cartProductName);
            console.log('\n')
            */
            let removeCartItem; //寻找要移除的元素
            if(cartDeletion.dataset.cartProductId == cartItemContainer.dataset.cartProductId){
                console.log(cartItemContainer);
                
                 removeCartItem = cart.find((cartItem) => {
                    return cartItem.productId == cartDeletion.dataset.cartProductId
                })
                console.log(removeCartItem);
                
                let removeCartItemIndex;
                cart.forEach((cartProduct,index) => {
                    if(cartProduct.productId === removeCartItem.productId){
                        removeCartItemIndex = index;
                    }
                });
                cart.splice(removeCartItemIndex, 1);
               
                console.log(cart);
                cartItemContainer.remove();//移除该商品
                    
        
                  
            }
        })
    })
})
