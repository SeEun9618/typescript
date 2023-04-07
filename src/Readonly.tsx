import React from "react";

const weekdays: ReadonlyArray<string> = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
// error
// weekdays[0]; readonly string[]


interface Person {
    name: string;
    age: number;
}

type ReadonlyPerson = Readonly<Person>;

const person: ReadonlyPerson = Object.freeze<Person>({
    name: 'Seeun',
    age: 28,
});
// error
// person.name = 'Hello';
// person.age = '30';

// readonly keyword in return type

function freturn1(): string[] {
    return ['readonly'];
}

const fr1 = freturn1();
fr1[0] = 'hello';

function freturn2(): readonly string[] {
    return ['readonly'];
}

const fr2 = freturn2();
// error
// fr2[0] = 'hello';