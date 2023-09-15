import React from "react";
import style from "./ErrorPage.module.css";
const ErrorPage = () => {
  return (
    <section className={style.main}>
      <img
        className={style.img}
        src="Assets/images/404-error-page-examples-best.jpg"
        alt=""
      />
    </section>
  );
};

export default ErrorPage;
