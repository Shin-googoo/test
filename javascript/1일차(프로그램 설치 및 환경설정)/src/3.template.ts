/*
백틱문자열 'a' 'ab' "a", "ab" 여러문장 => +줄바꿈
          태그의 <pre>와 동일한 기능
  ₩₩
*/
const template = `템플릿 리터럴은
'작은 따옴표와' 와 "따옴표"를
혼용해서 사용이 가능합니다.`;
console.log(template);
const template2=
`
  <ul class="nav-item>
    <li><a href="#home"></li>
    <li><a href="#home"></li>
    <li><a href="#home"></li>
    <li><a href="#home"></li>
  </ul>
`