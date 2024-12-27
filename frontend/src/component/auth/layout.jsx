
import { Outlet } from 'react-router'
import HomeImg from '../../assets/image/home.jpg'

function AuthLayout() {
  return (
    <div className=' flex min-h-screen w-full '>
      {/* left div */}
      <div className='w-6/12  flex flex-col justify-center items-center h-screen'>
      <div  className="flex  min-w-fit min-h-fit justify-center items-center p-4">
      <Outlet/>
      </div>
      </div>

      {/* right div */}
      <div className='w-6/12  h-screen'>
      <div> <img className='object-fill  h-screen w-full' src={HomeImg} />  </div>
      </div>
    </div>
  )
}

export default AuthLayout