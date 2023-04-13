import React from "react";

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");

// error
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length); // 오류: T에는 .length 가 없음.
//     return arg;
// }

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;


interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity2: GenericIdentityFn<number> = identity3;

// 제네릭 제약조건
interface Lengthwise {
    length: number;
}

function loggingIdentity3<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // 이제 .length 프로퍼티가 있는 것을 알기 때문에 더 이상 오류가 발생하지 않는다.
    return arg;
}
// error
// loggingIdentity3(3); // number는 .length 프로퍼티가 없다.

loggingIdentity3({length: 10, value: 3});
