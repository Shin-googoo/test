/*
  node/config/db.js,,,,,
  config
     db.js

형식)
     module.exports.불러다 사용할함수명=function(~){
         기능
     }
*/
module.exports.example=function(req,res){
    console.log('This is sample!!');
};

module.exports.sum=function(su1,su2){
    console.log('%d+%d=%d',su1,su2,su1+su2);
}


