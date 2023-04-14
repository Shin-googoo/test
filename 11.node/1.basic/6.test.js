/*
사용자 정의 모듈(~.js)
모듈->공통적으로 사용하는 기능(함수),속성(변수)를 미리 정의해
      놓은 파일
모듈을 생성->따로 자바스크립트 파일을 생성

//함수를 작성
형식)exports.함수명=function(~){
    기능을 부여
}
*/
exports.abs=function(number){
    if(0 < number){
        return number;
    }else{
        return -number;
    }
}
//원의 넓이
exports.circleArea=function(radius){
    return radius*radius*Math.PI;
}