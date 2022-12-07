import { Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import Home from './containers/home.container'
import Login from './containers/login.container'

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path='login' element={ <Login /> } />
        <Route path='/*' element={ <Home /> } />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App