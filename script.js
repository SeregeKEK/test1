// fetch("data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const cardDiv = document.querySelector(".product-cards");
//     data.forEach(({ imgUrl, cardName, price, previousPrice, id }) => {
//       // Определяем класс для previousPrice
//       const previousPriceClass =
//         previousPrice === ""
//           ? "product-card__previousPrice noPromotion"
//           : "product-card__previousPrice";

//       // Определяем HTML для элемента promotion
//       const promotionHTML = previousPrice === ""
//         ? ''  // Если previousPrice пустой, то promotion не будет отображаться
//         : '<p class="promotion">Акция</p>'; // В противном случае добавляем элемент

//       const productCard = `
//         <div id="${id}" class="product-card">
//             <div class="product-card__img">
//               ${promotionHTML}
//               <img class="product-card__image" src="${imgUrl}" alt="productImage">
//               <button class="product-card__btn">Подробнее</button>
//             </div>
//             <div class="product-card__title">
//               <h3 class="product-card__text">${cardName}</h3>
//             </div>
//             <div class="product-card__price">
//               <span class="product-card__mainPrice">${price} ₽</span>
//               <span class="${previousPriceClass}">${previousPrice} ₽</span>
//             </div>
//         </div>`;

//       cardDiv.insertAdjacentHTML("beforeend", productCard);
//     });
//   });

// fetch("data.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     const cardDiv = document.querySelector(".product-cards");

//     data.forEach(({ imgUrl, cardName, price, previousPrice, id }) => {
//       const previousPriceClass =
//         previousPrice === ""
//           ? "product-card__previousPrice noPromotion"
//           : "product-card__previousPrice";

//       const previousPriceDisplay = previousPrice === "" ? "" : `${previousPrice} ₽`;

//       const promotionHTML = previousPrice === ""
//         ? ''
//         : '<p class="promotion">Акция</p>';

//       const productCard = `
//         <div id="${id}" class="product-card">
//             <div class="product-card__img">
//               ${promotionHTML}
//               <img class="product-card__image" src="${imgUrl}" alt="productImage">
//               <button class="product-card__btn">Подробнее</button>
//             </div>
//             <div class="product-card__title">
//               <h3 class="product-card__text">${cardName}</h3>
//             </div>
//             <div class="product-card__price">
//               <span class="product-card__mainPrice">${price} ₽</span>
//               <span class="${previousPriceClass}">${previousPriceDisplay}</span>
//             </div>
//         </div>`;

//       cardDiv.insertAdjacentHTML("beforeend", productCard);
//     });
//   });

function loadProductCards() {
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const cardDiv = document.querySelector(".product-cards");

      data.forEach(({ imgUrl, cardName, price, previousPrice, id }) => {
        const previousPriceClass =
          previousPrice === ""
            ? "product-card__previousPrice noPromotion"
            : "product-card__previousPrice";

        const promotionHTML =
          previousPrice === "" ? "" : '<p class="promotion">Акция</p>';

        const priceColor = promotionHTML ? "#E45302" : "#000";
        const previousPriceDisplay =
          previousPrice === "" ? "" : `${previousPrice} ₽`;

        const productCard = `
          <div id="${id}" class="product-card">
              <div class="product-card__img">
                ${promotionHTML}
                <img class="product-card__image" src="${imgUrl}" alt="productImage">
                  <div class="product-card__backgroundBtn">
                    <button class="product-card__btn">Подробнее</button>
                  </div>
              </div>
              <div class="product-card__title">
                <h3 class="product-card__text">${cardName}</h3>
              </div>
              <div class="product-card__price">
                <span class="product-card__mainPrice" style="color: ${priceColor};">${price} ₽</span>
                <span class="${previousPriceClass}" style="color: #808080; text-decoration: line-through;">${previousPriceDisplay}</span>
              </div>
          </div>`;

        cardDiv.insertAdjacentHTML("beforeend", productCard);
      });
    })
    .catch((error) => {
      console.error("Fetch error: ", error);
    });
}
document.addEventListener("DOMContentLoaded", loadProductCards);
