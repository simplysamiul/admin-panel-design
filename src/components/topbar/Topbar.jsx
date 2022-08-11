import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import './topBar.css';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topLeft">
                    <span className='logo'>simplysamiul</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <div className="topIconBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <div className="topIconBadge">2</div>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=" alt="" className="topvtar" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;