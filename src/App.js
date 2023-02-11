import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import AddNewTask from './Components/AddNewTask';

function App() {
  return (
    <div className="App">
      <AddNewTask/>
      <List/>
    </div>
  );
}

export default App;
