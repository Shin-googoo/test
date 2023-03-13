"use strict";
exports.__esModule = true;
/*
10.main.ts
형식) import {불러올 클래스명,상수,함수명,,,} from '경로 및 파일명'
    import {pi,square,Person3} from './9.lib';
형식2) import * as 별칭명 from '경로 및 파일명'
*/
//import {pi,square,Person3} from './9.lib'; //확장자 생략
var lib = require("./9.lib");
console.log(lib.pi); //별침명.불러올 대상자
console.log(lib.square(20)); //40
console.log(new lib.Person3('Lee'));
//const 객체명 = new 클래스명(매개변수명,,,)
//tsc 10.main.ts -> node 10.main.js
