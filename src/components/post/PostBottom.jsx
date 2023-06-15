import { useState } from 'react'
import './post.css'
import { Users } from '../../data'

function PostBottom() {
  cons[(like, setLike)] = useState(post.like)
  cons[(isLiked, setIsLiked)] = useState(false)
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
  }
  console.log(like)
  return (
    <div className='postBottom'>
      <div className='postBottomLeft'>
        <img
          className='likeIcon'
          src='/assets/like.png'
          onClick={likeHandler}
        />
        <img
          className='likeIcon'
          src='/assets/heart.png'
          onClick={likeHandler}
        />
        <span className='postLikeCounter'>{like} people liked it</span>
      </div>
      <div className='postBottomRight'>
        <span className='postCommentText'>{post.comment} comments</span>
      </div>
    </div>
  )
}
export default PostBottom
