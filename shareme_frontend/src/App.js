import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { fetchUser } from './utils/fetchUser'
import Home from './containers/home.container'
import Login from './containers/login.container'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate('/login')

  }, [])

  return (
      <Routes>
        <Route path='login' element={ <Login /> } />
        <Route path='/*' element={ <Home /> } />
      </Routes>
  )
}

export default App