
import React from 'react';
//함수형 컴포넌트 작성(화면 출력)
import queryString from 'query-string';

const About=({location,match})=>{
  //추가
  const query=queryString.parse(location.search)//url경로 분석
  console.log(query)

    return(
      <div>
         <h2>About {match.params.name}</h2>
      </div>
    )
}
export default About;