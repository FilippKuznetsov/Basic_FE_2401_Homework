/* Создать в html форму с тремя инпутами 
(имя, фамилия, возраст). Написать скрипт, который 
при отправке формы выводит собранные данные в консоль. */

/*   const mainDiv=document.querySelector(".main") */

const formEl = document.querySelector("form");
const nameEl = document.querySelector("#firstName");
const lastNameEl = document.querySelector("#lastName");
const ageEl = document.querySelector("#age");

const usersDiv = document.querySelector(".user");

const btnEl = document.querySelector(".btn");

formEl.append(nameEl, lastNameEl, ageEl);

/* mainDiv.append(formEl,btnEl); */

/* Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта. */

const users = [];

function createUserCard(nameEl, lastNameEl, ageEl) {
  const pFirstName = document.createElement("p");
  pFirstName.innerText = `Name: ${nameEl}`;

  const pLastName = document.createElement("p");
  pLastName.innerText = `Last name: ${lastNameEl}`;

  const pAge = document.createElement("p");
  pAge.innerText = `Age: ${ageEl}`;

  const userCard = document.createElement("div");
  userCard.classList.add("card");

  userCard.append(pFirstName, pLastName, pAge);
  return userCard;
}

function rerender() {
  usersDiv.innerHTML = "";

  for (let index = 0; index < users.length; index++) {
        const { name, lastName, age } = users[index];
        const cardUser = createUserCard(name, lastName, age);

        cardUser.addEventListener("dblclick", function () {
        users.splice(index, 1);
        rerender();
        }); 
        usersDiv.append(cardUser);
  }
}

/* Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.
 */

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const userCardObj = {
    name: nameEl.value,
    lastName: lastNameEl.value,
    age: ageEl.value,
  };
  userCardObj.name === "" ||
  userCardObj.lastName === "" ||
  userCardObj.age === ""
    ? alert("The value is Empty")
    : users.push(userCardObj);

  console.log(users);
  rerender();
  formEl.reset();
});

/* Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender. */

