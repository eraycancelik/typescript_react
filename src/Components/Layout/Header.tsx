import style from "./Header.module.css";
import Basket from "./Basket";
import PersonIcon from "../Card/PersonIcon";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className={style.hedir}>
        <Link to="/" className={style.logo}>
          <div>ROBOMARKT</div>
        </Link>
        <div className={style.do}>
          <Link to="/profile" className={style.products}>
            <PersonIcon
              src="Assets/images/profile_photos/elliot.jpeg"
              className={style.person}
            />
          </Link>
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default Header;
