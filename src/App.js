import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      {/* <h1 className='text-success text-white bg-primary p-3 m-5 '>Hello! This is working App.</h1> */}
      <Menubar country='Bangladesh'></Menubar>
    </div>
  );
}

export default App;
