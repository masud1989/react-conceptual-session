import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import Test from './Components/Test/Test';

function App() {
  const count = () => {
  
  };
  return (
    <div className="App"> 
      <Test count={count}></Test>
    </div>
  );
}

export default App;
