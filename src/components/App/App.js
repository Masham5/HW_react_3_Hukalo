import { Hw1 } from '../Hw1/Hw1';
import { Hw2 } from '../Hw2/Hw2';
import './App.css';

let arr = ["Alex", "Ivan", "Peter", "David", "John"];

function App() {
  return (
    <div className="App">
      <Hw1 list={arr} />
      <Hw2 />
    </div>
  );
}

export default App;
