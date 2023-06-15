import './sidebar.css'
import SidebarFriends from './sidebarFriends'
import SidebarList from './SidebarList'
import { Users } from '../../data'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        {/* items -links */}
        <SidebarList></SidebarList>
        {/* button */}
        <button className='sidebarButton'>Show more</button>
        <hr className='sidebarHr' />
        {/* friend list */}
        <ul className='sidebarFriendList'>
          {Users.map((u) => (
            <SidebarFriends user={u} key={u.id}></SidebarFriends>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Sidebar

/* <hr/> add a line below */
