import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import LabelIcon from '@mui/icons-material/Label'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'

function ShareOptions() {
  return (
    <div className='shareOptions'>
      <div className='shareOption'>
        <PermMediaIcon
          htmlColor='#823038'
          className='shareIcon'
        ></PermMediaIcon>
        <span className='shareOptionText'>Photo or Video</span>
      </div>
      <div className='shareOption'>
        <LabelIcon htmlColor='#6699cc' className='shareIcon'></LabelIcon>
        <span className='shareOptionText'>Tag</span>
      </div>
      <div className='shareOption'>
        <LocationOnIcon
          htmlColor='#1c6449'
          className='shareIcon'
        ></LocationOnIcon>
        <span className='shareOptionText'>Location</span>
      </div>
      <div className='shareOption'>
        <EmojiEmotionsIcon
          htmlColor='#eca72c'
          className='shareIcon'
        ></EmojiEmotionsIcon>
        <span className='shareOptionText'>Feelings</span>
      </div>
    </div>
  )
}
export default ShareOptions
