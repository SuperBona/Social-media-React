import './profile.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'

export default function Profile() {
  return (
    <>
      <Topbar></Topbar>
      <div className='profile'>
        <Sidebar></Sidebar>
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src='assets/post/6(1).jpeg'
                className='profileCoverImg'
                alt=''
              />
              <img
                src='assets/person/ciro.JPG'
                className='profileUserImg'
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Ciro Esposito</h4>
              <span className='profileInfoDesc'>I'm the best in the world</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed></Feed>
            {/* going to use profile in rightbar.jsx */}
            <Rightbar profile></Rightbar>
          </div>
        </div>
      </div>
    </>
  )
}
