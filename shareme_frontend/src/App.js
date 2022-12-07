import { Routes, Route } from 'react-router-dom'


import Home from './containers/home.container'
import Login from './containers/login.container'

const App = () => {
  return (
    
      <Routes>
        <Route path='login' element={ <Login /> } />
        <Route path='/*' element={ <Home /> } />
      </Routes>
  )
}

export default App