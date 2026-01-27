// Section 1: Array Basics

// Q1
let myInfo = ['Fahad', 20, 'Hyderabad', true]

// Q2
console.log(myInfo[1])

// Q3
myInfo[2] = 'Delhi'
console.log(myInfo)

// Q4
let colors = ['red', 'blue', 'green']
colors.push('yellow')
colors.push('purple')
console.log(colors)

// Q5
let numbers = [5, 10, 15, 20, 25]
let removed = numbers.pop()
console.log(numbers)
console.log(removed)

// Q6
// First output: 4
// Second output: 40
let arrQ6 = [10, 20, 30, 40]
console.log(arrQ6.length)
console.log(arrQ6[arrQ6.length - 1])

// Q7
let fruitsQ7 = ['apple', 'banana', 'mango']
let removedFruit = fruitsQ7.shift()
console.log(fruitsQ7)
console.log(removedFruit)

// Q8
let animals = ['dog', 'cat']
animals.unshift('lion', 'tiger')
console.log(animals)

// Q9
let nums = [1, 2, 3, 4, 5]
nums[nums.length] = 6
console.log(nums)

// Q10
// Array: ['eraser', 'pen', 'book', 'bag']
// Length: 4
let items = ['pen', 'book', 'bag']
items.push('pencil')
items.pop()
items.unshift('eraser')
console.log(items)
console.log(items.length)


// Section 2: Nested Arrays

// Q11
let myFruits = ['apple', 'banana', 'mango']
let myVeggies = ['carrot', 'potato', 'onion']
let basket = [myFruits, myVeggies]
console.log(basket)

// Q12
console.log(basket[0][1])

// Q13
// First output: 2
// Second output: 3
// Third output: 2
let fruitsQ13 = ['apple', 'mango', 'banana']
let veggiesQ13 = ['tomato', 'potato']
let basketQ13 = [fruitsQ13, veggiesQ13]
console.log(basketQ13.length)
console.log(basketQ13[0].length)
console.log(basketQ13[1].length)

// Q14
let data = [10, 'hello', ['a', 'b', 'c']]
console.log(data[2][1])

// Q15
// First output: ['x','y','z']
// Second output: 'x'
// Third output: 'z'
let arrQ15 = [5, 'test', ['x', 'y', 'z']]
console.log(arrQ15[2])
console.log(arrQ15[2][0])
console.log(arrQ15[2][2])

// Q16
let students = [
    ['Ali', 20, 'Delhi'],
    ['Sara', 22, 'Mumbai'],
    ['John', 21, 'Bangalore']
]
console.log(students[1][2])

// Q17
console.log(students[2][1])

// Q18
let a = [1, 2]
let b = [3, 4]
let nested = [a, b]
let flatArr = nested.flat()
console.log(nested)
console.log(flatArr)

// Q19
// arr1 is nested (2D), arr2 is flat (1D)
let arr1 = [['a', 'b'], ['c', 'd']]
let arr2 = ['a', 'b', 'c', 'd']

// Q20
let table = [
    [1, 2],
    [3, 4],
    [5, 6]
]
console.log(table[1][0])


// Section 3: Reference vs Copy

// Q21
// arr1: [100,20,30]
// arr2: [100,20,30]
let arrA = [10, 20, 30]
let arrB = arrA
arrA[0] = 100
console.log(arrA)
console.log(arrB)

// Q22
// arr1: [5,10,15,20]
// arr2: [5,10,15,20]
let arrC = [5, 10, 15]
let arrD = arrC
arrD.push(20)
console.log(arrC)
console.log(arrD)

// Q23
let original = [1, 2, 3]
let copy = [...original]
copy[0] = 99
console.log(original)
console.log(copy)

// Q24
// arr1[0]: 100
// arr2[0]: 999
let arrE = [100, 200]
let arrF = [...arrE]
arrF[0] = 999
console.log(arrE[0])
console.log(arrF[0])

