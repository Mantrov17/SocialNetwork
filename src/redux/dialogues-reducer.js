const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Privet!!" },
    { id: 3, message: "O no" },
    { id: 4, message: "I am busy" },
    { id: 5, message: "Give me my money back" },
    { id: 6, message: "Don't trust Zombie" },
    { id: 7, message: "Explosion" },
  ],
  dialogues: [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Banan" },
    { id: 3, name: "Kisa" },
    { id: 4, name: "Pudge" },
    { id: 5, name: "Zombie228" },
    { id: 6, name: "Amerikanetz1489" },
    { id: 7, name: "Kega" },
  ],
  newMessageBody: '',
}

const dialoguesReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: body }],
        newMessageBody: ""
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});


export default dialoguesReducer;
