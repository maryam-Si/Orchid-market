import "./App.css";
import {Switch,Route} from 'react-router-dom'
import LoginAdmin from "./pages/admin/LoginAdmin";

function App() {
  return (
    <div className="App">
     <Switch>
       <Route path="/admin/login" exact component={LoginAdmin} />
     </Switch>
     
    </div>
  );
}

export default App;
