import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { client } from '../client'

const Login = () => {
  const navigate = useNavigate();

  const responseGoogleHandler = (response) => {
    const decode = jwt_decode(response.credential)
    localStorage.setItem('user', JSON.stringify(decode))
    console.log(localStorage.getItem('user'))
    const { name, aud, picture } = decode;

    const userDoc = {
      _id: aud,
      _type: 'user',
      userName: name,
      image: picture,
    }

    client.createIfNotExists(userDoc) 
      .then(navigate('/', {replace: true}))
  }

  return (
    <div className='flex jusitfy-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
          <video 
            src={shareVideo}
            type='video/mp4'
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
          />
          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
            <div className='p-5'>
              <img src={logo} width='130px' alt='logo' />
            </div>
            <div className='shadow-2xl'>
              <GoogleLogin 
                onSuccess={ responseGoogleHandler }
                onFailure={() => console.log('Login failed')}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login