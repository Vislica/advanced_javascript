/**
 * Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах.
 * Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.
 *
 * Страница добавления отзыва:
 * Поле для ввода названия продукта.
 * Текстовое поле для самого отзыва.
 * Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.
 *
 * Страница просмотра отзывов:
 *
 * Показывает список всех продуктов, о которых были оставлены отзывы.
 * При клике на название продукта отображается список всех отзывов по этому продукту.
 * Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
 */
var reviews = new Map();

function addReview() {
  var product = document.getElementById("product").value.trim();
  var review = document.getElementById("review").value.trim();

  if (!product || !review) return;

  if (!reviews.has(product)) {
    reviews.set(product, []);
  }

  reviews.get(product).push(review);
  localStorage.setItem("reviews", JSON.stringify(Array.from(reviews.entries())));
  displayReviews();

  document.getElementById("product").value = "";
  document.getElementById("review").value = "";
}

function displayReviews() {
  var reviewContainer = document.querySelector(".reviews");
  reviewContainer.innerHTML = "";

  for (let [product, productReviews] of reviews) {
    var productElement = document.createElement("h3");
    productElement.textContent = product;
    reviewContainer.appendChild(productElement);

    productReviews.forEach((review, index) => {
      var reviewElement = document.createElement("div");
      reviewElement.classList.add("review");
      reviewElement.textContent = review;

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Удалить";
      deleteButton.addEventListener("click", () => {
        productReviews.splice(index, 1);
        if (productReviews.length === 0) {
          reviews.delete(product); // Удаляем продукт, если нет отзывов
        }
        localStorage.setItem("reviews", JSON.stringify(Array.from(reviews.entries())));
        displayReviews();
      });

      reviewElement.appendChild(deleteButton);
      reviewContainer.appendChild(reviewElement);
    });
  }
}

document.getElementById("addReview").addEventListener("click", addReview);

window.addEventListener("load", () => {
  var storedReviews = localStorage.getItem("reviews");
  if (storedReviews) {
    reviews = new Map(JSON.parse(storedReviews)); // ✅ Правильная загрузка Map
  }
  displayReviews();
});
