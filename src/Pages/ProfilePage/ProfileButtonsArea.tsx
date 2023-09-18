import style from "./ProfileButtonsArea.module.css";
import { NavLink } from "react-router-dom";
const ProfileButtonsArea = () => {
  return (
    <div className={style.buttonArea}>
      <h3 className={style.settings}>Settings</h3>
      <NavLink
        to={"/profile"}
        end
        className={({ isActive }) => (isActive ? style.active : style.button)}
      >
        Personal
      </NavLink>
      <NavLink
        to={"addresses"}
        className={({ isActive }) => (isActive ? style.active : style.button)}
      >
        Address
      </NavLink>
      <NavLink
        to={"payment_methods"}
        className={({ isActive }) => (isActive ? style.active : style.button)}
      >
        Payment
      </NavLink>
    </div>
  );
};

export default ProfileButtonsArea;
