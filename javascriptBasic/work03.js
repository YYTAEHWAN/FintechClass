let car1 = {
    name : "sonata",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () =>{
        console.log("engine stop");
    }
    // 이렇게 함수를 start라는 변수에 집어넣어서 객체로 볼 수도 있다
    // 그렇기 때문에 car.start 도 사용할 수 있음
    // 그러나 메소드로 사용해야만 할 때가 있기 때문에 car.start() 로 사용하는 습관을 들이는 게 좋다
}

let car2 = {
    name : "bmw",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () =>{
        console.log("engine stop");
    }
    // 이렇게 함수를 start라는 변수에 집어넣어서 객체로 볼 수도 있다
    // 그렇기 때문에 car.start 도 사용할 수 있음
    // 그러나 메소드로 사용해야만 할 때가 있기 때문에 car.start() 로 사용하는 습관을 들이는 게 좋다
}
let car3 = {
    name : "matiz",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () =>{
        console.log("engine stop");
    }
    // 이렇게 함수를 start라는 변수에 집어넣어서 객체로 볼 수도 있다
    // 그렇기 때문에 car.start 도 사용할 수 있음
    // 그러나 메소드로 사용해야만 할 때가 있기 때문에 car.start() 로 사용하는 습관을 들이는 게 좋다
}

// let car1.name = "bungbung"
// let car2 = "bmw"
// let car3 = "matiz"

let cars = [car1, car2, car3];

// for (car of cars) {
//     if (car == "matiz") {
//         console.log("마티즈!")
//     }
// }

// map이란 배열의 기능이다
// 해당 배열의 첫번째 엘리먼트를 car 매개변수로 받는다

cars.map((car) => {
    console.log(car)
    if (car.name == "matiz") {
        console.log("마티즈 발견!")
    }
});

// 자바로는
// for(String a : StringArray) 이것과 같음
