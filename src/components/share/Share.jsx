import ShareOptions from './ShareOptions'
import './share.css'

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        {/* top: profile picture and some import */}
        <div className='shareTop'>
          <img
            className='shareProfileImg'
            src='/assets/person/ciro.JPG'
            alt=''
          />
          <input
            placeholder="What's on your mind, Ciro?"
            className='shareInput'
          />
        </div>
        <hr className='shareHr' />
        {/* share: some options like add imgs or videos, ecc.. */}
        <div className='shareBottom'>
          <ShareOptions></ShareOptions>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
