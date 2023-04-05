import React from "react";

interface personAge {
    age: number;
}

function logAge(obj: personAge) {
    console.log(obj.age);
}
// 인터페이스를 인자로 받아 사용할 때 항상 인터페이스의 속성 갯수와 인자로 받는 객체의 속성 갯수를 일치시키지 않아도 된다.
let person = { name: 'Seeun', age: 27 };
logAge(person);


interface CraftBeer {
    // 읽기 전용 속성
    readonly brand: string;
}

let arr: ReadonlyArray<number> = [1, 2, 3, 4];
// arr.splice(0, 1); error
// arr.push(5); error


interface Craft {
    brand?: string;
    [propName: string]: any;
}