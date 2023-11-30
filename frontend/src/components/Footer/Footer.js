import './Footer.css';
import {ReactComponent as Insta} from "../../assets/images/social/instagram.svg";
import {ReactComponent as FB} from "../../assets/images/social/facebook.svg";
import {ReactComponent as Twitch} from "../../assets/images/social/twitch.svg";


export default function Footer() {
    return(
        <div className='footerContainer'>
            <div className='social'>
                <a href='https://www.instagram.com/lsacbucuresti/'><Insta/></a>
                <a href='https://www.facebook.com/LsacBucuresti/'><FB/></a>
                <a href='https://www.twitch.tv/lsac_bucuresti'><Twitch/></a>
            </div>
        </div>
    );
}