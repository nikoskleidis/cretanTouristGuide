import React from "react"
import "./App.css"
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home/home"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="menu">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
             <Link to="/users">Users</Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App


function Users() {
  return <h2>Users</h2>
}
