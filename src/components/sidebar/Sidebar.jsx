import "./sidebar.css"
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemtext">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon"/>
                        <span className="sidebarListItemtext">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleIcon className="sidebarIcon"/>
                        <span className="sidebarListItemtext">Videos</span>
                    </li>

                    <li className="sidebarListItem">
                        <GroupIcon className="sidebarIcon"/>
                        <span className="sidebarListItemtext">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkIcon className="sidebarIcon"/>
                        <span className="sidebarListItemtext">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineIcon className="sidebarIcon"/>
                        <span className="sidebarListItemtext">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutlineOutlinedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemtext">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <InsertInvitationIcon className="sidebarIcon"/>
                        <span className="sidebarListItemtext">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u) => <CloseFriend key={u.id} user={u}/>)}
                </ul>
            </div>
        </div>
    )
}