   
  import {products} from '../data/products.js'
  import {showAdded3s} from './showIsAdded.js';
  import {GetRightMoney} from './money.js';
  import {selectedValues} from '../data/selectedValue.js';
  import { AddToCart,cart, SaveToStorage,ResetCartStorage} from '../data/cart.js';
 
   //float.toFixed(n) 将小数float转化成字符串，并保留n位小数
  let products_html = "";
  products.forEach((product) => {
    products_html += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>
  
        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>
  
        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars*10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>
  
        <div class="product-price">
          $${GetRightMoney(product.priceCents)}
        </div>
  
        <div class="product-quantity-container">
          <select id = "product-quantity-selections"
          data-product-name = "${product.name}"
        data-product-id = "${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
  
        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart" 
        data-product-name = "${product.name}"
        data-product-id = "${product.id}"
         >
          <img src="images/icons/checkmark.png">
          Added
        </div>
  
        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-name = "${product.name}"
        data-product-id = "${product.id}">  
          Add to Cart
        </button>
      </div>
    `;
  });
  document.querySelector('.js-products-grid').innerHTML = products_html;
  AddToCart();  //添加到购物车-集成函数
 
/*
data attribute  <button data-buttonName = "&{value}">button</button> 必须以data-为开头
console.log(button.dataset)
*/





 


  

