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