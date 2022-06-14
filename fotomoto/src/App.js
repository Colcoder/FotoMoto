import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Posts from './components/Posts';
import {Routes,Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Routes>
    </div>
  );
}

export default App;
