import './sidebar.css'

function SidebarFriends({ user }) {
  return (
    <li className='sidebarFriend'>
      <img className='sidebarfriendImg' src={user.profilePicture} alt='' />
      <span className='sidebarFriendName'>{user.username}</span>
    </li>
    /*  <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/2.jpeg' alt='' />
        <span className='sidebarFriendName'>Emanuele Esposito</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/3.jpeg' alt='' />
        <span className='sidebarFriendName'>Una Bona</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/4.jpeg' alt='' />
        <span className='sidebarFriendName'>Claudia Due</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/5.jpeg' alt='' />
        <span className='sidebarFriendName'>Chiara</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/6.jpeg' alt='' />
        <span className='sidebarFriendName'>Luca Esposito</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/7.jpeg' alt='' />
        <span className='sidebarFriendName'>Simone Esposito</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/8.jpeg' alt='' />
        <span className='sidebarFriendName'>Ragazza Bona</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/9.jpeg' alt='' />
        <span className='sidebarFriendName'>Altra Bona</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/10.jpeg' alt='' />
        <span className='sidebarFriendName'>Vanessa</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/1.jpeg' alt='' />
        <span className='sidebarFriendName'>Chiara</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/2.jpeg' alt='' />
        <span className='sidebarFriendName'>Emanuele Esposito</span>
      </li>
      <li className='sidebarFriend'>
        <img className='sidebarfriendImg' src='/assets/person/3.jpeg' alt='' />
        <span className='sidebarFriendName'>Una Bona</span>
      </li> */
  )
}
export default SidebarFriends
