import s from "./Dialogues.module.css";
import DialogueItem from "./DilogueItem/DialogueItem";
import Message from "./Message/Message";

const Dialogues = (props) => {

  let state = props.dialoguesPage;

  let dialoguesElements = state.dialogues.map((dialogue) => (
    <DialogueItem name={dialogue.name} key = {dialogue.id} id={dialogue.id} />
  ));

  let messagesElements = state.messages.map((message) => (
    <Message id={message.id} key = {message.id} message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>{dialoguesElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
