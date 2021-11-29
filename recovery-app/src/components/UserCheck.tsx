import styled from "styled-components";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { user } from "../store/atoms";
import { userInfo } from "os";

const StyledUserCheck = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  position: fixed;
  display: flex;

  //color: black;
  background-color: cadetblue;
`;

const CheckBox = styled.div`
  width: 10rem;
  height: 3rem;
  margin: auto;
  align-self: center;

  text-align: center;
`;

const StyledInput = styled.input`
  width: 4rem;
  height: 2rem;
  margin: auto;

  background-color: lightskyblue;
`;

const CheckForm = styled.form`
  display: flex;
  justify-content: space-around;
`;

export const UserCheck = () => {
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useRecoilState(user);
  console.log(password);

  const toggleLogin = (event: any) => {
    event.preventDefault();
    if (password === "tom") {
      setUserInfo({ ...userInfo, loggedIn: true });
    } else {
      alert("wrong password");
    }
    console.log(userInfo);
  };
  const tmp = userInfo.loggedIn;
  return (
    <StyledUserCheck>
      <CheckBox>
        <CheckForm onSubmit={toggleLogin}>
          <label>
            <StyledInput
              type={"text"}
              id={"userChecker"}
              name={"userChecker"}
              placeholder={""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </label>
          <button type="button" onClick={toggleLogin}>
            OK
          </button>
        </CheckForm>
      </CheckBox>
    </StyledUserCheck>
  );
};
