import Landing from "./pages/landingPages/Landing";
import Detail from "./pages/detailPages/Detail";
import {Navigate, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from "./pages/login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute><Landing/></PrivateRoute>}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/detail/:positionId" element={<PrivateRoute><Detail/></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

function PrivateRoute({children}) {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children
}

export default App;
