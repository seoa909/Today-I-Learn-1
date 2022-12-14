import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { __addUser } from "../redux/modules/user";
import {
  StInputContainer,
  StButtonContainer,
  StFlexRow,
} from "./Common/Public";

const UserDataAdd = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const nameRef = useRef();
  const nicknameRef = useRef();
  const numberRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();

  const dispatch = useDispatch();

  // 등록하기 버튼 클릭
  const onClickEventHandler = () => {
    // 유효성검사
    if (name === "" || nickname === "" || number === "")
      alert("빈칸은 안됩니다.");
    else if (number.length !== 11) alert("제대로 된 전화번호를 적어주세요");
    else if (
      maleRef.current.checked === false &&
      femaleRef.current.checked === false
    )
      alert("성별을 선택해 주세요");
    else {
      // 추가하는 로직
      dispatch(
        __addUser({
          name: name,
          gender: gender,
          nickname: nickname,
          number: number,
        })
      );
      // input창 비우기
      nameRef.current.value = "";
      nicknameRef.current.value = "";
      numberRef.current.value = "";
      maleRef.current.checked = false;
      femaleRef.current.checked = false;
    }
  };
  return (
    <>
      <StInputContainer>
        <StFlexRow>
          <input
            type="radio"
            name="gender"
            value="남자"
            ref={maleRef}
            onChange={(e) => setGender(e.target.value)}
          />
          <span>남자</span>
          <input
            type="radio"
            name="gender"
            value="여자"
            ref={femaleRef}
            onChange={(e) => setGender(e.target.value)}
          />
          <span>여자</span>
        </StFlexRow>
        <input
          type="text"
          placeholder="이름"
          maxLength={3}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
        />
        <input
          type="text"
          placeholder="별명"
          maxLength={11}
          onChange={(e) => setNickname(e.target.value)}
          ref={nicknameRef}
        />
        <input
          type="tel"
          placeholder="전화번호"
          maxLength={11}
          onChange={(e) => setNumber(e.target.value)}
          ref={numberRef}
        />
      </StInputContainer>
      <StButtonContainer>
        <button onClick={onClickEventHandler}>등록하기</button>
      </StButtonContainer>
    </>
  );
};

export default UserDataAdd;
