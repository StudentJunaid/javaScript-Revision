// Array

// const array = [1,2,3,4,5,6]
// const array1 = ["Jerry","Berry","Cherry","Herry"]

// console.log(array1[3])

// const MyArry = new Array(1,2,3,4,5,6)

// console.log(MyArry[4])

// Array Method

// MyArry.push(7)
// MyArry.push(8)
// MyArry.pop()


// MyArry.unshift(9) 
// MyArry.shift()
// console.log(MyArry)


// console.log(MyArry.includes(9))
// console.log(MyArry.indexOf(3))
// console.log(MyArry.indexOf(19))

// const newArr = MyArry.join()
// console.log(MyArry)
// console.log(newArr)
// console.log(typeof newArr) // string

// Slice , Splice

// console.log("A ", MyArry)

// const myn1 = MyArry.slice(1,4) // it will not count 4 
// console.log(myn1)

// console.log("B ", MyArry); // in slice it will return same Array

// const myn2 = MyArry.splice(1,4) // it will count 4 also
// console.log(myn2)
// console.log("C ", MyArry);  // in Splice Array will be changed



// *************************************** Array Part 02 ******************************************************

const marval_hero = ["thor","Ironmen","spiderman","MyWomen"]
const dc_heroes = ["thor","flash","batman"]

// marval_hero.push(dc_heroes)

// console.log(marval_hero)
// console.log(marval_hero[3][2])

// const allhero = marval_hero.concat(dc_heroes)
// console.log(allhero)


// Spred Operators
// const all_new_hero = [...marval_hero, ...dc_heroes]
// console.log(all_new_hero);

// const anotherArray = [1,2,3,[3,4,6],7,[6,7,[4,5]]]

// const realanotherArray = anotherArray.flat(Infinity)
// console.log(realanotherArray)

// console.log(Array.isArray("Jerry"))
// console.log(Array.from("Jerry"))
// console.log(Array.from({name : "Jerry"})) // interesting

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1,score2,score3))