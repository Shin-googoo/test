var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
7.classextend.ts -> 상속(1.개발시간 단축,2.소스의 재사용성)
*/
var Animal = /** @class */ (function () {
    function Animal(weight) {
        this._weight = weight; //this는 생략X
    }
    Animal.prototype.weight = function () {
        console.log(this._weight); //this.멤버변수(=속성명)
    };
    Animal.prototype.eat = function () {
        console.log('Animal eat!!');
    };
    return Animal;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    //_weight; //상속
    function Human(weight, language) {
        var _this = _super.call(this, weight) || this;
        _this._language = language;
        return _this;
    }
    //오버라이딩 -> 자식입장에서 부모클래스의 메서드 내용을 변경
    Human.prototype.eat = function () {
        console.log('Human eat!!!');
    };
    Human.prototype.speak = function () {
        console.log("koreans speak ".concat(this._language, " "));
    };
    return Human;
}(Animal));
//형식) const 객체명=new 클래스명(인수1,인수2,,,)
var korean = new Human(70, 'korean');
//객체명.메서드명(~)
korean.weight(); //70
korean.eat();
korean.speak();
//객체명 instanceof 클래스명=>true or false
console.log(korean instanceof Human); //true
console.log(korean instanceof Animal); //true
//tsc 7.classextend.ts -> node 7.classextend.js
