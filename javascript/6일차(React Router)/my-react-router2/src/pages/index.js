/*
  src/pages/index.js
  여러개의 컴포넌트를 여기에서 불러와서 별칭을 부여->공유(export)
  형식) export { default as 별칭명} from '경로포함해서 불러올 컴포넌트명'
*/
export {default as Home} from './Home';
export {default as About} from './About';
//추가
export {default as Posts} from './Posts';
export {default as Post} from './Post';