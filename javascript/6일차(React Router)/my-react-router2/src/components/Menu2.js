
import React from 'react';
//링크를 걸기위해서 <Link>
import {NavLink} from 'react-router-dom';

const Menu2=()=>{
    const activeStyle={
        color:'green',
        fontSize:'2rem'
    }
    /*
     Link=>요청받아서 처리
     NavLink=>요청을 받아서 처리하면서 스타일이 같이 적용
    */
    return(
      <div>
         <ul>
             <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
             <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
             <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
             <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
         </ul>
      </div>
    )
}
export default Menu2;