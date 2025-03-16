/**
 * Задание 1
 *
 * Представьте, что у вас есть класс для управления библиотекой.
 * В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
 *
 * Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
 *
 * Реализуйте геттер allBooks, который возвращает текущий список книг.
 *
 * Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
 * Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
 *
 * Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.
 * Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
 *
 * Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
 *
 * Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента.
 * Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
 */

class Library {
  #books = [];
  varructor(books) {
    if (new Set(books).size !== books.length) {
      throw new Error('Массив содержит дубликаты');
    }
    this.#books = books;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error('Книга с таким названием уже существует в списке');
    }
    this.#books.push(title);
  }

  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error('Книги с таким названием нет в списке');
    }
    this.#books = this.#books.filter(book => book !== title);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}


/**
 * Задание 2
 * Вы разрабатываете систему отзывов для вашего веб-сайта.
 *  Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
 *
 * Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
 *
 * Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
 *  Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
 *
 * При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
 *
 * Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
 */

var initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function addReview() {
  var product = document.getElementById("productSelect").value;
  var reviewText = document.getElementById("reviewText").value;
  var errorMessage = document.getElementById("errorMessage");
  if (reviewText.length < 50 || reviewText.length > 500) {
    errorMessage.textContent = "Отзыв должен быть от 50 до 500 символов.";
    return;
  }
  var reviewContainer = document.getElementById("reviews");
  var reviewElement = document.createElement("div");
  var productElement = document.createElement("h3");
  productElement.textContent = product;
  reviewContainer.appendChild(productElement);
  reviewElement.classList.add("review");
  reviewElement.textContent = reviewText;
  reviewContainer.appendChild(reviewElement);

  for (var { reviews } of initialData) {
    if (reviews.find(review => review.id === product)) {
      reviews.push({ id: product, text: reviewText });
      return;
    }
  }

  initialData.push({ product: product, reviews: [{ id: product, text: reviewText }] });

  errorMessage.textContent = "";

  reviewText = "";

}
(()=>{
  var reviewContainer = document.getElementById("reviews");
  for (var { product, reviews } of initialData) {
    var productElement = document.createElement("h3");
    productElement.textContent = product;
    reviewContainer.appendChild(productElement);

    for (var { id, text } of reviews) {
      var reviewElement = document.createElement("div");
      reviewElement.classList.add("review");
      reviewElement.textContent = text;
      reviewContainer.appendChild(reviewElement);
    }
  }
})()

;(()=>{
  var productSelect = document.getElementById("productSelect");
  for (var { product } of initialData) {
    var option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
  }
})()
