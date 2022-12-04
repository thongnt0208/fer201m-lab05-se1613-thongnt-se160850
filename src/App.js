import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './components/homepage';
import Contact from './components/contact';
import Projects from './components/projects';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Projects' element={<Projects></Projects>}></Route>
      </Routes>

    </div>
  );
}

export default App;
