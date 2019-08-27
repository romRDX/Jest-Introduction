const functions = require('./functions');

const initTests = () => console.log('Initializing test...')
const finishTests = () => console.log('finishing test...')

// beforeEach(() => initTests());
// afterEach(()=> finishTests());

// beforeAll(() => initTests());
// afterAll(()=> finishTests());

const nameCheck = ()=> console.log('Checking name...');

describe('Checking names...', ()=>{
    beforeEach(()=> nameCheck());

    test("User is Jeff", ()=>{
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test("User is Karen", ()=>{
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

test('Add 2 + 2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4);
});

test('Add 2 + 2 to equal 4', ()=>{
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', ()=>{
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', ()=>{
    expect(functions.checkValue(null)).toBeFalsy();
    // .not.tobefalsy
    // undefined, 2
});

//* tobe is for primitive types

test('User should be Brad Traversy', ()=>{
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    });
    
});

test('Should be under 1600', ()=>{

    const load1 = 800;
    const load2 = 800; 
    expect(load1+load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in Team', ()=>{
    expect('team').not.toMatch(/I/i);
});

// Array
test("Admin should be in usernames", ()=>{
    usernames = ["jogn",'Karen',"Admin"];

    expect(usernames).toContain('Admin');
});

//async data
// test('User fetched name should be Leanner Graham', ()=>{
//     // expect.assertions(1);
//     functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });


test('reverseString functions exists', ()=>{
    expect(functions.reverseString).toBeDefined();
});

test('String reverses', ()=>{
    expect(functions.reverseString('hello')).toEqual('olleh');
});

// watch in package.json
// "testwatch": "jest --watchAll"