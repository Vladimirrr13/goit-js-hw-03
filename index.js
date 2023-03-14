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
