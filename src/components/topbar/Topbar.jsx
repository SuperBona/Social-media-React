import './topbar.css'

import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'

function Topbar() {
  return (
    /* topbar */
    <div className='topbarContainer'>
      {/* left */}
      <div className='topbarLeft'>
        <span className='logo'>CiroSocial</span>
      </div>
      {/* center */}
      <div className='topbarCenter'>
        <div className='searchbar'>
          <SearchIcon className='searchIcon'></SearchIcon>
          <input
            placeholder='Search for friend, post or video'
            className='searchInput'
          ></input>
        </div>
      </div>
      {/* right -links and icons */}
      <div className='topbarRight'>
        <div className='topbarLinks'>
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className='topbarIcons'>
          <div className='topbarIconItem'>
            <PersonIcon></PersonIcon>
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
            <ChatIcon></ChatIcon>
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <NotificationsIcon></NotificationsIcon>
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        {/* topbar img - profile picture */}
        <img className='topbarImg' src='/assets/person/ciro.JPG' alt='' />
      </div>
    </div>
  )
}
export default Topbar
