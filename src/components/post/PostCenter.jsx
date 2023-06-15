import './post.css'

function PostCenter({ post }) {
  return (
    <div className='postCenter'>
      {/* not all posts have description, so post?.desc */}
      <span className='postText'>{post?.desc}</span>
      <img className='postImg' src='/assets/post/1(1).jpeg' alt='' />
    </div>
  )
}
export default PostCenter
