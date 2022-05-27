import logo from './logo.svg';
import './App.css';
import IncidentList from './component/pages/IncidentList';
import AddIncident from './component/pages/AddIncident';
import Header from './component/shared/layout/Header';
import Page404 from './component/common/Page404';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <div class="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={ <IncidentList/>}></Route>
        <Route exact path="/add" element={ <AddIncident/>} ></Route>
        <Route exact path="*" element={ <Page404/>} ></Route>
      </Routes>
     
      </div>
    </Router>
    
  );
}

export default App;
