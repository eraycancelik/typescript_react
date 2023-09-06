import React from "react";
import style from "./Category.module.css";
type Category = {
  className: string;
  cate: string;
  index: number;
  onClick: () => void;
};
const Category = (props: Category) => {
  return (
    <li onClick={props.onClick} className={props.className} key={props.index}>
      {props.cate}
    </li>
  );
};

export default Category;
