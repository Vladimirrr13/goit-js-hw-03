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




/* --------------------------------- TASK 2 --------------------------------- */

/*  Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

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
Значение переменной aptTags это массив строк ["premium", "promoted", "top"]  */
