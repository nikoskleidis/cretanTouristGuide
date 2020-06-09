import React from "react"
import "./App.css"
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import About from "./Pages/About"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul class="menu">
              <Link to="/">Home</Link>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

function Home() {
  return <h2>Home</h2>
}

function Users() {
  return <h2>Users</h2>
}
