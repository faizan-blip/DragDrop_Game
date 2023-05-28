
import './App.css';
import Drag from './Components/Drag';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

function App() {

  return (
    <Router basename='/DragDrop_Game' >
  <>
  <Switch>
    <Route exact path='/'>
    <Navbar />
    </Route>
    <Route exact path='/drag'>
    <Drag/>
    </Route>
  </Switch>

  </>
  </Router>
  );
}

export default App;
