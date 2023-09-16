import style from "./ProfilePage.module.css";
import PersonalForm from "../../Components/Form/PersonalForm";
const ProfilePage = () => {
  return (
    <>
      <section className={style.main}>
        <h1>Profile Page</h1>
        <div className={style.area}>
          <div className={style.buttonArea}>
            <button className={style.mainButton}>Settings</button>
            <button className={style.button}>Personal</button>
            <button className={style.button}>Address</button>
            <button className={style.button}>Payment</button>
          </div>
          <div className={style.contentArea}>
            <PersonalForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
