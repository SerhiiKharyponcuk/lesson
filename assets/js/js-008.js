"use strict";

window.runTask = function () {

  console.log("========== ДЗ ==========");

  const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

  let string = '';

  for (let i = 0; i < friends.length; i++) {
    string += friends[i];

    if (i < friends.length - 1) {
      string += ', ';
    }
  }

  console.log("Через for:", string);

  const stringJoin = friends.join(', ');
  console.log("Через join():", stringJoin);


  const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

  console.log("Початковий масив:", cards);


  const cardToRemove = 'Карточка-3';
  const removeIndex = cards.indexOf(cardToRemove);

  if (removeIndex !== -1) {
    cards.splice(removeIndex, 1);
  }

  console.log("Після видалення:", cards);


  const cardToInsert = 'Карточка-6';
  cards.splice(2, 0, cardToInsert);

  console.log("Після додавання:", cards);


  const cardToUpdate = 'Карточка-4';
  const updateIndex = cards.indexOf(cardToUpdate);

  if (updateIndex !== -1) {
    cards.splice(updateIndex, 1, 'Оновлена-4');
  }

  console.log("Після оновлення:", cards);

};