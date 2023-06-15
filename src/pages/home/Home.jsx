import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'
import Feed from '../../components/feed/Feed'
import Profile from '../profile/Profile'

export default function Home() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

/* can't use multiple components separately (<Topbar /> <Sidebar />); i have to use <></>, called fragments */
