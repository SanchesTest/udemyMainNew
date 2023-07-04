const obj = {
    1: 'j',
    '2': 'male',
    v: 1,
    abc: {
        def: {
           
        }
    }
};
let r = [1, 'tr', {}, [1,2]];

let b = 'name';
obj[b] = 'new';

console.log(obj[b]);

let rri = 0;

const storeName = 'testName';
const storeDescription = {
    budget: 10000,
    employees: ['John', 'Land', 'Yozef'],
    products: {
        'orange': 10,
        'banana': 5
    },
    open: true
};

console.log(storeDescription.products['banana'])