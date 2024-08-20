import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialoguesContainer from './components/Dialogues/DialoguesContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              exact
              path="/profile"
              element={<Profile store = {props.store} />}
            />
            <Route
              exact
              path="/dialogues"
              element={<DialoguesContainer store = {props.store} />}
            />
            <Route
              exact
              path="/users"
              element={ <UsersContainer />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
