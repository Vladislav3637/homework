/* 1-е задание */
console.log('1-е задание:');
const me = [
    {
        firstName: 'Влад',
        age: 27,
        profession: 'программист',
        cityOfResidence: 'Москва',
        favoriteHobby: "саморазвитие"
    }
]
console.log(`Имя: ${me[0].firstName}; возраст: ${me[0].age}; профессия: ${me[0].profession}; город: ${me[0].cityOfResidence}; хобби: ${me[0].favoriteHobby}`);

    /* 2-е задание */
    console.log(' ')
console.log('2-е задание:')
const obj = {
    greeting(name) {
        return `Hello "${name}"`;
    }
};
console.log(obj.greeting("John"));

/* 3-е задание */
console.log(' ')
console.log('3-е задание:')
const users = [
    {
        name: 'Alex',
        age: 21,
        isAdmin: false
    },
    {
        name: 'John',
        age: 23,
        isAdmin: true
    },
    {
        name: 'Ann',
        age: 21,
        isAdmin: true
    },
    {
        name: 'Mary',
        age: 27,
        isAdmin: false
    },
    {
        name: 'Grace',
        age: 28,
        isAdmin: false
    }
]

let numberNoAdmin = 0
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        numberNoAdmin++
    }
}

console.log(`Количество обычных пользователей: ${numberNoAdmin}`)

