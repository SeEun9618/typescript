import React from "react";

// 숫자 열거형
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Response {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response): void {
    // ...
}

respond("Hello World", Response.Yes)


// 문자 열거형
enum Direction2 {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}


// 이종 열거형
// 숫자와 문자를 섞어서 사용할 수 있지만 굳이 이렇게 할 이유는 없음.
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}