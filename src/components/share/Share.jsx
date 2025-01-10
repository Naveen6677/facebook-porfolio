import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src="/asssets/person/person2.jpg" alt="" />
            <input placeholder="What's on your mind" className="shareInput"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <span className="shareOptionText">
                    <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                        Photo or Video
                    </span>
                </div>
                <div className="shareOption">
                    <span className="shareOptionText">
                    <LabelIcon htmlColor="blue" className="shareIcon"/>
                        Tag
                    </span>
                </div>
                <div className="shareOption">
                    <span className="shareOptionText">
                    <RoomIcon htmlColor="green" className="shareIcon"/>
                        Location
                    </span>
                </div>
                <div className="shareOption">
                    <span className="shareOptionText">
                    <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                        Feelings
                    </span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
