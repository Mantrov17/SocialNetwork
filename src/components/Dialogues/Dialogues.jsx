import s from "./Dialogues.module.css";
import DialogueItem from "./DilogueItem/DialogueItem";
import Message from "./Message/Message";

const Dialogues = (props) => {
  let dialogsElements = props.state.dialogues.map((dialogue) => (
    <DialogueItem name={dialogue.name} id={dialogue.id} />
  ));

  let messagesElements = props.state.messages.map((message) => (
    <Message id={message.id} message={message.message} />
  ));

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogues;
