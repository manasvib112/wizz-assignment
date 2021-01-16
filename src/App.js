import Home from './Views/Home'
import Login from './Views/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/home' component={Home} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
