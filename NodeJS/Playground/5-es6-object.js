//Object property shorthand

const name = 'Gia Le'
const userAge = 20

const user = {
    name,
    age:userAge,
    location:'Viet Nam'
}
console.log(user)

//Object destructuring
const product = {
    label: 'Ref notebook',
    price: 3,
    stock:201,
    salePrice: undefined
}
// const label= product.label
// const price = product.price

// const {label,price:priceProduct,stock,salePrice, rating = 5} = product

// console.log(label)
// console.log(priceProduct)
// console.log(rating)

const transaction = (type, {label,price}) => {
    console.log(type,label,price)
}
transaction('order', product)