// Q25
// First output: false
// Second output: true
let arrG = [1, 2, 3]
let arrH = [...arrG]
console.log(arrG == arrH)
console.log(arrG[0] == arrH[0])

// Q26
// Observation: false (different references)
let x = [1, 2, 3]
let y = [1, 2, 3]
console.log(x == y)

// Q27
// Method 1 copies reference
// Method 2 copies values

// Q28
let base = [1, 2]
let refCopy = base
let spreadCopy = [...base]
refCopy.push(3)
console.log(base)
console.log(refCopy)
console.log(spreadCopy)


// Section 4: Object Basics

// Q29
let student = {
    name: 'Fahad',
    age: 20,
    city: 'Hyderabad'
}
console.log(student)

// Q30
console.log(student.name)

// Q31
student.marks = 85
console.log(student)

// Q32
let person = {
    'full name': 'Omer Ahmed'
}
console.log(person['full name'])

// Q33
// { name:'Omer', age:21, city:'Hyderabad' }
const personQ33 = {
    name: 'Omer',
    age: 21
}
personQ33.city = 'Hyderabad'
console.log(personQ33)

// Q34
let car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
}
delete car.year
console.log(car)

// Q35
// john123
// john@example.com
const user = {
    'user name': 'john123',
    'email address': 'john@example.com'
}
console.log(user['user name'])
console.log(user['email address'])

// Q36
let phone = {
    brand: 'Samsung',
    price: 30000,
    color: 'Black'
}
console.log(phone)
phone.price = 25000
console.log(phone)

// Q37
// Because property name has a space

// Q38
let book = {
    title: 'Atomic Habits',
    author: 'James Clear',
    pages: 320,
    isAvailable: true
}
console.log(book)

// Q39
// undefined
const obj = { name: 'Omer' }
console.log(obj.age)

// Q40
let objQ40 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
}
objQ40.f = 6
objQ40.g = 7
objQ40.c = 99
delete objQ40.a
console.log(objQ40)


// Section 5: Combined Challenge

// Q41
let products = [
    { name: 'Laptop', price: 50000, inStock: true },
    { name: 'Phone', price: 30000, inStock: false },
    { name: 'Tablet', price: 20000, inStock: true }
]

// Q42
console.log(products[1].price)

// Q43
let container = {
    numbers: [10, 20, 30]
}
console.log(container.numbers[1])

// Q44
// fruits & basket[0] both become ['apple','mango','banana']
let fruitsQ44 = ['apple', 'mango']
let veggiesQ44 = ['tomato', 'potato']
let basketQ44 = [fruitsQ44, veggiesQ44]
basketQ44[0].push('banana')
console.log(fruitsQ44)
console.log(basketQ44[0])

// Q45
let studentQ45 = {
    name: 'Ali',
    rollNumber: 1,
    marks: [80, 90, 70]
}
let avg =
    (studentQ45.marks[0] +
        studentQ45.marks[1] +
        studentQ45.marks[2]) / 3
console.log(avg)

// Q46
// Observation: false (different object references)
let o1 = { a: 1 }
let o2 = { a: 1 }
console.log(o1 == o2)

// Q47
// arr: [10,2,3]
// length: 3
let arrQ47 = [1, 2, 3]
arrQ47.push(4)
arrQ47[0] = 10
arrQ47.pop()
console.log(arrQ47)
console.log(arrQ47.length)

// Q48
let school = {
    name: 'ABC School',
    address: {
        city: 'Hyderabad',
        pincode: 500001
    },
    students: ['Ali', 'Sara']
}
console.log(school.address.city)

// Q49
// Case 1 copies reference
// Case 2 creates a new object

// Q50
let people = [
    { name: 'Ali', hobbies: ['reading', 'gaming', 'coding'] },
    { name: 'Sara', hobbies: ['painting', 'music'] }
]
console.log(people[0].hobbies[1])