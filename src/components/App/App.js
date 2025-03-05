import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import Top from '../Top/Top';
import History from '../History/History.js';
import Before from '../Before/Before.js';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='*' element={''} /> */}
        <Route path='/' element={<Main />} />
        <Route path='/top-10' element={<Top />} />
        <Route path='/history' element={<History />} />
        <Route path='/before-us' element={<Before />} />
      </Routes>
    </div>
  );
}

export default App;
