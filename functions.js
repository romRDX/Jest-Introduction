const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2, // +1
    isNull: ()=> null, // unfedined
    checkValue: (x)=> x,
    createUser: ()=> {
        const user = { firstName: 'Brad' }
        user['lastName'] = "Traversy";
        return user;
    },
    fetchUser: ()=> axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err = 'error'),
    reverseString: (string)=> string.split('').reverse().join('')
}

module.exports = functions;