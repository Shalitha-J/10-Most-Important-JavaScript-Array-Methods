const items = [
    {item: "milk", price: 400},
    {item: "pen", price: 40},
    {item: "pencil", price: 30},
    {item: "internet", price: 1000},
    {item: "rice", price: 500},
    {item: "spray", price: 700},
    {item: "vaporizer", price: 630}
]

const people = [
    {name: "Shalitha", age: 23, success: false},
    {name: "Dovin", age: 23, success: true},
    {name: "Pasidhu", age: 23, success: true},
    {name: "Shashini", age: 22, success: true},
    {name: "Umadha", age: 23, success: true}
]

const number = [1,2,3,4,5] 

console.log(items, people)
console.log("____________________________________________________________________________________")


const filterOver500Items = items.filter((item) => {
   return item.price >= 500
})
const filterBellow500Items = items.filter((item) => {
   return item.price <= 500
})
console.log("filter method gives 500 or above array and 500 0r bellow array in bellow")

console.log(filterOver500Items )
console.log(filterBellow500Items)

console.log("____________________________________________________________________________________")


console.log("map method gives a new array of a selected item of a array")

const mapItemPrice = items.map((item) => {
    return item.price
}) 
const peopleNames = people.map((person) => {
    return person.name
}) 
console.log(mapItemPrice)
console.log(peopleNames)


console.log("____________________________________________________________________________________")

console.log("find method gives you the item of the array you want")
const itemFound = items.find((item) => {
   return item.item === "milk" 
})
console.log(itemFound)



console.log("____________________________________________________________________________________")
console.log('forEach method')

people.forEach((person) => {
    console.log('Hi ' + person.name)
})



console.log("____________________________________________________________________________________")
console.log('reduce method')
const totalprice = items.reduce((currentTotal, item) =>{
        return item.price + currentTotal
}, 0)
console.log('total price is', totalprice)




console.log("____________________________________________________________________________________")

console.log("some method")
const isSomeHigh = items.some((item) => {
    return item.price === 400
})
console.log(isSomeHigh)



console.log("____________________________________________________________________________________")

console.log("every method")
const isEveryHigh = items.every((item) => {
    return item.price > 400
})
console.log(isEveryHigh)


console.log("____________________________________________________________________________________")
console.log("array slice method returns new array does not Mutate the original array")
const sliceAge = people.slice(3, 4)
console.log(sliceAge)
console.log(people)


console.log("____________________________________________________________________________________")
console.log("array include returns a true or false")
const doseIncludes = number.includes(4)
console.log(doseIncludes)


console.log("____________________________________________________________________________________")
console.log('array splice method mutates the original array')
console.log('original array before', number)
const splicedArray = number.splice(1, 3, 1000,500)
console.log(splicedArray)
console.log('original array after', number)
