const cars = ["Tesla", "Benz", "Range"]
for (let j = 0; j < cars.length; j++){
 const ans = cars[j]
 console.log(`${ans}!`)
}
console.log(cars)

//How to get 1 to 1000
const numb = []
for (let a = 1; a <=1000; a++){
 const result = [a]
 console.log(`${result}`)
 numb.push(a)
}
console.log(numb);

// Example
const numArr = [2,4,6,8];

// using array method (.map)
const result = numArr.map((anyValue) => anyValue * 2);
console.log(result);

// using loop
for(let a = 0; a<numArr.length; a++){
 console.log(numArr[a])
 const num = numArr[a] * 2
 console.log(num);
}

const oddArr =[];
const evenArr =[];
const anyNum = [];
for(let i = 1; i <= 1000; i++){
 if(i== 9){anyNum.push(i)}
 if(i%2 === 0) {
  evenArr.push(i)
 }else{
  oddArr.push(i)
 }
}
console.log(oddArr);
console.log(evenArr);
console.log(anyNum);

const x = ["boy", "girl"]
for(a = 0; a < x.length; a++){
console.log(x[a]);
}