import Landing from "./pages/landingPages/Landing";
import Detail from "./pages/detailPages/Detail";
import {Route, Routes} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Landing}></Route>
        <Route path="/detail/:positionId" Component={Detail}></Route>
      </Routes>
    </div>
  );
}

export default App;
