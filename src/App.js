import './App.css';
import Header from './components/Header';
import CreateTaskForm from './components/CreateTaskForm';
import TaskBoard from './components/TaskBoard';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <CreateTaskForm/>
      <TaskBoard/>
    </div>
  );
}

export default App;
