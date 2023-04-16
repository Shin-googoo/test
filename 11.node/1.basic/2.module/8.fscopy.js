/*
 파일 copy 
   텍스트 단위
      readFile->비동기,동기->readFileSync
      writeFile->비동기,동기->writeFileSync
   스트림 단위
      createReadStream(불러올 파일명,옵션)
      createWriteStream(생성할 파일명,옵션)
*/
var fs=require('fs');
var inname='./textfile.txt';//존재하는 파일
var outname='./output.txt';//존재X

//기존에 파일이 존재했을때 어떻게 처리? 1.존재유무체크할 파일명,2.콜백함수로처리
fs.exists(outname,function(exists){
    if(exists){//존재한다면->삭제하고 다시 복사
      //삭제->unlink(1.삭제시킬 파일명,2.콜백함수)
      fs.unlink(outname,function(error){
          //if(error) throws error;//예외처리
          console.log('기존파일['+outname+']이 삭제됨!');
      });
    }
    var infile=fs.createReadStream(inname,{flags:'r'});
    var outfile=fs.createWriteStream(outname,{flags:'w'});
    //스트림+스트림->브리지 역할->pipe()
    infile.pipe(outfile);//복사한다.
    console.log('파일복사['+inname+']->['+outname+']');
})
//node 8.fscopy.js