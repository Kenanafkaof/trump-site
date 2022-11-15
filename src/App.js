import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Select from './pages/Select';
import {
  HashRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Scandalslisted from './pages/Scandalslisted';
import Information from './pages/Information';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Select /> }/>
          <Route exact path="/analysis" element={<Home /> }/>
          <Route exact path="/scandals" element={<Scandalslisted /> }/>
          <Route exact path="/information" element={<Information /> }/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
