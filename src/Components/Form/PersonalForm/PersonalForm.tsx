import React from "react";
import style from "./PersonalForm.module.css";
import EmailInput from "./EmailInput";
import Name from "./Name";
import WebSite from "./WebSite";
import SurName from "./Surname";
import ProfileImage from "./ProfileImage";
import { InputGroup, Box, Image } from "@chakra-ui/react";
const PersonalForm = () => {
  return (
    <div className={style.main}>
      <form className={style.form}>
        <div className={style.ppArea}>
          <ProfileImage />
        </div>
        <InputGroup>
          <Name />
          <SurName />
        </InputGroup>
        <EmailInput />
        <WebSite />
      </form>
    </div>
  );
};

export default PersonalForm;
