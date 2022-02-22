let car01 = "sonata";
let car02 = "bmw";
let car03 = "tesla";

let cars = [car01, car02, 392];
//console.log(cars);

//in Java
//String [] cars = new array[3];
//ArrayList<String> stringArray = new ArrayList<String>

// arrayList를 활용하여 데이터를 표현하고
// object형태로 데이터를 받아올 것임
// 그 데이터를 다음에 배우는 반복문을 통해 다뤄볼 것임
//console.log(cars[1])

for (car of cars) {
    console.log(car)
}

cars.map((car) => {
    console.error(car);
});