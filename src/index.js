import "./index.css";
import state, { subscribe } from './redux/state'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </BrowserRouter>,
  );
};

reportWebVitals();

rerenderEntireTree(state);

reportWebVitals();

subscribe(rerenderEntireTree)