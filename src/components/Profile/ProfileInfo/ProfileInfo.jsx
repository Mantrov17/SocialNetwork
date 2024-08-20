import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co/F8C66WM/95ce40cd7cacbdd56d4f8eed5ae7d75a.jpg"
          alt="back"
        />
      </div>
      <div className={s.descriptionBlock}>avatar+ description</div>
    </div>
  );
};
export default ProfileInfo;
