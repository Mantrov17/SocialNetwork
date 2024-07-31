import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.ibb.co/c1RR6pz/422724-svetik-3840x2400.jpg" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span> 
      </div>
    </div>

  );
};

export default Post;
