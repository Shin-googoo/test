
import React from 'react';
//링크를 걸기위해서 <Link>
import {Link} from 'react-router-dom';

const Menu=()=>{
    return(
      <div>
         <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/about/foo">About Foo</Link></li>
         </ul>
      </div>
    )
}
export default Menu;