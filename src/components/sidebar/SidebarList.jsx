import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import GroupIcon from '@mui/icons-material/Group'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import WorkIcon from '@mui/icons-material/Work'
import EventIcon from '@mui/icons-material/Event'
import SchoolIcon from '@mui/icons-material/School'

function SidebarList() {
  return (
    <ul className='sidebarList'>
      <li className='sidebarListItem'>
        <RssFeedIcon className='sidebarIcon'></RssFeedIcon>
        <span className='sidebarListItemText'>Feed</span>
      </li>
      <li className='sidebarListItem'>
        <ChatIcon className='sidebarIcon'></ChatIcon>
        <span className='sidebarListItemText'>Chats</span>
      </li>
      <li className='sidebarListItem'>
        <PlayCircleIcon className='sidebarIcon'></PlayCircleIcon>
        <span className='sidebarListItemText'>Videos</span>
      </li>
      <li className='sidebarListItem'>
        <GroupIcon className='sidebarIcon'></GroupIcon>
        <span className='sidebarListItemText'>Groups</span>
      </li>
      <li className='sidebarListItem'>
        <BookmarkIcon className='sidebarIcon'></BookmarkIcon>
        <span className='sidebarListItemText'>Bookmarks</span>
      </li>
      <li className='sidebarListItem'>
        <HelpOutlineIcon className='sidebarIcon'></HelpOutlineIcon>
        <span className='sidebarListItemText'>Questions</span>
      </li>
      <li className='sidebarListItem'>
        <WorkIcon className='sidebarIcon'></WorkIcon>
        <span className='sidebarListItemText'>Jobs</span>
      </li>
      <li className='sidebarListItem'>
        <EventIcon className='sidebarIcon'></EventIcon>
        <span className='sidebarListItemText'>Events</span>
      </li>
      <li className='sidebarListItem'>
        <SchoolIcon className='sidebarIcon'></SchoolIcon>
        <span className='sidebarListItemText'>Courses</span>
      </li>
    </ul>
  )
}
export default SidebarList
