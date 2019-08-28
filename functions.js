
const functions = {
    add: (num1, num2) => num1 + num2, // +1
    isNull: ()=> null, // unfedined
    checkValue: (x)=> x,
    createUser: ()=> {
        const user = { firstName: 'Brad' }
        user['lastName'] = "Traversy";
        return user;
    }
}

module.exports = functions;
