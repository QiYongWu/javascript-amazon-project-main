import {cart} from '../data/cart.js'
import {products} from '../data/products.js'
import { GetRightMoney } from './money.js';
import { deliveryDates } from '../data/deliveryDate.js';
import { ResetCartStorage } from '../data/cart.js';
let checkoutHTML ='';

console.log(cart);

    cart.forEach( (cartItem) => {
        console.log(cartItem.productId,cartItem.productName,cartItem.quantity);

        const cartProduct = products.find(product => 
        product.id === cartItem.productId && product.name === cartItem.productName
        );

        console.log(cartProduct)
        

    /* products.forEach((product) => {
            if(product.id === productId && product.Name === productName){
                cartProduct = product;
                return;
            }
        })  */ //无法终止

    let cartItemHTML = 
        `
        <div class="cart-item-container">
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
                        <span class="delete-quantity-link link-primary">
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