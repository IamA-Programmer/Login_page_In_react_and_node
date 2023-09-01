import './App.css';
import Authfront from './authfront';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Signup from './signup';
import Profile from './profile';
import 'font-awesome/css/font-awesome.min.css';


function App() {

  return (
   <Routes>
    <Route path="/" element={<Authfront/>}></Route>
    <Route path="/register" element={<Signup/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    
  );
}

export default App;
