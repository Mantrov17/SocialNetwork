import profileReducer from './profile-reducer'
import dialoguesReducer from './dialogues-reducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 54 },
        { id: 2, message: "It's my first post", likesCount: 27 },
        { id: 2, message: "It's my first post", likesCount: 27 },
        { id: 2, message: "It's my first post", likesCount: 27 },
      ],
      newPostText: "bobik",
    },
    dialoguesPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action);


    this._callSubscriber(this._state);

  },
};

window.store = store;

export default store;
