import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co/F8C66WM/95ce40cd7cacbdd56d4f8eed5ae7d75a.jpg"
          alt="back"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photo.large} />
        avatar+ description
      </div>
    </div>
  );
};
export default ProfileInfo;
