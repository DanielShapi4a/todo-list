import logo from './logo.svg';
import './App.css';
import ToDoList from './Components/ToDoList';
import Timer from './Components/Timer';
import DropdownMenu from './Components/DropDown';
import Gallery from './Components/Galley';

function App() {
  return (
    <>
      <ToDoList/>
      <Timer/>
      <DropdownMenu/>
      <Gallery/>
    </>
  );
}

export default App;
