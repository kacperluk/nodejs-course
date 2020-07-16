// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Florida'
}
console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}


const { label: productLabel, stock, salePrice } = product


const transaction = (type, { label, stock }) => { label, stock }

transaction('order', product)