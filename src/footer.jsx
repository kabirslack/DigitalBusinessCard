import Facebook from './assets/FacebookIcon.png'
import Twitter from './assets/Twitter Icon.png'
import Instagram from './assets/InstagramIcon.png'
import Linkedin from './assets/linkedin.png'
import Github from './assets/GitHub Icon.png'
import './footer.css'
export default function footer () {
    return(
        <div className="footer">
            <div className="iconList">
                <img src={Twitter} />
                <img src={Facebook} />
                <img src={Instagram} />
                <img src={Linkedin} />
                <img src={Github} />
            </div>
        </div>
    )
}