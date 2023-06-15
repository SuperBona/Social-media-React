import PostBottom from './PostBottom'
import PostCenter from './PostCenter'
import PostTop from './PostTop'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Users } from '../../data'
import { useState } from 'react'

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    /* click on like gives +1 everytime */
    setLike(isLiked ? like - 1 : like + 1)
    /* now, if i like the post, i remove it with another click */
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              className='postProfileImg'
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=''
            />
            <span className='postUsername'>
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVertIcon />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={post.photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src='assets/like.png'
              onClick={likeHandler}
              alt=''
            />
            <img
              className='likeIcon'
              src='assets/heart.png'
              onClick={likeHandler}
              alt=''
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* PostTop, PostCenter and PostBottom doens't work when i use people.like, people.comment, etc. I have to set everything in the return here */
/* filter - User an Id, so i filter users from their id. datas ar into an array */
