/* --------------------------------- TASK 1 --------------------------------- */

/* Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

imgUrl - фотография, значение "https://via.placeholder.com/640x480";
descr - описание, значение "Spacious apartment in the city center";
rating - рейтинг, значение 4;
price - цена, значение 2153;
tags - метаинформация, массив ["premium", "promoted", "top"].
Объявлена переменная apartment
Значение переменной apartment это объект
В объекте есть свойство imgUrl
Значение свойства imgUrl это строка "https://via.placeholder.com/640x480"
В объекте есть свойство descr
Значение свойства descr это строка "Spacious apartment in the city center"
В объекте есть свойство rating
Значение свойства rating это число 4
В объекте есть свойство price
Значение свойства price это число 2153
В объекте есть свойство tags
Значение свойства tags это массив ["premium", "promoted", "top"] */


/* 

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4, 
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

*/




/*------------------------- TASK 18 -------------------------*/

/* 

Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

Объявлена функция getProductPrice(productName).
Вызов getProductPrice("Radar") возвращает 1300.
Вызов getProductPrice("Grip") возвращает 1200.
Вызов getProductPrice("Scanner") возвращает 2700.
Вызов getProductPrice("Droid") возвращает 400.
Вызов getProductPrice("Engine") возвращает null.

*/

/* 

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));

*/



/* --------------------------------- TASK 2 --------------------------------- */

/* Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

name - имя владельца, значение "Henry";
phone - телефон, значение "982-126-1588";
email - почта, значение "henry.carter@aptmail.com".
Объявлена переменная apartment
Значение переменной apartment это объект
У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
В объекте apartment есть свойство owner
Значение свойства owner это объект
В объекте owner есть свойство name
Значение свойства name это "Henry"
В объекте owner есть свойство phone
Значение свойства phone это "982-126-1588"
В объекте owner есть свойствао email
Значение свойства email это "henry.carter@aptmail.com" */

/* 

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  }
};

*/




/*------------------------- TASK 3 -------------------------*/

/* 

Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.
Объявлена переменная apartment
Значение переменной apartment это объект
У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
Объявлена переменная aptRating
Значение переменной aptRating это число 4
Объявлена переменная aptDescr
Значение переменной aptDescr это строка "Spacious apartment in the city center"
Объявлена переменная aptPrice
Значение переменной aptPrice это число 2153
Объявлена переменная aptTags
Значение переменной aptTags это массив строк ["premium", "promoted", "top"]

*/

/* 

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line


*/



/*------------------------- TASK 4 -------------------------*/

/* 

Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

ownerName - имя владельца;
ownerPhone - телефон владельца;
ownerEmail - почта владельца;
numberOfTags - количество элементов массива в свойстве tags;
firstTag - первый элемент массива в свойстве tags;
lastTag - последний элемент массива в свойстве tags.
Объявлена переменная apartment с помощью const
Значение переменной apartment это объект
Объявлена переменная ownerName с помощью const
Значение переменной ownerName это строка "Henry"
Объявлена переменная ownerPhone с помощью const
Значение переменной ownerPhone это "982-126-1588"
Объявлена переменная ownerEmail с помощью const
Значение переменной ownerEmail это "henry.carter@aptmail.com"
Объявлена переменная numberOfTags с помощью const
Значение переменной numberOfTags это 3
Объявлена переменная firstTag с помощью const
Значение переменной firstTag это "premium"
Объявлена переменная lastTag с помощью const
Значение переменной lastTag это "top"

*/

/* 

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

*/



/*------------------------- TASK 5 -------------------------*/

/* 

Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

aptRating - рейтинг;
aptDescr - описание;
aptPrice - цена;
aptTags - теги.
Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная aptRating
Значение переменной aptRating это 4
Объявлена переменная aptDescr
Значение переменной aptDescr это "Spacious apartment in the city center"
Объявлена переменная aptPrice
Значение переменной aptPrice это 2153
Объявлена переменная aptTags
Значение переменной aptTags это ["premium", "promoted", "top"]

*/

/* 

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line

*/




/*------------------------- TASK 6 -------------------------*/

/* 

Дополни код обновив значения свойств объекта apartment:

цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на "Henry Sibola";
массив тегов в свойстве tags добавив в конец строку "trusted".
Объявлена переменная apartment
Значение переменной apartment это объект
Значение вложенного свойства price это число 5000
Значение вложенного свойства rating это число 4.7
Значение вложенного свойства name это строка "Henry Sibola"
Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]

*/

/* 

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};


apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted"); 

*/




/*------------------------- TASK 7 -------------------------*/

/* 

Добавь объекту apartment несколько новых свойств:

area - площадь в квадратных метрах, число 60;
rooms - количество комнат, число 3;
location - местоположение квартиры, обьект со следующими вложенными свойствами;
country - страна, строка "Jamaica";
city - город, строка "Kingston".
Объявлена переменная apartment
Значение переменной apartment это объект
Значение вложенного свойства area это число 60
Значение вложенного свойства rooms это число 3
Значение вложенного свойства location это объект
Значение вложенного свойства location.country это строка "Jamaica"
Значение вложенного свойства location.city это строка "Kingston"

*/

