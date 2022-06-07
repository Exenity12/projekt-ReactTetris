import './App.css';
import Settings from './Components/Settings/Settings';
import Authorization from './Components/Authorization';
import Registration from './Components/Registration';
import Main from './Components/Main'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element= { <Main />}/>
            <Route path="/Registration" element= { <Registration />}/>
            <Route path="/Authorization" element= { <Authorization />}/>
            <Route path="/Game" element= { <Settings />}/>
        </Routes>
    </div>
  );
}

export default App;
