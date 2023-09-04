import style from "./Header.module.css";
import Basket from "./Basket";
import PersonIcon from "../Card/PersonIcon";

const Header = () => {
  return (
    <header>
      <div className={style.hedir}>
        <div className={style.logo}>
          <div>ROBOMARKT</div>
        </div>
        <div className={style.do}>
          <PersonIcon
            src="Assets/images/profile_photos/elliot.jpeg"
            className={style.person}
          />
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default Header;
