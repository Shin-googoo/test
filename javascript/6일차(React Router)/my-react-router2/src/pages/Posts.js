
import React from 'react';
//링크를 걸기위해서 <Link>
import {Link,Route} from 'react-router-dom';
//추가
import {Post} from 'pages';
//App.js->Posts.js->Post.js
const Posts=({match})=>{ //()=>(출력내용)
    return(
      <div>
          <h2>Post List</h2>
         <ul>
             <li><Link to={`${match.url}/1`}>Post #1</Link></li>
             <li><Link to={`${match.url}/2`}>Post #2</Link></li>
             <li><Link to={`${match.url}/3`}>Post #3</Link></li>
             <li><Link to={`${match.url}/4`}>Post #4</Link></li>
         </ul> {/* render={화살표함수를 이용해서 출력문을 작성}  */}
         <Route exact path={match.url} 
                render={()=>(<h3>Please select any Post</h3>)} />
         <Route path={`${match.url}/:id`} component={Post} />
      </div>
    )
}
export default Posts;