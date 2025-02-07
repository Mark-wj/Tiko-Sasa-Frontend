import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Events from './pages/Events'
import Hotels from './pages/Hotels'
import Movies from './pages/Movies'
import NavBar from "./components/NavBar.jsx"
import Login from "./components/Login.jsx"
import Registration from "./components/Registration.jsx"

function App() {


  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
           <Home />
          </Route>
          <Route path="/events">
           <Events />
          </Route>
          <Route path="/hotels">
           <Hotels />
          </Route>
          <Route path="/movies">
           <Movies />
          </Route>
          <Route path="/login">
           <Login />
          </Route>
          <Route path="/register">
           <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
