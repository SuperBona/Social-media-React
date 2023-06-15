import FriendsList from './FriendsList'
import './rightbar.css'
import { Users } from '../../data'
import Online from '../online/Online'

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img src='/assets/gift.png' className='birthdayImg' alt='' />
          <span className='birthdayText'>
            <b>Luca Esposito</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img src='/assets/ad.png' alt='' className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online user={u} key={u.id}></Online>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User informations</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>Napoli</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Italy</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Loves everyone</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/1.jpeg'
              className='rightbarFollowingImg'
              alt=''
            />
            <span className='rightbarFollowingName'>Claudia</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/2.jpeg'
              className='rightbarFollowingImg'
              alt=''
            />
            <span className='rightbarFollowingName'>Emanuele</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/5.jpeg'
              className='rightbarFollowingImg'
              alt=''
            />
            <span className='rightbarFollowingName'>Chiara</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/6.jpeg'
              className='rightbarFollowingImg'
              alt=''
            />
            <span className='rightbarFollowingName'>Luca</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/7.jpeg'
              className='rightbarFollowingImg'
              alt=''
            />
            <span className='rightbarFollowingName'>Simone</span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/10.jpeg'
              className='rightbarFollowingImg'
              alt=''
            />
            <span className='rightbarFollowingName'>Vanessa</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? (
          <ProfileRightbar></ProfileRightbar>
        ) : (
          <HomeRightbar></HomeRightbar>
        )}
        {/* <div className='birthdayContainer'>
          <img src='/assets/gift.png' className='birthdayImg' alt='' />
          <span className='birthdayText'>
            <b>Luca Esposito</b> and <b>3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img src='/assets/ad.png' alt='' className='rightbarAd' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online user={u} key={u.id}></Online>
          ))}
        </ul> */}
      </div>
    </div>
  )
}
export default Rightbar
