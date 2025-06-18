import { memo } from 'react'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex gap-5'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default memo(Home)