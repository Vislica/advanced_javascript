var app = document.querySelector('#app');

/**
 * Задание 1
 *
 * • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
 *
 * • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
 * {
 *   title: "Название альбома",
 *   artist: "Исполнитель",
 *   year: "Год выпуска"
 * }
 *
 * • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
 * • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
 * */


var musicCollection = {
  albums: [
    {
      title: "Название альбома 1",
      artist: "Исполнитель 1",
      year: "Год выпуска 1",
    },
    {
      title: "Название альбома 2",
      artist: "Исполнитель 2",
      year: "Год выпуска 2",
    },
    {
      title: "Название альбома 3",
      artist: "Исполнитель 3",
      year: "Год выпуска 3",
    },
  ],
  [Symbol.iterator]() {
    var index = 0;
    var albums = this.albums;

    return {
      next() {
        if (index < albums.length) {
          return {
            value: albums[index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      }
    }
}}
;(() => {
  for (var album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }
})();

/**
 * Задание 2
 *
 * Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
 *
 * Необходимо создать систему управления этими заказами, которая позволит:
 *
 * • Отслеживать, какой повар готовит какое блюдо.
 * • Записывать, какие блюда заказал каждый клиент.
 *
 * Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.
 *
 * Повара и их специализации:
 *
 * Виктор - специализация: Пицца.
 * Ольга - специализация: Суши.
 * Дмитрий - специализация: Десерты.
 *
 * Блюда и их повара:
 *
 * Пицца "Маргарита" - повар: Виктор.
 * Пицца "Пепперони" - повар: Виктор.
 * Суши "Филадельфия" - повар: Ольга.
 * Суши "Калифорния" - повар: Ольга.
 * Тирамису - повар: Дмитрий.
 * Чизкейк - повар: Дмитрий.
 *
 * Заказы:
 *
 * Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
 * Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
 * Клиент Ирина заказала: Чизкейк.
 * */


class Restaurant {
  constructor(cooks, dishes, orders) {
    this.cooks = cooks;
    this.dishes = dishes;
    this.orders = orders;
  }

  addOrder(client, dish) {
    if (!orders.has(client)) {
      orders.set(client, []);
    }
    orders.get(client).push(dish);
  }
}
var cooks = new Map([
  ["Пицца", "Виктор"]
  , ["Суши", "Ольга"]
  , ["Десерты", "Дмитрий"]
]);

var dishes = new Map([
  ["Маргарита", "Пицца"]
  , ["Пепперони", "Пицца"]
  , ["Филадельфия", "Суши"]
  , ["Калифорния", "Суши"]
  , ["Тирамису", "Десерты"]
  , ["Чизкейк", "Десерты"]
]);

var orders = new Map();

var client1 = { name: "Алексей" };
var client2 = { name: "Мария" };
var client3 = { name: "Ирина" };


addOrder(client1, "Пепперони");
addOrder(client1, "Тирамису");
addOrder(client2, "Калифорния");
addOrder(client2, "Маргарита");
addOrder(client3, "Чизкейк");

(() => {
  var restaurant = document.createElement('div');
  var cooksList = document.createElement('ul');
  var dishesList = document.createElement('ul');
  var ordersList = document.createElement('ul');

  app.appendChild(restaurant);
  restaurant.appendChild(cooksList);
  restaurant.appendChild(dishesList);
  restaurant.appendChild(ordersList);

  (() => {
    for (var [specialization, cook] of cooks) {
      var li = document.createElement('li');
      li.innerText = `${cook} - ${specialization}`;
      cooksList.appendChild(li);
    }
  })()

  ;(() => {
    for (var [dish, cook] of dishes) {
      var li = document.createElement('li');
      li.innerText = `${dish} - ${cook}`;
      dishesList.appendChild(li);
    }
  })()

  ;(() => {
    for (var [client, dishes] of orders) {
      var li = document.createElement('li')
      li.innerText = `${client.name}: ${dishes.join(', ')}`;
      ordersList.appendChild(li);
    }
  })()
})()
