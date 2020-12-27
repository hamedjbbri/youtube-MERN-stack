import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Main from './components/Main';
import Upload from './components/Upload';
 

function App() {
  return (
   <Router>
    <div className="App"> 
      <Switch>    
        <Route path='/' exact component={Main} />
        <Route path='/upload' component={Upload} />
      </Switch>
    </div>
  </Router>
  
  
  );
}

export default App;
