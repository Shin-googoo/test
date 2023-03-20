
import React from 'react';

const Post=({match})=>{
    return(
      <div>  {/*match.params.동적으로 전달받은 매개변수명 */}
         <h2>포스트 {match.params.id}</h2>
      </div>
    )
}
export default Post;