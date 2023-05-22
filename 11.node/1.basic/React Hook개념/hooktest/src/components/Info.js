import React, { useState } from 'react';

const Info = () => {
    //useState()를 두번 사용해서 각각 name,setName,
    //nickname,setNickname 변수값 초기설정
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => { /* inputbox값을 입력받아 setName()을
                                 이용해서 값을 저장시킨다.
                               */
    setName(e.target.value);  
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name} {/* change이벤트에 따른 변경된값 출력  */}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;