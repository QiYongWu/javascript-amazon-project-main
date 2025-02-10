const products = [
  {
    image : 'images/products/athletic-cotton-socks-6-pairs.jpg' ,
    name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating : {
      starts_image : 'images/ratings/rating-45.png',
      starts : 4.5,
      count : 87
    },
    priceCents : 1095 //   价格/美分
  },

  {
    image : 'images/products/intermediate-composite-basketball.jpg' ,
    name : 'Intermediate Size Basketball',
    rating : {
      starts_image : 'images/ratings/rating-40.png',
      starts : 4,
      count :  127
    },
    priceCents : 2095  //   价格/美分
  },
  {
    image : 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg' ,
    name : 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating : {
      starts_image : 'images/ratings/rating-45.png',
      starts : 4.5,
      count : 56
    },
    priceCents : 799 //   价格/美分
  } ];

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
          <img class="product-rating-stars" src="${product.rating.starts_image}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>
  
        <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
        </div>
  
        <div class="product-quantity-container">
          <select>
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
  
        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>
  
        <button class="add-to-cart-button button-primary">
          Add to Cart
        </button>
      </div>
    `;
  });

  console.log(products_html);
