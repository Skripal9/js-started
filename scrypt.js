let userInfo = {
    name: "Jim",
    age: 77,
    city: "London",
    id: 3,
};

console.log(userInfo);
userInfo.language = "English"
console.log(userInfo);

let count = 0;

for (let key in userInfo) {
    count++;
} if (count >= 5) {
    console.log("Более или равно 5");
}

for (let key in userInfo) {
    console.log(key)
    console.log(userInfo[key])
}

let userInfoCopy = Object.assign({}, userInfo);
console.log(userInfoCopy);

function objectUserInfoCopy (userInfoCopy) {
    if(userInfoCopy = userInfoCopy)  {
    console.log("Это просто функция");
    }
}

objectUserInfoCopy();
console.log(objectUserInfoCopy(userInfoCopy));

Object.freeze(userInfoCopy);
userInfoCopy.age = 34;
console.log(userInfoCopy.age);

/* 
1. Создайте объект со свойствами: имя - Jim, age - 77, city - London, id - 3 
2. Выведите в консоль его ключи в виде массива. 
3. Добавьте новое свойство, language - english.
4. Выведите в консоль его значения в виде массива. 
5. Выведите в консоль "Более или равно 5", если длина объекта более или равно 5. 
6. Выведите в консоль свойства объекта в виде "ключ" - "значение". 
7. Создайте объект, который является копией исходного объекта. 
8. Добавьте в скопированный объект функцию, которая выводит в консоль "Это просто функция". 
9. Запретите изменять скопированный объект и проверьте это. */