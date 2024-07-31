let rerenderEntireTree = () => {
  console.log('oooo')
}

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 54 },
      { id: 2, message: "It's my first post", likesCount: 27 },
      { id: 2, message: "It's my first post", likesCount: 27 },
      { id: 2, message: "It's my first post", likesCount: 27 },
    ],
    newPostText: 'bobik'
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
  },
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);

}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
