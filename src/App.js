import { useSelector } from 'react-redux';
import './App.css';
import Landing from './layouts/Landing';


function App() {
    localStorage.setItem("zoho_assignment_redux_state", JSON.stringify(useSelector(state=>state)));
  return (
    <Landing/>
  );
}

export default App;
