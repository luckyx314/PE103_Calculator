import './App.css';

import NumberBtns from "./components/NumberBtns/NumberBtns"
import SelectOperation from './components/SelectOperation/SelectOperation';

function App() {
  return (
    <div className="App">
      <main>
        <SelectOperation />
        <NumberBtns />
      </main>
    </div>
  );
}

export default App;
