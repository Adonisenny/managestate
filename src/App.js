import logo from './logo.svg';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import './App.css';
import './index.css'
import Addit from './components/usestate';
import Testit from './components/TestIt';
import Home from './components/Home';
import SpreadSheet from './components/SpreadSheet';

function App() {
  return (
    <Router>
    <>
      <Switch>

        <Route exact path='/'>
     <Home />

     </Route>
     <Route exact path='/SpreadSheet'>
     <SpreadSheet />
     
     </Route>
     </Switch>
    </>
    </Router>
  );
}

export default App;
