import style from "./ProfilePage.module.css";
import ProfileButtonsArea from "./ProfileButtonsArea";
import { Outlet } from "react-router-dom";
const ProfilePage = () => {
  return (
    <>
      <section className={style.main}>
        <div className={style.area}>
          <ProfileButtonsArea />
          <div className={style.contentArea}>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
