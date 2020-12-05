  
import './App.css';
import { Home } from "./Home.js"
import './App.css';

function App() {
  const user = { id: 1, name: "Alan"}
  return (
    <div>
      <Home user = {user}/>
    </div>
  );
}

export default App;
