let car = {
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

//console.log(car.name + "의 마력은" + car.ph + "입니다")
console.log(car.start)
car.start();