/* 

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;

apartment.location = {
  country: "Jamaica",
  city: "Kingston",
}

*/



/*------------------------- TASK 8 -------------------------*/

/* 

Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

Объявлена переменная product
Значение переменной product это объект
Значение вложенного свойства name это строка "Repair Droid"
Значение вложенного свойства price это число 2500
Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]

*/

/* 

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

*/




/*------------------------- TASK 9 -------------------------*/

/* 

Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

Объявлена переменная credentials
Значение переменной credentials это объект
В объекте credentials есть свойство email
Значение вложенного свойства email это строка "henry.carter@aptmail.com"
В объекте credentials есть свойство password
Значение вложенного свойства password это строка "jqueryismyjam"

*/

/* 

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
[emailInputName]:"henry.carter@aptmail.com",
[passwordInputName]:"jqueryismyjam",
};

*/



/*------------------------- TASK 10 -------------------------*/

/* 

Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная keys
Значение переменной keys это массив ["descr", "rating", "price"]
Объявлена переменная values
Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

*/

/* 

const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  
  const keys = [];
  const values = [];
  
  // Change code below this line
  
  for (let key in apartment) {
    keys.push(key) // Добавление в массив keys ключа из обекта apartment
    values.push(apartment[key]) // Добавление в массив values значения по ключу из обекта apartment
  };
    console.log(values); // вывод массива values
    console.log(keys)

*/



/*------------------------- TASK 11 -------------------------*/

/* 

Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

Объявлена переменная advert.
Значение переменной advert это объект.
Объявлена переменная apartment.
Значение переменной apartment это объект.
Объявлена переменная keys.
Значение переменной keys это массив ["descr", "rating", "price"].
Объявлена переменная values.
Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].

*/

/* 

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  
if (apartment.hasOwnProperty(key)) {
    keys.push(key);
  values.push(apartment[key]);
}
};

*/


/*------------------------- TASK 12 -------------------------*/

/* 

Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

Объявлена функция countProps(object)
Вызов countProps({}) возвращает 0
Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
Функция подсчитывает только собственные свойства объекта

*/

/* 

function countProps(object) {
  let propCount = 0;

  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      propCount += 1;
    }
  }

  return propCount;
}

console.log(countProps({}));
console.log(countProps({name: "Mango", age: 2}));
console.log(countProps({mail: "poly@mail.com", isOnline: true, score: 500}));

*/



/*------------------------- TASK 13 -------------------------*/

/* 

Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

Объявлена переменная apartment.
Значение переменной apartment это объект.
Объявлена переменная keys.
Значение переменной keys это массив ["descr", "rating", "price"].
Значение переменной keys получено с помощью метода Object.keys().
Объявлена переменная values.
Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
Значение переменной values получено с помощью цикла for...of.

*/

/* 

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = [];

for (let key of keys) {
  values.push(apartment[key]);
}


console.log(keys);
console.log(values);

*/




*------------------------- TASK 14 -------------------------*/

/* 

Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

Объявлена функция countProps(object)
Вызов countProps({}) возвращает 0
Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
Функция подсчитывает только собственные свойства объекта
Функция использует метод Object.keys() и, возможно, цикл for...of

*/

/* 

function countProps(object) {

  return Object.keys(object).length;
}

*/




/*------------------------- TASK 15 -------------------------*/

/* 

Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

Объявлена переменная apartment
Значение переменной apartment это объект
Объявлена переменная keys
Значение переменной keys это массив ["descr", "rating", "price"]
Объявлена переменная values
Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
Для получения массива ключей объекта apartment используется Object.keys()
Для получения массива значений объекта apartment используется Object.values()

*/

/* 

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);


*/




/*------------------------- TASK 16 -------------------------*/

/* 

Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

Объявлена функция countTotalSalary(salaries)
Вызов countTotalSalary({}) возвращает 0
Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
Функция учитывает только собственные свойства объекта

*/

/* 

function countTotalSalary(salaries) {
  let totalSalary = 0;

  for (const key in salaries) {
    // Проверяем, чтобы свойство было собственным
    if (salaries.hasOwnProperty(key)) {
      totalSalary += salaries[key];
    }
  }

  return totalSalary;
}
*/




/*------------------------- TASK 17 -------------------------*/

/* 

Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

Объявлена переменная colors
Значение переменной colors это массив
Объявлена переменная hexColors
Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
Объявлена переменная rgbColors
Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

*/

/* 

const colors = [
  { name: "red", hex: "#f44336", rgb: "244,67,54" },
  { name: "blue", hex: "#2196f3", rgb: "33,150,243" },
  { name: "green", hex: "#4caf50", rgb: "76,175,80" },
  { name: "yellow", hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors );
console.log(rgbColors);
console.log();

*/
