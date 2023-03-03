import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter
} from 'react-router-dom'
import Home from './pages/Home'
import Face from './pages/Face'
import Photo from './pages/Photo'
import Result from './pages/Result'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/face' element={<Face/>} />
        <Route path='/photo' element={<Photo/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
