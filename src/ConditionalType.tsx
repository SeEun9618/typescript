import React from "react";

interface StringContainer {
    value: string;
    format(): string;
    split(): string[];
}

interface NumberContainer {
    value: number;
    format(): number;
    split(): number[];
}

type Item1<T> = {
    id: T;
    container: any;
};

type Item2<T> = {
    id: T;
    container: T extends string? StringContainer : NumberContainer;
};
// error
// const item2: Item2<string> = {
//     id: 'seeun',
//     container: null,
// };

type Item3<T> = {
    id: T extends string | number ? T : never;
    container: T extends string
        ? StringContainer
        : T extends number
            ? NumberContainer
            : never;
};
// error
// const item3: Item3<boolean> = {
//     id: true;
//     container: null,
// };

type ArrayFilter<T> = T extends any[] ? T : never;

type StringOrNumbers = ArrayFilter<string | number | string[] | number[]>;
// string[] | number[]

type Flatten<T> = T extends any[]
    ? T[number]
    : T extends object
        ? T[keyof T]
        : T;

const person = {
    name: 'seeun',
    age: 28,
};

type SomeObjectFlattened = Flatten<typeof person>;
// 1. keyof T -> 'name' | 'age'
// 2. T['name' | 'age'] -> T['name'] | T['age'] -> string | age