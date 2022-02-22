// method, func 선언 예전 방식
// function test(p1, p2) {
//     return p1 + p2
    // this 가 const func와 다르다 // question question question question question question
// }

// let result = test(5,5)
// console.log(result)


const plus = (p1, p2) =>{
    console.log(this)
    return p1 + p2;
}
// arrow func 로 minus / multi / div 만들기
const minus = (p1, p2) => {
    return p1-p2;
}
const multi = (p1, p2) => {
    return p1*p2;
}
const div = (p1, p2) => {
    return p1/p2;
}
let divvv = (p1) => {
    return (p1 + 10);
}
// let 과 const 함수의 차이는?? //  question question question question question question
console.log(plus(5,4))
console.log(div(10,2))
console.log(divvv(10))