import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Posts } from '../../data'

function PostTop({ post }) {
  return (
    <div className='postTop'>
      <div className='postTopLeft'>
        <img src='/assets/person/1.jpeg' className='postProfileImg' alt='' />
        <span className='postUsername'>Claudia</span>
        <span className='postDate'>{post.date}</span>
      </div>
      <div className='postTopRight'>
        <MoreVertIcon></MoreVertIcon>
      </div>
    </div>
  )
}
export default PostTop
